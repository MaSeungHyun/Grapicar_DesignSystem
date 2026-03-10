import React from "react";
import { cn } from "../../utils/style";
import { Icon } from "../Icon";
import { INDENT_PX } from "./constants";
import { useTreeView } from "./context";
import { CanvasIcon, ObjectIcon } from "./icons";
import type { FlatTreeNode } from "./types";

export interface TreeViewItemProps {
  row: FlatTreeNode;
}

export function TreeViewItem({ row }: TreeViewItemProps): React.ReactElement {
  const { selected, collapsed, onSelect, onToggleCollapse, onToggleVisible, onToggleLocked } =
    useTreeView();

  const isSelected = selected === row.id;
  const isCollapsed = collapsed.has(row.id);
  const visible = row.visible ?? true;
  const locked = row.locked ?? false;

  return (
    <div
      role="treeitem"
      aria-expanded={row.hasChildren ? !isCollapsed : undefined}
      aria-selected={isSelected}
      onClick={() => onSelect(row.id)}
      className={cn(
        "flex h-[18px] min-h-[18px] w-full cursor-pointer select-none items-center transition-colors duration-100",
      )}
    >
      {/* 아이콘 컬럼 */}
      <div className="bg-black-600 flex h-full w-12 shrink-0 items-center justify-center gap-1">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleVisible(row.id, visible);
          }}
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded transition-colors duration-100 hover:bg-white/10",
          )}
          aria-label={visible ? "숨기기" : "표시"}
        >
          <Icon
            icon={visible ? "Eye" : "EyeOff"}
            size={10}
            className="fill-black-600 text-gray-600"
          />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleLocked(row.id, locked);
          }}
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded transition-colors duration-100 hover:bg-white/10",
          )}
          aria-label={locked ? "잠금 해제" : "잠금"}
        >
          <Icon
            icon={locked ? "LockKeyhole" : "LockKeyholeOpen"}
            size={10}
            className="fill-transparent text-gray-600"
          />
        </button>
      </div>

      {/* 트리 컨텐츠 */}
      <div
        className={cn(
          "flex h-full flex-1 items-center gap-1.5 overflow-hidden",
          visible ? "text-text-primary" : "text-text-tertiary",
          isSelected
            ? "bg-[color-mix(in_oklab,var(--color-accent-700)_100%,transparent)]"
            : "hover:bg-[color-mix(in_oklab,var(--color-text-tertiary)_10%,transparent)]",
        )}
        style={{ paddingLeft: row.depth * INDENT_PX + 8 }}
      >
        <button
          type="button"
          className="flex shrink-0 items-center justify-start p-0"
          onClick={(e) => {
            e.stopPropagation();
            if (row.hasChildren) onToggleCollapse(row.id);
          }}
          aria-label={isCollapsed ? "펼치기" : "접기"}
        >
          {row.hasChildren && (
            <Icon
              icon="Play"
              size={8}
              className={cn(
                "text-text-primary shrink-0 fill-white stroke-0 transition-transform duration-100 ease-out",
                isCollapsed ? "" : "rotate-90",
              )}
            />
          )}
        </button>

        <span className={cn("", isSelected ? (row.type === "canvas" ? "" : "") : "text-inherit")}>
          {row.type === "canvas" ? <CanvasIcon /> : <ObjectIcon />}
        </span>

        <span className={cn("truncate text-xs tracking-wide", isSelected ? "" : "")}>
          {row.name}
        </span>
      </div>
    </div>
  );
}
