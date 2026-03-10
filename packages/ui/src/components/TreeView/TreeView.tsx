import React, { useCallback, useState } from "react";
import { cn } from "../../utils/style";
import { Icon } from "../Icon";
import { TreeViewContext } from "./context";
import { TreeViewItem } from "./TreeViewItem";
import type { TreeViewProps } from "./types";
import { flattenTree, updateNode } from "./utils";

export function TreeView({
  tree: initialTree,
  className,
  headerTitle = "Layers",
}: TreeViewProps): React.ReactElement {
  const [tree, setTree] = useState(initialTree);
  const [collapsed, setCollapsed] = useState<Set<string | number>>(new Set());
  const [selected, setSelected] = useState<string | number | null>(null);

  const rows = flattenTree(tree, collapsed);

  const onSelect = useCallback((id: string | number) => setSelected(id), []);

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

  const contextValue = {
    selected,
    collapsed,
    onSelect,
    onToggleCollapse,
    onToggleVisible,
    onToggleLocked,
  };

  return (
    <TreeViewContext.Provider value={contextValue}>
      <div
        className={cn(
          "bg-black-400 flex h-full w-full flex-col overflow-hidden border border-black shadow-lg",
          className,
        )}
      >
        <div className="bg-black-600 flex shrink-0 items-center justify-between border-b border-black px-3 py-2">
          <div className="flex items-center gap-1.5">
            <Icon icon="Layers" size={10} className="text-text-primary" />
            <span className="text-text-primary text-[10px] font-normal">{headerTitle}</span>
          </div>
          <span className="text-text-tertiary text-[8px] font-normal">{rows.length} items</span>
        </div>

        <div className="min-h-[1px] w-full" />
        <div className={cn("relative flex h-full flex-col overflow-y-auto", maxHeight)}>
          <div className="bg-black-600 absolute left-px top-px flex h-full w-[36px] flex-1 flex-col" />
          <div className="relative flex h-full flex-col px-px">
            {rows.map((row) => (
              <TreeViewItem key={row.id} row={row} />
            ))}
          </div>
        </div>
      </div>
    </TreeViewContext.Provider>
  );
}
