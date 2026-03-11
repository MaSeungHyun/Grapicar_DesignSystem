/** 트리 노드 (레이어 패널: type, visible, locked) */
import type React from "react";

export interface TreeNode {
  id: string | number;
  name: string;
  type?: "canvas" | "object";
  visible?: boolean;
  locked?: boolean;
  children?: TreeNode[];
}

/** flatten 결과: depth, hasChildren 추가 */
export interface FlatTreeNode extends TreeNode {
  depth: number;
  hasChildren: boolean;
}

/** Context 값 */
export interface TreeViewContextValue {
  /** 멀티 셀렉트: 선택된 노드 id 집합 */
  selected: Set<string | number>;
  /** Shift+클릭 범위용 마지막 선택 id */
  lastSelectedId: string | number | null;
  collapsed: Set<string | number>;
  onSelect: (id: string | number, event?: { shiftKey: boolean; ctrlKey: boolean; metaKey: boolean }) => void;
  onToggleCollapse: (id: string | number) => void;
  onToggleVisible: (id: string | number, current: boolean) => void;
  onToggleLocked: (id: string | number, current: boolean) => void;
  /** 드래그 중인 노드 id (단일 드래그 시 1개, 멀티 드래그 시 여러 개) */
  draggingIds: Set<string | number>;
  dropIndex: number | null;
  dropParentId: string | number | null;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, rowId: string | number) => void;
  onDragEnd: () => void;
  onDropTarget: (index: number) => void;
  onDropTargetClear: () => void;
  onDropParent: (parentId: string | number) => void;
  onDropParentClear: () => void;
  onDrop: (index: number) => void;
  onDropOnItem: (parentId: string | number) => void;
}

export interface TreeViewProps {
  tree: TreeNode[];
  className?: string;
  /** 헤더 타이틀 (기본: "Layers") */
  headerTitle?: string;
  /** 스크롤 영역 최대 높이 클래스 (기본: max-h-80) */
  maxHeight?: string;
}
