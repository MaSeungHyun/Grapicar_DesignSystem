import type { TreeNode, FlatTreeNode } from "./types";

/** children 트리 → flat 배열 (collapsed 반영) */
export function flattenTree(
  nodes: TreeNode[],
  collapsed: Set<string | number>,
  depth = 0
): FlatTreeNode[] {
  const result: FlatTreeNode[] = [];
  for (const node of nodes) {
    const hasChildren = (node.children?.length ?? 0) > 0;
    result.push({ ...node, depth, hasChildren });
    if (hasChildren && !collapsed.has(node.id)) {
      result.push(...flattenTree(node.children ?? [], collapsed, depth + 1));
    }
  }
  return result;
}

/** 트리에서 특정 id 노드만 patch */
export function updateNode(
  nodes: TreeNode[],
  id: string | number,
  patch: Partial<TreeNode>
): TreeNode[] {
  return nodes.map((n) =>
    n.id === id
      ? { ...n, ...patch }
      : { ...n, children: updateNode(n.children ?? [], id, patch) }
  );
}
