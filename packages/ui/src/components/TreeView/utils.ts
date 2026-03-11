import type { FlatTreeNode, TreeNode } from "./types";

/** children 트리 → flat 배열 (collapsed 반영) */
export function flattenTree(
  nodes: TreeNode[],
  collapsed: Set<string | number>,
  depth = 0,
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
  patch: Partial<TreeNode>,
): TreeNode[] {
  return nodes.map((n) =>
    n.id === id ? { ...n, ...patch } : { ...n, children: updateNode(n.children ?? [], id, patch) },
  );
}

/** 노드 찾기 (부모 노드, 부모의 children 배열, 인덱스 포함) */
function findNodeInTree(
  nodes: TreeNode[],
  id: string | number,
  parentNode: TreeNode | null = null,
): { parent: TreeNode[]; index: number; node: TreeNode; parentNode: TreeNode | null } | null {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id === id) return { parent: nodes, index: i, node: nodes[i], parentNode };
    const inChild = findNodeInTree(nodes[i].children ?? [], id, nodes[i]);
    if (inChild) return inChild;
  }
  return null;
}

/** 노드의 직계 부모 id 반환 (루트면 null) */
export function getParentId(nodes: TreeNode[], nodeId: string | number): string | number | null {
  const found = findNodeInTree(nodes, nodeId);
  if (!found || !found.parentNode) return null;
  return found.parentNode.id;
}
export function removeNode(
  nodes: TreeNode[],
  id: string | number,
): { tree: TreeNode[]; node: TreeNode | null } {
  const found = findNodeInTree(nodes, id);
  if (!found) return { tree: nodes, node: null };
  const { parent, index, node } = found;
  const newParent = [...parent.slice(0, index), ...parent.slice(index + 1)];
  if (parent === nodes) return { tree: newParent, node };

  function replaceChildren(current: TreeNode[]): TreeNode[] {
    return current.map((n) =>
      n.children === parent
        ? { ...n, children: newParent }
        : { ...n, children: replaceChildren(n.children ?? []) },
    );
  }
  return { tree: replaceChildren(nodes), node };
}

/** 특정 형제 앞에 노드 삽입 (해당 id를 가진 노드와 같은 부모의 같은 인덱스에 삽입) */
export function insertNodeBefore(
  nodes: TreeNode[],
  nodeToInsert: TreeNode,
  beforeSiblingId: string | number,
): TreeNode[] {
  const found = findNodeInTree(nodes, beforeSiblingId);
  if (!found) return nodes;
  const { parent, index } = found;
  const newParent = [...parent.slice(0, index), nodeToInsert, ...parent.slice(index)];
  if (parent === nodes) return newParent;
  function replaceChildren(current: TreeNode[]): TreeNode[] {
    return current.map((n) =>
      n.children === parent
        ? { ...n, children: newParent }
        : { ...n, children: replaceChildren(n.children ?? []) },
    );
  }
  return replaceChildren(nodes);
}

/** 특정 형제 뒤에 노드 삽입 (flat 리스트 맨 끝 드롭용) */
export function insertNodeAfter(
  nodes: TreeNode[],
  nodeToInsert: TreeNode,
  afterSiblingId: string | number,
): TreeNode[] {
  const found = findNodeInTree(nodes, afterSiblingId);
  if (!found) return nodes;
  const { parent, index } = found;
  const newParent = [...parent.slice(0, index + 1), nodeToInsert, ...parent.slice(index + 1)];
  if (parent === nodes) return newParent;
  function replaceChildren(current: TreeNode[]): TreeNode[] {
    return current.map((n) =>
      n.children === parent
        ? { ...n, children: newParent }
        : { ...n, children: replaceChildren(n.children ?? []) },
    );
  }
  return replaceChildren(nodes);
}

/** 특정 노드의 자식으로 맨 뒤에 추가 */
export function insertNodeAsChild(
  nodes: TreeNode[],
  parentId: string | number,
  nodeToInsert: TreeNode,
): TreeNode[] {
  return nodes.map((n) =>
    n.id === parentId
      ? { ...n, children: [...(n.children ?? []), nodeToInsert] }
      : { ...n, children: insertNodeAsChild(n.children ?? [], parentId, nodeToInsert) },
  );
}

/** 여러 노드 제거 (flat 순서로 노드 배열 반환, 제거 순서는 depth 내림차순) */
export function removeMultipleNodes(
  nodes: TreeNode[],
  ids: Set<string | number>,
  flatRows: FlatTreeNode[],
): { tree: TreeNode[]; removedNodes: TreeNode[] } {
  const idList = Array.from(ids);
  if (idList.length === 0) return { tree: nodes, removedNodes: [] };
  const depthOf = (id: string | number) => flatRows.find((r) => r.id === id)?.depth ?? 0;
  const sortedForRemoval = [...idList].sort((a, b) => depthOf(b) - depthOf(a));
  const collected: { id: string | number; node: TreeNode }[] = [];
  let currentTree: TreeNode[] = nodes;
  for (const id of sortedForRemoval) {
    const { tree: next, node } = removeNode(currentTree, id);
    currentTree = next;
    if (node) collected.push({ id, node });
  }
  const flatOrder = idList.map((id) => collected.find((c) => c.id === id)!.node);
  return { tree: currentTree, removedNodes: flatOrder };
}

/** 여러 노드를 순서대로 특정 형제 앞에 삽입 */
export function insertNodesBefore(
  nodes: TreeNode[],
  nodeList: TreeNode[],
  beforeSiblingId: string | number,
): TreeNode[] {
  if (nodeList.length === 0) return nodes;
  let current = insertNodeBefore(nodes, nodeList[0], beforeSiblingId);
  for (let i = 1; i < nodeList.length; i++) {
    current = insertNodeAfter(current, nodeList[i], nodeList[i - 1].id);
  }
  return current;
}

/** 여러 노드를 순서대로 특정 노드의 자식으로 추가 */
export function insertNodesAsChildren(
  nodes: TreeNode[],
  parentId: string | number,
  nodeList: TreeNode[],
): TreeNode[] {
  if (nodeList.length === 0) return nodes;
  let current = insertNodeAsChild(nodes, parentId, nodeList[0]);
  for (let i = 1; i < nodeList.length; i++) {
    current = insertNodeAfter(current, nodeList[i], nodeList[i - 1].id);
  }
  return current;
}

/** 노드 id가 해당 트리(서브트리) 안에 있는지 */
function containsId(nodes: TreeNode[], id: string | number): boolean {
  return nodes.some((n) => n.id === id || containsId(n.children ?? [], id));
}

/** nodeId가 ancestorId의 자손인지 (자기 자신 제외) */
export function isDescendant(
  nodes: TreeNode[],
  nodeId: string | number,
  ancestorId: string | number,
): boolean {
  const found = findNodeInTree(nodes, ancestorId);
  if (!found) return false;
  return containsId(found.node.children ?? [], nodeId);
}
