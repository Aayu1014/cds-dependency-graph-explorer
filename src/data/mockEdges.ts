import type { EdgeData } from '../types/graph';

export const mockEdges: EdgeData[] = [ 
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb0296d",
    source_view: "ZI_CONSUMER2",
    target_view: "ZI_BASE",
    edge_type: "CONSUMES",
    created_at: "2026-07-14T09:36:16.737151Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb0496d",
    source_view: "ZI_CONSUMER2",
    target_view: "ZI_COUNTRY",
    edge_type: "ASSOCIATION",
    created_at: "2026-07-14T09:36:16.737154Z"
  }
];
