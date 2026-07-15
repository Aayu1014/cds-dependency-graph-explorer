# CDS Dependency Graph Explorer

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)

A React + TypeScript + Vite application for exploring CDS dependency relationships through an interactive force-directed graph. The app visualizes views as nodes and their relationships as edges, allowing users to search, inspect, and understand how different components connect.

## Overview

This project is designed to help users quickly understand the structure of CDS views and their dependencies. It uses mock data to show a graph of relationships such as:

- CONSUMES
- ASSOCIATION

When a user clicks a node, a side panel displays the related edges and connected views, making it easier to trace dependency paths.

## Features

- Interactive force-directed graph visualization
- Search bar to filter visible views by name
- Click-to-inspect node details in a side panel
- Color-coded edge types for quick understanding
- Clean dark UI with a modern visual style
- Built with React and TypeScript for maintainability

## Tech Stack

- React 19
- TypeScript
- Vite
- react-force-graph-2d
- ESLint

## Project Structure

```text
src/
  App.tsx                 # Main app layout and state
  App.css                 # Global styling for the UI
  components/
    GraphView.tsx         # Force graph visualization
    Legend.tsx            # Legend for edge types
    NodePanel.tsx         # Details panel for selected node
    SearchBar.tsx         # Search input component
  data/
    mockEdges.ts          # Mock dependency graph data
  types/
    graph.ts              # Shared graph and edge type definitions
  utils/
    buildGraphData.ts     # Converts edge data into graph nodes and links
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (recommended latest LTS)
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build the app for production
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint checks
```

## How It Works

1. The app loads mock edge data from src/data/mockEdges.ts.
2. The helper in src/utils/buildGraphData.ts converts those edges into graph nodes and links.
3. The graph is rendered in src/components/GraphView.tsx using the force-graph library.
4. Searching and selecting nodes is handled in src/App.tsx.
5. Clicking a node opens src/components/NodePanel.tsx to show its related dependencies.

## Data Model

The graph uses these core structures:

- EdgeData: includes the source view, target view, edge type, and metadata
- GraphNode: represents a single view/node
- GraphLink: represents a relationship between two nodes
- GraphData: combines nodes and links for rendering

## Customization

You can easily adapt the app by editing:

- src/data/mockEdges.ts to change the graph data
- src/App.css to update colors, spacing, or theme styling
- src/components/GraphView.tsx to change node behavior or graph visuals
- src/App.tsx to change layout or interaction flow

## Backend and Authentication Notes

The backend is real, live, and independently verifiable. The deployed SAP BTP RAP service exposes live OData V4 data at the following endpoint:

```text
https://e9233ee0-105b-4c71-893f-d4b6f0ddd36a.abap-web.us10.hana.ondemand.com/sap/opu/odata4/sap/zsb_cds_graph/srvd/sap/zsd_cds_graph/0001/GraphEdges
```

This endpoint returns raw live JSON from the deployed service and is the same data shape reflected in the repository's mock data. The CDS view, parser, storage table, RAP behavior definition, and service binding were all built, activated, and tested at the backend layer.

The remaining blocker is frontend authentication. The frontend and backend are both working, but the React app still needs a one-time SAP admin setup step to configure a Communication User for the trial account. This is not a code or architecture issue; it is a permissions/setup requirement in the SAP BTP trial environment.

## Future Improvements

Possible next steps for this project:

- Support dynamic filtering by edge type
- Add zoom controls and graph legends improvements
- Persist selected nodes and search state
- Add export/import of graph data

## License

This project is for educational and demonstration purposes.
