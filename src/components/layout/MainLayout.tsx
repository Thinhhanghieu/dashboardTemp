import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="div"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
          paddingTop:"0"
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg
        }}
      >
        <Toolbar />
        <div style={{minHeight:"100vh" , background:"#fff", borderRadius:"8px" }}>
            <Outlet />  
        </div>
      </Box>
    </Box>
  );
};

export default MainLayout;