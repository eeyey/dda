import { Outlet } from "react-router-dom";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { ruRU as dataGridRuRU } from "@mui/x-data-grid/locales";
import { ruRU as coreRuRU } from "@mui/material/locale";
import { ruRU } from "@mui/x-date-pickers/locales";

import styleConfigs from "../../configs/styleConfigs";
import Sidebar from "../common/Sidebar";

const theme = createTheme(
  {
    components: {
      MuiButton: {
        styleOverrides: {
          outlined: {
            borderColor: "#757575",
            color: styleConfigs.primary,
            fontWeight: "bold",
          },
          contained: {
            background: styleConfigs.primary,
            "&:hover": {
              background: styleConfigs.secondary,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: styleConfigs.primary,
            },
            "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
              color: styleConfigs.primary,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              color: styleConfigs.primary,
            },
          },
        },
      },
    },
  },
  ruRU,
  dataGridRuRU,
  coreRuRU
);

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: `calc(100% - ${styleConfigs.sidebar.width})`,
              minHeight: "100vh",
              backgroundColor: styleConfigs.mainBg,
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
