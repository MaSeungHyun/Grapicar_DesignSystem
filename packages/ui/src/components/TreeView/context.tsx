import { createContext, useContext } from "react";
import type { TreeViewContextValue } from "./types";

export const TreeViewContext = createContext<TreeViewContextValue | null>(null);

export function useTreeView(): TreeViewContextValue {
  const ctx = useContext(TreeViewContext);
  if (!ctx) throw new Error("TreeViewItem must be used within TreeView");
  return ctx;
}
