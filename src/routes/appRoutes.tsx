import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ButtonPage from "../pages/component/PendingOrderPage";
import assets from "../assets";
import InstallationPage from "../pages/installation/InstallationPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import SettingsIcon from '@mui/icons-material/Settings';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import NotFoundPage from "../pages/404/NotFoundPage";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import Setting from "../pages/component/SettingPage";
import SelfMatchingPage from "../pages/component/SelfMatchingPage";
import CancelRatioPage from "../pages/component/CancelRatioPage";
import OrderHistoryPage from "../pages/component/OrderHistoryPage";
import PendingOrderPage from "../pages/component/PendingOrderPage";
const appRoutes: RouteType[] = [
  // {
  //   index: true,
  //   element: <HomePage />,
  //   path: "/",
  //   state:"/"
  // },
  {
    index: true,
    path: "/",
    element: <DashboardPageLayout />,
    state: "/",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
  },
  {
    path: "/masterdata",
    element: <InstallationPage />,
    state: "masterdata",
    sidebarProps: {
      displayText: "Master Data",
      icon: <img src={assets.images.masterdataIcon} alt="menu"></img>
    }
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Trade Surveillance",
      icon: <MonitorHeartOutlinedIcon />,
      nestedRoute: true,
    },
    child: [
      {
        path: "/component/alert",
        element: <CancelRatioPage />,
        state: "component.alert",
        sidebarProps: {
          nestedRoute:true,
          displayText: "Cancel Ratio Monitoring"
        },
      },
      {
        path: "/component/selfmatching",
        element: <SelfMatchingPage />,
        state: "component.selfmatching",
        sidebarProps: {
          nestedRoute: true,
          displayText: "Self Matching"
        }
      },
      {
        path: "/component/setting",
        element: <Setting />,
        state: "component.setting",
        sidebarProps: {
          nestedRoute: true,
          displayText: "Setting"
        }
      },
      {
        path: "/component/orderhistory",
        element: <OrderHistoryPage />,
        state: "component.orderhistory",
        sidebarProps: {
          nestedRoute: true,
          displayText: "Order History"
        }
      },
      {
        path: "/component/button",
        element: <PendingOrderPage />,
        state: "component.button",
        sidebarProps: {
          nestedRoute: true,
          displayText: "Pending Order"
        }
      },
    ]
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Settlement Management",
      icon:  <img src={assets.images.settlementIcon} alt="menu"></img>
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "report",
    sidebarProps: {
      displayText: "Report",
      icon: <WorkOutlineOutlinedIcon />
    }
  },
  {
    path: "/system",
    element: <ChangelogPage />,
    state: "system",
    sidebarProps: {
      displayText: "System",
      icon: <SettingsIcon />
    }
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
    state: "notfound"
  }
];

export default appRoutes;