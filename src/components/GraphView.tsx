import ForceGraph2D from "react-force-graph-2d";
import type { GraphData, GraphNode } from "../types/graph";

interface GraphViewProps {
  graphData: GraphData;
  onNodeClick?: (node: GraphNode) => void;
  searchTerm?: string;
}
function GraphView({
  graphData,
  onNodeClick,
  searchTerm = "",
}: GraphViewProps) {
  const term = searchTerm.trim().toUpperCase();
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
      linkDirectionalArrowRelPos={0.92}
      nodeCanvasObject={(
        node: any,
        ctx: CanvasRenderingContext2D,
        globalScale: number,
      ) => {
        const isMatch = term.length > 0 && node.id.toUpperCase().includes(term);
        const isDimmed = term.length > 0 && !isMatch;
        const fontSize = 12 / globalScale;

        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.globalAlpha = isDimmed ? 0.25 : 1;
        ctx.fillStyle = "#2a2f36";
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
        ctx.fill();

        // Node border
        ctx.strokeStyle = isMatch ? "#4fd6a8" : "#f0ab00";
        ctx.lineWidth = isMatch ? 2.5 : 1.5;
        ctx.stroke();

        // Node label
        ctx.fillStyle = "#eef0f2";
        ctx.textAlign = "center";
        ctx.fillText(node.id, node.x, node.y - (isMatch ? 15 : 12));
        ctx.globalAlpha = 1; // Reset alpha for other nodes
      }}
    />
  );
}
export default GraphView;
