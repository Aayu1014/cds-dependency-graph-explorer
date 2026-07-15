import { useState } from "react";
import GraphView from "./components/GraphView";
import NodePanel from "./components/NodePanel";
import SearchBar from "./components/SearchBar";
import Legend from "./components/Legend";
import { mockEdges } from "./data/mockEdges";
import { buildGraphData } from "./utils/buildGraphData";
import type { GraphData, GraphNode } from "./types/graph";
import "./App.css";

function App() {
  const [graphData] = useState<GraphData>(buildGraphData(mockEdges));
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const relatedEdges = selectedNode
    ? mockEdges.filter(
        (e) =>
          e.source_view === selectedNode.id ||
          e.target_view === selectedNode.id,
      )
    : [];

  return (
    <div className="app-container">
      <h2 className="app-title">CDS Dependency Graph Explorer</h2>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <Legend />

      <GraphView
        graphData={graphData}
        onNodeClick={setSelectedNode}
        searchTerm={searchTerm}
      />
      {selectedNode && (
        <NodePanel
          node={selectedNode}
          edges={relatedEdges}
          onClose={() => setSelectedNode(null)}
        />
      )}
    </div>
  );
}

export default App;
