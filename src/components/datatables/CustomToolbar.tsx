import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import styleConfigs from "../../configs/styleConfigs";

// Кастомный тулбар без кнопки экспорта
const CustomToolbar = () => {
  return (
    <GridToolbarContainer
      sx={{
        backgroundColor: styleConfigs.mainBg,
        "& .MuiButton-root": {
          color: styleConfigs.primary,
        },
      }}
    >
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
