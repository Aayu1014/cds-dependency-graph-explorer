export interface EdgeData {
  edge_id: string;
  source_view: string;
  target_view: string;
  edge_type: string;
  created_at: string;
}

export interface GraphNode {
  id: string;
  x?: number;
  y?: number;
}

export interface GraphLink {
  source: string;
  target: string;
  type: string;
}
export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}