import type { EdgeData, GraphData, GraphLink, GraphNode } from '../types/graph';

export function buildGraphData(edges: EdgeData[]): GraphData {
  const nodeSet =  new Map<string, GraphNode>();

   edges.forEach((e) => {
    if (!nodeSet.has(e.source_view)) {
      nodeSet.set(e.source_view, { id: e.source_view });
    }
    if (!nodeSet.has(e.target_view)) {
      nodeSet.set(e.target_view, { id: e.target_view });
    }
  

  });
  const links: GraphLink[] = edges.map((e) => ({
    source: e.source_view,
    target: e.target_view,
    type: e.edge_type,
  }));
  return {
    nodes: Array.from(nodeSet.values()),
    links
  };
}