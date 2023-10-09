import { ListItemButton, ListItemIcon } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { RootState } from "../../redux/store";
import { RouteType } from "../../routes/config";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const { appState } = useSelector((state: RootState) => state.appState);
  

  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg
          },
          backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
          paddingY: "12px",
          paddingX: "24px",
          alignItems:"center"
        }}
      >
          {appState === item.state ?  <> <div className="bag" style={{width:"8px", height:"-webkit-fill-available", background: colorConfigs.sidebar.activeBgTag, position:"absolute", left:"0", }}></div></> : ""}
        <ListItemIcon sx={{
          color: colorConfigs.sidebar.color
        }}>
          {item.sidebarProps.icon && item.sidebarProps.icon}
          {item.sidebarProps.nestedRoute && <KeyboardArrowRightOutlinedIcon></KeyboardArrowRightOutlinedIcon>}
        </ListItemIcon>
        {item.sidebarProps.displayText}
      </ListItemButton>
    ) : null
  );
};

export default SidebarItem;