import React, { useState } from "react";
import { cn } from "../../utils/style";
import { Icon } from "../Icon";
import { ROW_HEIGHT_PX } from "./constants";
import { TreeViewContext } from "./context";
import { TreeViewItem } from "./TreeViewItem";
import type { TreeViewProps } from "./types";
import { useTreeViewState } from "./useTreeViewState";

function DropPlaceholder({
  index: _index,
  isActive,
  topPx,
  onDragOver,
  onDrop,
  onDragLeave,
}: {
  index: number;
  isActive: boolean;
  topPx: number;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
}): React.ReactElement {
  return (
    <div
      role="presentation"
      className={cn(
        "z-1 absolute left-0 right-0 transition-colors duration-100",
        isActive ? "bg-accent-700" : "bg-transparent",
      )}
      style={{
        top: `${topPx}px`,
        height: 2,
      }}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
    />
  );
}

/**
 * TreeView UI 전용. 상태·비즈니스 로직은 useTreeViewState에서 처리.
 */
export function TreeView({
  tree: initialTree,
  className,
  sceneName = "NewScene",
}: TreeViewProps): React.ReactElement {
  const { rows, contextValue, isPlaceholderActive } = useTreeViewState(initialTree);

  const [open, setOpen] = useState(false);

  return (
    <TreeViewContext.Provider value={contextValue}>
      <div
        className={cn(
          "bg-black-400 flex h-full w-full flex-col overflow-y-scroll border border-black shadow-lg",
          className,
        )}
      >
        <div
          className="bg-black-600 border-text-tertiary z-2 sticky top-0 flex shrink-0 cursor-pointer items-center justify-between border border-b border-black px-3 py-2"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-[4px]">
            <Icon
              icon="Play"
              size={8}
              className={cn(
                "text-text-primary fill-text-primary mr-[3.5px] stroke-0 transition-transform duration-100 ease-out",
                open ? "rotate-90" : "",
              )}
            />
            <Icon icon="Layers" size={10} className="text-text-primary" />
            <span className="text-text-primary text-[10px] font-normal">{sceneName}</span>
          </div>
          <span className="text-text-tertiary text-[8px] font-normal">{rows.length} items</span>
        </div>

        <div className={cn("relative flex flex-col")}>
          <div
            className="border-text-tertiary relative flex flex-col border-r"
            style={{ minHeight: rows.length * ROW_HEIGHT_PX }}
          >
            {rows.map((row) => (
              <TreeViewItem key={row.id} row={row} />
            ))}
            {Array.from({ length: rows.length + 1 }, (_, i) => (
              <DropPlaceholder
                key={`drop-${i}`}
                index={i}
                topPx={i === 0 ? 0 : i * ROW_HEIGHT_PX - 1}
                isActive={isPlaceholderActive(i)}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.dataTransfer.dropEffect = "move";
                  contextValue.onDropTarget(i);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  contextValue.onDrop(i);
                }}
                onDragLeave={() => contextValue.onDropTargetClear()}
              />
            ))}
          </div>
        </div>
      </div>
    </TreeViewContext.Provider>
  );
}
