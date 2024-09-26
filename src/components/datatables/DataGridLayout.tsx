import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { styled } from "@mui/material";
import CustomToolbar from "./CustomToolbar";
import styleConfigs from "../../configs/styleConfigs";

const StyledDataGrid = styled(DataGrid)(() => ({
  ".row-with-action": {
    backgroundColor: "#eee",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: `${styleConfigs.mainBg} !important`,
    },
  },
  ".MuiDataGrid-cell:focus": {
    outline: "none",
  },
  ".MuiDataGrid-columnHeaderTitle": {
    color: styleConfigs.primary, // Изменяет цвет текста заголовков колонок
  },
  ".MuiDataGrid-row:hover": {
    backgroundColor: "inherit", // Убирает фоновый цвет при наведении
  },
}));

interface DataGridLayoutProps extends DataGridProps {
  checkRowWithAction?: (row: any) => boolean;
  onRowClick?: (row: any) => any;
  columnVisibilityModel?: Record<string, boolean>;
}

const DataGridLayout = ({
  checkRowWithAction,
  columnVisibilityModel = {},
  onRowClick,
  ...props
}: DataGridLayoutProps) => {
  const getRowClassName = (params: any) => {
    return checkRowWithAction && checkRowWithAction(params.row)
      ? "row-with-action"
      : "";
  };
  return (
    <StyledDataGrid
      getRowClassName={getRowClassName}
      onRowClick={(params) =>
        checkRowWithAction &&
        checkRowWithAction(params.row) &&
        onRowClick &&
        onRowClick(params.row)
      }
      initialState={{
        columns: {
          columnVisibilityModel: columnVisibilityModel,
        },
        pagination: {
          paginationModel: {
            pageSize: 8,
          },
        },
      }}
      isCellEditable={() => false}
      slots={{
        toolbar: CustomToolbar,
      }}
      disableRowSelectionOnClick
      {...props}
    />
  );
};

export default DataGridLayout;
