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
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb0596d",
    source_view: "ZI_BASE",
    target_view: "ZI_CUSTOMER",
    edge_type: "CONSUMES",
    created_at: "2026-07-14T09:36:17Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb0696d",
    source_view: "ZI_CUSTOMER",
    target_view: "ZI_ADDRESS",
    edge_type: "ASSOCIATION",
    created_at: "2026-07-14T09:36:18Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb0796d",
    source_view: "ZI_CUSTOMER",
    target_view: "ZI_ORDER",
    edge_type: "CONSUMES",
    created_at: "2026-07-14T09:36:19Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb0896d",
    source_view: "ZI_ORDER",
    target_view: "ZI_ORDER_ITEM",
    edge_type: "CONSUMES",
    created_at: "2026-07-14T09:36:20Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb0996d",
    source_view: "ZI_ORDER_ITEM",
    target_view: "ZI_PRODUCT",
    edge_type: "ASSOCIATION",
    created_at: "2026-07-14T09:36:21Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb1096d",
    source_view: "ZI_PRODUCT",
    target_view: "ZI_MATERIAL",
    edge_type: "CONSUMES",
    created_at: "2026-07-14T09:36:22Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb1196d",
    source_view: "ZI_PRODUCT",
    target_view: "ZI_SUPPLIER",
    edge_type: "ASSOCIATION",
    created_at: "2026-07-14T09:36:23Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb1296d",
    source_view: "ZI_SUPPLIER",
    target_view: "ZI_PLANT",
    edge_type: "CONSUMES",
    created_at: "2026-07-14T09:36:24Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb1396d",
    source_view: "ZI_PLANT",
    target_view: "ZI_STORAGE",
    edge_type: "ASSOCIATION",
    created_at: "2026-07-14T09:36:25Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb1496d",
    source_view: "ZI_STORAGE",
    target_view: "ZI_INVENTORY",
    edge_type: "CONSUMES",
    created_at: "2026-07-14T09:36:26Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb1596d",
    source_view: "ZI_INVENTORY",
    target_view: "ZI_BATCH",
    edge_type: "ASSOCIATION",
    created_at: "2026-07-14T09:36:27Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb1696d",
    source_view: "ZI_BATCH",
    target_view: "ZI_WAREHOUSE",
    edge_type: "CONSUMES",
    created_at: "2026-07-14T09:36:28Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb1796d",
    source_view: "ZI_WAREHOUSE",
    target_view: "ZI_DELIVERY",
    edge_type: "ASSOCIATION",
    created_at: "2026-07-14T09:36:29Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb1896d",
    source_view: "ZI_DELIVERY",
    target_view: "ZI_COMPANY",
    edge_type: "CONSUMES",
    created_at: "2026-07-14T09:36:30Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb1996d",
    source_view: "ZI_COMPANY",
    target_view: "ZI_REGION",
    edge_type: "ASSOCIATION",
    created_at: "2026-07-14T09:36:31Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb2096d",
    source_view: "ZI_REGION",
    target_view: "ZI_CITY",
    edge_type: "CONSUMES",
    created_at: "2026-07-14T09:36:32Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb2196d",
    source_view: "ZI_CITY",
    target_view: "ZI_CURRENCY",
    edge_type: "ASSOCIATION",
    created_at: "2026-07-14T09:36:33Z"
  },
  {
    edge_id: "aaddb51d-5e32-1fd1-9fec-eebf9fb2296d",
    source_view: "ZI_CURRENCY",
    target_view: "ZI_LANGUAGE",
    edge_type: "CONSUMES",
    created_at: "2026-07-14T09:36:34Z"
  },
  {
  edge_id: "e001",
  source_view: "ZI_LANGUAGE",
  target_view: "ZI_TIMEZONE",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:01Z"
},
{
  edge_id: "e002",
  source_view: "ZI_TIMEZONE",
  target_view: "ZI_CALENDAR",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:02Z"
},
{
  edge_id: "e003",
  source_view: "ZI_CALENDAR",
  target_view: "ZI_HOLIDAY",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:03Z"
},
{
  edge_id: "e004",
  source_view: "ZI_HOLIDAY",
  target_view: "ZI_FISCAL_YEAR",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:04Z"
},
{
  edge_id: "e005",
  source_view: "ZI_FISCAL_YEAR",
  target_view: "ZI_COSTCENTER",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:05Z"
},
{
  edge_id: "e006",
  source_view: "ZI_COSTCENTER",
  target_view: "ZI_PROFITCENTER",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:06Z"
},
{
  edge_id: "e007",
  source_view: "ZI_PROFITCENTER",
  target_view: "ZI_GLACCOUNT",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:07Z"
},
{
  edge_id: "e008",
  source_view: "ZI_GLACCOUNT",
  target_view: "ZI_COMPANYCODE",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:08Z"
},
{
  edge_id: "e009",
  source_view: "ZI_COMPANYCODE",
  target_view: "ZI_PURCHASEORDER",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:09Z"
},
{
  edge_id: "e010",
  source_view: "ZI_PURCHASEORDER",
  target_view: "ZI_PURCHASEITEM",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:10Z"
},
{
  edge_id: "e011",
  source_view: "ZI_PURCHASEITEM",
  target_view: "ZI_VENDOR",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:11Z"
},
{
  edge_id: "e012",
  source_view: "ZI_VENDOR",
  target_view: "ZI_PAYMENT",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:12Z"
},
{
  edge_id: "e013",
  source_view: "ZI_PAYMENT",
  target_view: "ZI_BANK",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:13Z"
},
{
  edge_id: "e014",
  source_view: "ZI_BANK",
  target_view: "ZI_BANKACCOUNT",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:14Z"
},
{
  edge_id: "e015",
  source_view: "ZI_BANKACCOUNT",
  target_view: "ZI_EMPLOYEE",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:15Z"
},
{
  edge_id: "e016",
  source_view: "ZI_EMPLOYEE",
  target_view: "ZI_DEPARTMENT",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:16Z"
},
{
  edge_id: "e017",
  source_view: "ZI_DEPARTMENT",
  target_view: "ZI_MANAGER",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:17Z"
},
{
  edge_id: "e018",
  source_view: "ZI_MANAGER",
  target_view: "ZI_PROJECT",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:18Z"
},
{
  edge_id: "e019",
  source_view: "ZI_PROJECT",
  target_view: "ZI_TASK",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:19Z"
},
{
  edge_id: "e020",
  source_view: "ZI_TASK",
  target_view: "ZI_TIMESHEET",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:20Z"
},
{
  edge_id: "e021",
  source_view: "ZI_TIMESHEET",
  target_view: "ZI_APPROVAL",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:21Z"
},
{
  edge_id: "e022",
  source_view: "ZI_APPROVAL",
  target_view: "ZI_WORKFLOW",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:22Z"
},
{
  edge_id: "e023",
  source_view: "ZI_WORKFLOW",
  target_view: "ZI_NOTIFICATION",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:23Z"
},
{
  edge_id: "e024",
  source_view: "ZI_NOTIFICATION",
  target_view: "ZI_AUDITLOG",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:24Z"
},
{
  edge_id: "e025",
  source_view: "ZI_AUDITLOG",
  target_view: "ZI_SECURITYROLE",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:25Z"
},
{
  edge_id: "e026",
  source_view: "ZI_SECURITYROLE",
  target_view: "ZI_USER",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:26Z"
},
{
  edge_id: "e027",
  source_view: "ZI_USER",
  target_view: "ZI_SESSION",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:27Z"
},
{
  edge_id: "e028",
  source_view: "ZI_SESSION",
  target_view: "ZI_DEVICE",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:28Z"
},
{
  edge_id: "e029",
  source_view: "ZI_DEVICE",
  target_view: "ZI_APPLICATION",
  edge_type: "ASSOCIATION",
  created_at: "2026-07-14T09:37:29Z"
},
{
  edge_id: "e030",
  source_view: "ZI_APPLICATION",
  target_view: "ZI_BASE",
  edge_type: "CONSUMES",
  created_at: "2026-07-14T09:37:30Z"
},
];
