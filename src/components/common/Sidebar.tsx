import { Avatar,Typography, Drawer, List, Stack, Toolbar, ListItem } from "@mui/material";
import Divider from '@mui/material/Divider';
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          // marginTop:"60px",
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
          maxHeight: "100vh",
          overflowX: 'hidden'
        },
        "& .MuiDrawer-paper::-webkit-scrollbar":{
          display:"none"
        }
      }}
    >
      <List sx={{paddingTop:"0"}} >
      <Toolbar  sx={{borderBottom:"1px solid #2A324F"}}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="start"
          >
            <Typography variant="h5" >Pi-X</Typography>
          </Stack>
        </Toolbar>
        <Toolbar  sx={{borderBottom:"1px solid #2A324F" , minHeight:"30px"}}>
            <Typography variant="h6" >Quick Access</Typography>
        </Toolbar>
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;