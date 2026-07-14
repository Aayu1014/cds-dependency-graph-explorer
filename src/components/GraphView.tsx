import ForceGraph2D from "react-force-graph-2d";
import type { GraphData, GraphNode } from "../types/graph";

interface GraphViewProps {
  graphData: GraphData;
  onNodeClick?: (node: GraphNode) => void;
}
function GraphView({ graphData, onNodeClick }: GraphViewProps) {
  return (
    <ForceGraph2D
      graphData={graphData}
      nodeLabel="id"
      onNodeClick={(node: any) => onNodeClick?.(node)}
      linkColor={(link: any) =>
        link.type === "ASSOCIATION" ? "#ffa726" : "#4fc3f7"
      }
      linkWidth={2}
      linkDirectionalArrowLength={6}
      linkDirectionalArrowRelPos={1}
      nodeCanvasObject={(
        node: any,
        ctx: CanvasRenderingContext2D,
        globalScale: number,
      ) => {
        const fontSize = 12 / globalScale;

        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.fillStyle = "#2a2f36";
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
        ctx.fill();

        // Node border
        ctx.strokeStyle = "#f0ab00";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node label
        ctx.fillStyle = "#eef0f2";
        ctx.textAlign = "center";
        ctx.fillText(node.id, node.x, node.y - 12);
      }}
    />
  );
}
export default GraphView;
