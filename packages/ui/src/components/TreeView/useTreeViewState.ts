import { useCallback, useState } from "react";
import type { TreeViewContextValue } from "./types";
import type { TreeNode } from "./types";
import type { FlatTreeNode } from "./types";
import {
  flattenTree,
  getParentId,
  insertNodeAfter,
  insertNodesAsChildren,
  insertNodesBefore,
  isDescendant,
  removeMultipleNodes,
  updateNode,
} from "./utils";

const DRAG_DATA_KEY = "application/x-tree-node-id";

/**
 * TreeView 상태 및 이벤트 핸들러 (비즈니스/오케스트레이션 로직).
 * UI와 분리되어 테스트·재사용이 쉬움.
 */
export function useTreeViewState(initialTree: TreeNode[]): {
  rows: FlatTreeNode[];
  contextValue: TreeViewContextValue;
  /** 플레이스홀더 활성 여부 등 드래그 UI용 */
  isPlaceholderActive: (index: number) => boolean;
} {
  const [tree, setTree] = useState(initialTree);
  const [collapsed, setCollapsed] = useState<Set<string | number>>(new Set());
  const [selected, setSelected] = useState<Set<string | number>>(new Set());
  const [lastSelectedId, setLastSelectedId] = useState<string | number | null>(null);
  const [draggingIds, setDraggingIds] = useState<Set<string | number>>(new Set());
  const [dropIndex, setDropIndex] = useState<number | null>(null);
  const [dropParentId, setDropParentId] = useState<string | number | null>(null);

  const rows = flattenTree(tree, collapsed);

  /** 드래그 중인 노드 중 캔버스가 하나라도 있으면 true */
  const isDraggingCanvas = (() => {
    if (draggingIds.size === 0) return false;
    return Array.from(draggingIds).some((id) => rows.find((r) => r.id === id)?.type === "canvas");
  })();

  /** 해당 인덱스에 드롭 시 노드가 위치할 depth (현재 rows 기준). */
  const getDepthAtDropIndex = useCallback(
    (index: number) => {
      if (index < rows.length) return rows[index].depth;
      return rows[rows.length - 1]?.depth ?? 0;
    },
    [rows],
  );

  const onSelect = useCallback(
    (id: string | number, event?: { shiftKey: boolean; ctrlKey: boolean; metaKey: boolean }) => {
      const shift = event?.shiftKey ?? false;
      const addToSelection = event?.ctrlKey ?? event?.metaKey ?? false;
      if (addToSelection) {
        setSelected((prev) => {
          const next = new Set(prev);
          if (next.has(id)) next.delete(id);
          else next.add(id);
          return next;
        });
        setLastSelectedId(id);
        return;
      }
      if (shift && lastSelectedId != null) {
        const fromIdx = rows.findIndex((r) => r.id === lastSelectedId);
        const toIdx = rows.findIndex((r) => r.id === id);
        if (fromIdx !== -1) {
          const lo = Math.min(fromIdx, toIdx);
          const hi = Math.max(fromIdx, toIdx);
          setSelected((prev) => {
            const next = new Set(prev);
            for (let i = lo; i <= hi; i++) next.add(rows[i].id);
            return next;
          });
        } else {
          setSelected(new Set([id]));
        }
        setLastSelectedId(id);
        return;
      }
      setSelected(new Set([id]));
      setLastSelectedId(id);
    },
    [rows, lastSelectedId],
  );

  const onToggleCollapse = useCallback((id: string | number) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const onToggleVisible = useCallback(
    (id: string | number, current: boolean) =>
      setTree((t) => updateNode(t, id, { visible: !current })),
    [],
  );

  const onToggleLocked = useCallback(
    (id: string | number, current: boolean) =>
      setTree((t) => updateNode(t, id, { locked: !current })),
    [],
  );

  const onDragStart = useCallback(
    (e: React.DragEvent<HTMLDivElement>, rowId: string | number) => {
      const ids = selected.has(rowId) ? selected : new Set<string | number>([rowId]);
      setDraggingIds(ids);
      e.dataTransfer.setData(DRAG_DATA_KEY, String(rowId));
      e.dataTransfer.effectAllowed = "move";
    },
    [selected],
  );

  const onDragEnd = useCallback(() => {
    setDraggingIds(new Set());
    setDropIndex(null);
    setDropParentId(null);
  }, []);

  const onDropTarget = useCallback(
    (index: number) => {
      if (isDraggingCanvas && getDepthAtDropIndex(index) !== 0) return;
      setDropIndex(index);
      setDropParentId(null);
    },
    [isDraggingCanvas, getDepthAtDropIndex],
  );

  const onDropTargetClear = useCallback(() => setDropIndex(null), []);

  const onDropParent = useCallback(
    (parentId: string | number) => {
      if (draggingIds.size === 0 || isDraggingCanvas) return;
      const idList = Array.from(draggingIds);
      const firstId = idList[0];
      if (firstId == null) return;
      const directParentId = getParentId(tree, firstId);
      if (
        parentId === directParentId &&
        idList.every((id) => getParentId(tree, id) === directParentId)
      )
        return;
      setDropParentId(parentId);
      setDropIndex(null);
    },
    [tree, draggingIds, isDraggingCanvas],
  );

  const onDropParentClear = useCallback(() => setDropParentId(null), []);

  const onDrop = useCallback(
    (index: number) => {
      if (draggingIds.size === 0) return;
      const { tree: treeWithoutNodes, removedNodes } = removeMultipleNodes(tree, draggingIds, rows);
      if (removedNodes.length === 0) return;
      const hasCanvas = removedNodes.some((n) => n.type === "canvas");
      const newRows = flattenTree(treeWithoutNodes, collapsed);
      if (hasCanvas) {
        const depth =
          index < newRows.length ? newRows[index].depth : newRows[newRows.length - 1]?.depth ?? 0;
        if (depth !== 0) return;
      }
      let nextTree: TreeNode[];
      if (newRows.length === 0) {
        nextTree = removedNodes;
      } else if (index >= newRows.length) {
        nextTree = insertNodeAfter(
          treeWithoutNodes,
          removedNodes[0],
          newRows[newRows.length - 1].id,
        );
        for (let i = 1; i < removedNodes.length; i++)
          nextTree = insertNodeAfter(nextTree, removedNodes[i], removedNodes[i - 1].id);
      } else {
        nextTree = insertNodesBefore(treeWithoutNodes, removedNodes, newRows[index].id);
      }
      setTree(nextTree);
      setDraggingIds(new Set());
      setDropIndex(null);
      setDropParentId(null);
    },
    [tree, rows, collapsed, draggingIds],
  );

  const onDropOnItem = useCallback(
    (parentId: string | number) => {
      if (draggingIds.size === 0 || draggingIds.has(parentId)) return;
      if (Array.from(draggingIds).some((id) => rows.find((r) => r.id === id)?.type === "canvas"))
        return;
      if (Array.from(draggingIds).some((id) => isDescendant(tree, parentId, id))) return;
      const directParentIds = Array.from(draggingIds).map((id) => getParentId(tree, id));
      if (directParentIds.every((pid) => pid === parentId)) return;
      const { tree: treeWithoutNodes, removedNodes } = removeMultipleNodes(tree, draggingIds, rows);
      if (removedNodes.length === 0) return;
      const nextTree = insertNodesAsChildren(treeWithoutNodes, parentId, removedNodes);
      setTree(nextTree);
      setCollapsed((prev) => {
        const next = new Set(prev);
        next.delete(parentId);
        return next;
      });
      setDraggingIds(new Set());
      setDropIndex(null);
      setDropParentId(null);
    },
    [tree, rows, draggingIds],
  );

  const contextValue: TreeViewContextValue = {
    selected,
    lastSelectedId,
    collapsed,
    onSelect,
    onToggleCollapse,
    onToggleVisible,
    onToggleLocked,
    draggingIds,
    dropIndex,
    dropParentId,
    onDragStart,
    onDragEnd,
    onDropTarget,
    onDropTargetClear,
    onDropParent,
    onDropParentClear,
    onDrop,
    onDropOnItem,
  };

  const isPlaceholderActive = (index: number) =>
    draggingIds.size > 0 &&
    dropIndex === index &&
    (!isDraggingCanvas || getDepthAtDropIndex(index) === 0);

  return { rows, contextValue, isPlaceholderActive };
}
