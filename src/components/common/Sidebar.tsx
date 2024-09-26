import { Drawer, List, Stack, Toolbar } from "@mui/material";
import LogoIcon from "./LogoIcon";
import styleConfigs from "../../configs/styleConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: styleConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: styleConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: styleConfigs.sidebar.bg,
          color: styleConfigs.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ margin: "20px 0px" }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <LogoIcon />
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
