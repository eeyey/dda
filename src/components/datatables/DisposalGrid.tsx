import { GridColDef } from "@mui/x-data-grid";
import DataGridLayout from "./DataGridLayout";
import { Box } from "@mui/material";
import { memo, useMemo } from "react";
// import { InseminationRecord } from "../../types/types";
// import InseminationEditForm from "../forms/InseminationEditForm";

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
    field: "reason",
    headerName: "Причина",
    flex: 1,
  },
  {
    field: "disposal-date",
    headerName: "Дата выбытия",
    flex: 1,
  },
];

const rows = [
  { id: 1, "cow-id": "001", reason: "Забой", "disposal-date": "2024-09-01" },
  { id: 2, "cow-id": "002", reason: "Продажа", "disposal-date": "2024-09-02" },
  { id: 3, "cow-id": "003", reason: "Забой", "disposal-date": "2024-09-03" },
  { id: 4, "cow-id": "004", reason: "Продажа", "disposal-date": "2024-09-04" },
  { id: 5, "cow-id": "005", reason: "Падеж", "disposal-date": "2024-09-05" },
  { id: 6, "cow-id": "006", reason: "Забой", "disposal-date": "2024-09-06" },
  { id: 7, "cow-id": "007", reason: "Продажа", "disposal-date": "2024-09-07" },
  { id: 8, "cow-id": "008", reason: "Падеж", "disposal-date": "2024-09-08" },
  { id: 9, "cow-id": "009", reason: "Забой", "disposal-date": "2024-09-09" },
  { id: 10, "cow-id": "010", reason: "Продажа", "disposal-date": "2024-09-10" },
  { id: 11, "cow-id": "011", reason: "Падеж", "disposal-date": "2024-09-11" },
  { id: 12, "cow-id": "012", reason: "Забой", "disposal-date": "2024-09-12" },
  { id: 13, "cow-id": "013", reason: "Продажа", "disposal-date": "2024-09-13" },
  { id: 14, "cow-id": "014", reason: "Падеж", "disposal-date": "2024-09-14" },
  { id: 15, "cow-id": "015", reason: "Забой", "disposal-date": "2024-09-15" },
  { id: 16, "cow-id": "016", reason: "Продажа", "disposal-date": "2024-09-16" },
];

const sortRows = <T extends (typeof rows)[number]>(a: T, b: T) => {
  const dateA = new Date(a["disposal-date"]);
  const dateB = new Date(b["disposal-date"]);

  return dateA.getTime() - dateB.getTime();
};

interface DisposalGridProps {
  filter?: string;
}

const DisposalGrid = memo(({ filter }: DisposalGridProps) => {
  //   const [editRow, setEditRow] = useState<InseminationRecord | null>(null);

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
      {/* {editRow && (
        <InseminationEditForm
          open={!!editRow}
          onClose={() => setEditRow(null)}
          data={editRow}
        />
      )} */}
      <Box sx={{ height: "563px" }}>
        <DataGridLayout
          columns={columns}
          rows={filteredRows}
          columnVisibilityModel={{ id: false }}
        />
      </Box>
    </>
  );
});

export default DisposalGrid;
