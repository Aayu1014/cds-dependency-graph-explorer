import type { GraphNode, EdgeData } from "../types/graph";

interface NodePanelProps {
  node: GraphNode;
  edges: EdgeData[];
  onClose: () => void;
}

function NodePanel({ node, edges, onClose }: NodePanelProps) {
  return (
    <div className="node-panel">
      <div className="node-panel-header">
        <strong>{node.id}</strong>
        <span
          className="node-panel-close"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          X
        </span>
      </div>

      <div className="node-panel-body">
        {edges.length === 0 && <div>No dependencies found for this node.</div>}
        {edges.map((e) => {
          const isSource = e.source_view === node.id;
          const label =
            e.edge_type === "ASSOCIATION" ? "ASSOCIATED TO" : "CONSUMES";
          const otherView = isSource ? e.target_view : e.source_view;
          const direction = isSource ? label : `Consumed/Associated by`;
          return (
            <div key={e.edge_id} className="edge-row">
              <span
                className={
                  e.edge_type === "ASSOCIATION"
                    ? "tag-association"
                    : "tag-consumes"
                }
              >
                {e.edge_type}
              </span>
              <span>
                {isSource
                  ? `${direction} → ${otherView}`
                  : `${otherView} → ${direction}`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default NodePanel;
