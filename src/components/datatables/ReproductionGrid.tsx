import { GridColDef } from "@mui/x-data-grid";
import DataGridLayout from "./DataGridLayout";
import { Box } from "@mui/material";
import { memo, useMemo, useState } from "react";
import { InseminationRecord } from "../../types/types";
import InseminationEditForm from "../forms/InseminationEditForm";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 20,
  },
  {
    field: "cow-id",
    headerName: "Номер коровы",
    flex: 1,
  },
  {
    field: "insemination-date",
    headerName: "Дата осеменения",
    flex: 1,
  },
  {
    field: "result",
    headerName: "Исход",
    flex: 1,
  },
  {
    field: "result-date",
    headerName: "Дата исхода",
    flex: 1,
  },
  {
    field: "count-calves",
    headerName: "Живых телят/всего",
    flex: 1,
  },
  {
    field: "count-bulls",
    headerName: "Живых бычков/всего",
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    "cow-id": "001",
    "insemination-date": "2024-01-15",
    result: "Success",
    "result-date": "2024-01-20",
    "count-calves": "1/1",
    "count-bulls": "0/0",
  },
  {
    id: 2,
    "cow-id": "002",
    "insemination-date": "2024-02-20",
    result: "Failure",
    "result-date": "2024-02-25",
    "count-calves": "0/0",
    "count-bulls": "0/0",
  },
  {
    id: 3,
    "cow-id": "003",
    "insemination-date": "2024-03-10",
    result: "Success",
    "result-date": "2024-03-15",
    "count-calves": "2/2",
    "count-bulls": "0/0",
  },
  {
    id: 4,
    "cow-id": "004",
    "insemination-date": "2024-09-05",
    result: "",
    "result-date": "",
    "count-calves": "0/0",
    "count-bulls": "0/0",
  },
  {
    id: 5,
    "cow-id": "005",
    "insemination-date": "2024-05-18",
    result: "Success",
    "result-date": "2024-05-23",
    "count-calves": "1/1",
    "count-bulls": "0/0",
  },
  {
    id: 6,
    "cow-id": "006",
    "insemination-date": "2024-06-22",
    result: "Failure",
    "result-date": "2024-06-27",
    "count-calves": "0/0",
    "count-bulls": "0/0",
  },
  {
    id: 7,
    "cow-id": "007",
    "insemination-date": "2024-07-30",
    result: "Success",
    "result-date": "2024-08-04",
    "count-calves": "1/1",
    "count-bulls": "0/0",
  },
  {
    id: 8,
    "cow-id": "008",
    "insemination-date": "2024-08-25",
    result: "",
    "result-date": "",
    "count-calves": "0/0",
    "count-bulls": "0/0",
  },
  {
    id: 9,
    "cow-id": "009",
    "insemination-date": "2024-09-10",
    result: "Success",
    "result-date": "2024-09-15",
    "count-calves": "2/2",
    "count-bulls": "0/0",
  },
  {
    id: 10,
    "cow-id": "010",
    "insemination-date": "2024-10-12",
    result: "Failure",
    "result-date": "2024-10-17",
    "count-calves": "0/0",
    "count-bulls": "0/0",
  },
  {
    id: 11,
    "cow-id": "011",
    "insemination-date": "2024-11-20",
    result: "Success",
    "result-date": "2024-11-25",
    "count-calves": "1/1",
    "count-bulls": "0/0",
  },
  {
    id: 12,
    "cow-id": "012",
    "insemination-date": "2024-12-15",
    result: "",
    "result-date": "",
    "count-calves": "0/0",
    "count-bulls": "0/0",
  },
  {
    id: 13,
    "cow-id": "013",
    "insemination-date": "2024-01-05",
    result: "Failure",
    "result-date": "2024-01-10",
    "count-calves": "0/0",
    "count-bulls": "0/0",
  },
  {
    id: 14,
    "cow-id": "014",
    "insemination-date": "2024-02-28",
    result: "Success",
    "result-date": "2024-03-05",
    "count-calves": "2/2",
    "count-bulls": "0/0",
  },
  {
    id: 15,
    "cow-id": "015",
    "insemination-date": "2024-03-20",
    result: "",
    "result-date": "",
    "count-calves": "0/0",
    "count-bulls": "0/0",
  },
  {
    id: 16,
    "cow-id": "016",
    "insemination-date": "2024-04-15",
    result: "Failure",
    "result-date": "2024-04-20",
    "count-calves": "0/0",
    "count-bulls": "0/0",
  },
];

const sortRows = <T extends (typeof rows)[number]>(a: T, b: T) => {
  if (!a.result && b.result) return -1;
  if (a.result && !b.result) return 1;

  const dateA = new Date(a["insemination-date"]);
  const dateB = new Date(b["insemination-date"]);

  return dateA.getTime() - dateB.getTime();
};

interface ReproductionGridProps {
  filter?: string;
}

const ReproductionGrid = memo(({ filter }: ReproductionGridProps) => {
  const [editRow, setEditRow] = useState<InseminationRecord | null>(null);

  const checkRowWithAction = (row: any) => row.result == "";

  const sortedRows = useMemo(() => {
    return [...rows].sort(sortRows);
  }, [rows]);

  const filteredRows = useMemo(() => {
    if (filter)
      return sortedRows.filter((row) => {
        for (const value of Object.values(row)) {
          if (`${value}`.toLowerCase().includes(filter.toLowerCase()))
            return true;
        }
        return false;
      });

    return sortedRows;
  }, [filter, sortedRows]);

  return (
    <>
      {editRow && (
        <InseminationEditForm
          open={!!editRow}
          onClose={() => setEditRow(null)}
          data={editRow}
        />
      )}
      <Box sx={{ height: "563px" }}>
        <DataGridLayout
          columns={columns}
          rows={filteredRows}
          checkRowWithAction={checkRowWithAction}
          columnVisibilityModel={{ id: false }}
          onRowClick={(row) => setEditRow(row)}
        />
      </Box>
    </>
  );
});

export default ReproductionGrid;
