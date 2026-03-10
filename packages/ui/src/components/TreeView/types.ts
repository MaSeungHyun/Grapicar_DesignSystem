/** 트리 노드 (레이어 패널: type, visible, locked) */
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
  selected: string | number | null;
  collapsed: Set<string | number>;
  onSelect: (id: string | number) => void;
  onToggleCollapse: (id: string | number) => void;
  onToggleVisible: (id: string | number, current: boolean) => void;
  onToggleLocked: (id: string | number, current: boolean) => void;
}

export interface TreeViewProps {
  tree: TreeNode[];
  className?: string;
  /** 헤더 타이틀 (기본: "Layers") */
  headerTitle?: string;
  /** 스크롤 영역 최대 높이 클래스 (기본: max-h-80) */
  maxHeight?: string;
}
