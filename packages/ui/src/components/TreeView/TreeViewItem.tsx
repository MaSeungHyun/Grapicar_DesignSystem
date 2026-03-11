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
  const {
    selected,
    collapsed,
    onSelect,
    onToggleCollapse,
    onToggleVisible,
    onToggleLocked,
    draggingIds,
    dropParentId,
    onDragStart,
    onDragEnd,
    onDropParent,
    onDropParentClear,
    onDropOnItem,
  } = useTreeView();

  const isSelected = selected.has(row.id);
  const isCollapsed = collapsed.has(row.id);
  const visible = row.visible ?? true;
  const locked = row.locked ?? false;

  const isDropTarget = dropParentId === row.id && !draggingIds.has(row.id);

  return (
    <div
      role="treeitem"
      aria-expanded={row.hasChildren ? !isCollapsed : undefined}
      aria-selected={isSelected}
      onClick={(e) =>
        onSelect(row.id, { shiftKey: e.shiftKey, ctrlKey: e.ctrlKey, metaKey: e.metaKey })
      }
      className={cn(
        "flex h-[18px] min-h-[18px] w-full cursor-pointer select-none items-center transition-colors duration-100",
        draggingIds.has(row.id) && "opacity-50",
      )}
      onDragOver={(e) => {
        if (draggingIds.has(row.id)) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        onDropParent(row.id);
      }}
      onDragLeave={() => onDropParentClear()}
      onDrop={(e) => {
        e.preventDefault();
        if (draggingIds.has(row.id)) return;
        onDropOnItem(row.id);
      }}
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
            className="fill-black-600 stroke-gray-600"
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
            className={cn("fill-transparent stroke-gray-600", locked && "stroke-danger")}
            stroke={locked ? "#ff5f00" : undefined}
          />
        </button>
      </div>

      {/* 트리 컨텐츠 */}
      <div
        className={cn(
          "flex h-full flex-1 items-center gap-1.5 overflow-hidden",
          visible ? "text-text-primary" : "text-text-tertiary opacity-40",
          isSelected
            ? "bg-accent-700"
            : isDropTarget
              ? "bg-accent-700"
              : "hover:bg-text-tertiary/10",
        )}
        style={{ paddingLeft: row.depth * INDENT_PX + 8 }}
      >
        <div
          className="flex h-full w-fit items-center gap-1.5"
          draggable={true}
          onDragStart={(e) => {
            e.stopPropagation();
            onDragStart(e, row.id);
          }}
          onDragEnd={(e) => {
            e.stopPropagation();
            onDragEnd();
          }}
        >
          <button
            type="button"
            className="flex min-w-[8px] shrink-0 items-center justify-start p-0"
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
    </div>
  );
}
