import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { NOTE_RISK } from "../../constants/general.constant";
import { Tabs, Tab, Menu, MenuItem } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import CollapsibleTable from "../table/TableDashboard";
import Input from '@mui/joy/Input'
import TableDashboard from "../table/TableDashboard";
import TableConfiguration from "../table/TableConfiguration";
import React, { useCallback, memo ,useMemo} from 'react';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const options = [
  { value: "", label: "None" },
  { value: 10, label: "Ten" },
  { value: 20, label: "Twenty" },
  { value: 30, label: "Thirty" },
];
const DashboardPageLayout = () => {
  const [value, setValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [riskAnchorEl, setRiskAnchorEl] = useState(null);
  const [age, setAge] = useState("");
  const [expanded, setExpanded] = useState("");

  const [valueDate, setValueDate] = useState<Dayjs | null>(dayjs("2022-04-17"));
const CustomTabPanel = React.memo((props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  console.log(props);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
});

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    newValue !== 3 && newValue !== 2 && setValue(newValue);
  };

  const handleRiskTabClick = useMemo(() => (event: any) => {
    setRiskAnchorEl(event.currentTarget);
  }, [riskAnchorEl]);

  const handleTabClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRiskMenuClose = () => {
    setRiskAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItems = () => {
    return options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ));
  };

  const handleClickMenuSettingTab =  (value: string) => {
    setValue(value === "monitor" || value === "marketData" ? 3 : 2);
    setSelectedTab(value);
    handleRiskMenuClose();
    handleMenuClose();
  };
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const renderMonitorContent = () => {
    return (
      <>
        <div className="mt-3">
          <div className="row">
            <div className="col-4 d-flex align-items-center mb-4 justify-content-beetween">
              <span className="lable col-6">Warning Order Latency (ms)</span>
              <Input className="col-6" size="md" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="col-4 d-flex align-items-center mb-3 ">
              <span className="lable col-6">Alarm Order Latency (ms)</span>
              <Input className="lable col-6" size="md" placeholder="" />
            </div>
          </div>
        </div>
        <div className="note_risk fz-14 mb-1">{NOTE_RISK}</div>
      </>
    );
  };

  const renderMarketDataContent = () => {
    return (
      <>
        <div className="mt-3">
          <div className="row">
          <div className="col-4 d-flex align-items-center mb-4 justify-content-beetween gap-4">
              <span className="lable col-6">Warning Market Data Latency (ms)</span>
              <Input className="col-6" size="md" placeholder="" />
            </div>
          </div>
        </div>
        <div className="note_risk fz-14 mb-1">{NOTE_RISK}</div>
      </>
    );
  };

  const renderTableMonitoring = () => {
    const data = [
      {
        accountId: "A001",
        tickerCode: "T001",
        unexecutedAmount: 100,
        limitAmount: 500,
      },
      {
        accountId: "A001",
        tickerCode: "T002",
        unexecutedAmount: 200,
        limitAmount: 300,
      },
      {
        accountId: "A002",
        tickerCode: "T003",
        unexecutedAmount: 150,
        limitAmount: 400,
      },
      {
        accountId: "A002",
        tickerCode: "T004",
        unexecutedAmount: 250,
        limitAmount: 600,
      },
    ];

    return (
      <>
        <CollapsibleTable></CollapsibleTable>
      </>
    );
  };
  const renderContent = () => {
    switch (selectedTab) {
      case "monitor":
        return renderMonitorContent();
      case "marketData":
        return renderMarketDataContent();
      case "monitoring":
        return renderRiskMonitoring();
      case "configuration":
        return RiskConfiguration();
      default:
        return null;
    }
  };

  const RiskConfiguration = () => {
    return (
      <>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-2 d-flex align-items-center gap-2 mb-4 flex-shrink-0">
            <span className="mr-4 flex-shrink-0">Account ID</span>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                maxWidth: "150px",
                width: "100%",
                borderRadius: "8px",
                maxHeight: "35px",
              }}
            >
              {renderMenuItems()}
            </Select>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 justify-content-lg-end justify-content-md-start gap-4 mb-4 flex-shrink-1">
            <Button
              variant="outlined"
              startIcon={<SearchIcon />}
              className="mr-2 bg-dark text-light"
            >
              Search
            </Button>
          </div>
        </div>
        <div className="row">
              <TableConfiguration></TableConfiguration>
        </div>
      </>
    )
  }

  const renderRiskMonitoring = () => {
    return (
      <>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center gap-2 mb-4 flex-shrink-0">
            <span className="mr-4 flex-shrink-0">Account ID</span>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                maxWidth: "150px",
                width: "100%",
                borderRadius: "8px",
                maxHeight: "35px",
              }}
            >
              {renderMenuItems()}
            </Select>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 d-flex align-items-center gap-2 mb-4 flex-shrink-1">
            <span className="flex-shrink-0">Trading Date</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={valueDate}
                onChange={(newValue) => setValueDate(newValue)}
                className="123"
                slotProps={{ textField: { size: "small" } }}
                sx={{
                  "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    maxHeight: "35px",
                    maxWidth: "150px",
                  },
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 d-flex justify-content-lg-end justify-content-md-start gap-4 mb-4 flex-shrink-1">
            <Button
              variant="outlined"
              startIcon={<SearchIcon />}
              className="mr-2 bg-dark text-light"
            >
              Search
            </Button>
            <Button
              color="success"
              className="mr-2 text-light"
              variant="contained"
              endIcon={<RefreshIcon />}
            >
              Refresh
            </Button>
          </div>
        </div>
        <div className="row mt-4">{renderTableMonitoring()}</div>
      </>
    );
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                sx={{
                  "& .css-1aquho2-MuiTabs-indicator": {
                    background: "#01C0AA",
                  },
                  "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected":
                    {
                      color: "#333333",
                    },
                }}
                className="123"
                value={value}
                onChange={handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab label="IT Monitoring" {...a11yProps(0)} />
                <Tab label="Market Data Monitoring" {...a11yProps(1)} />
                <Tab
                  label="Risk Monitoring"
                  {...a11yProps(2)}
                  onClick={handleRiskTabClick}
                />
                <Tab
                  label="Setting"
                  {...a11yProps(3)}
                  onClick={handleTabClick}
                  aria-controls="setting-menu"
                  aria-haspopup="true"
                />
              </Tabs>
            </Box>
            {/* <CustomTabPanel value={value} index={0}>
              IT Monitoring
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Market Data Monitoring
            </CustomTabPanel> */}
            <CustomTabPanel value={value} index={2}>
              {renderContent()}
            </CustomTabPanel>
            {/* <CustomTabPanel value={value} index={3}>
              {renderContent()}
            </CustomTabPanel> */}
            <Menu
              sx={{
                "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                  padding: "0",
                },
              }}
              id="setting-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleClickMenuSettingTab("monitor")}>
                IT Monitoring Setting
              </MenuItem>
              <MenuItem onClick={() => handleClickMenuSettingTab("marketData")}>
                Market Data Setting
              </MenuItem>
            </Menu>
            <Menu
              sx={{
                "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                  padding: "0",
                },
              }}
              id="risk-menu"
              anchorEl={riskAnchorEl}
              open={Boolean(riskAnchorEl)}
              onClose={handleRiskMenuClose}
            >
              <MenuItem onClick={() => handleClickMenuSettingTab("monitoring")}>
                Monitoring
              </MenuItem>
              <MenuItem
                onClick={() => handleClickMenuSettingTab("configuration")}
              >
                Configuration
              </MenuItem>
            </Menu>
          </Box>
        </div>
      </div>
    </>
  );
};

export default memo(DashboardPageLayout);
