import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PieChartIcon from "@mui/icons-material/PieChart";
import TableViewIcon from "@mui/icons-material/TableView";
import { Home } from "./home";
import Tooltip from "@mui/material/Tooltip";
import { useHistory, Switch, Route } from "react-router-dom";

import NotificationsIcon from '@mui/icons-material/Notifications';
import {Components} from "./components"
import {Utilities} from "./utilities"
import {Pages} from "./pages";
import AppBar from '@mui/material/AppBar';
import {Chartsection} from "./chart";
import {Tables}  from "./tables";




import AccountCircle from '@mui/icons-material/AccountCircle';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                style={{ backgroundColor: "green", color: "white" }}
                class="btn btn-outline-success my-2 my-sm-0"
                type="button"
              >
                Search
              </button>
            </form>

          </Typography>


          <div style={{marginLeft : "auto"}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit">
               
                <MailIcon />
               
              </IconButton>
             
            </div>

            <div >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit">
               
                <NotificationsIcon />
              </IconButton>
             
            </div>

            <div >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit">
                <AccountCircle />
                
              </IconButton>
             
            </div>


         
        </Toolbar>
       
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Tooltip title="Dashboard" placement="right">
            <ListItem onClick={() => history.push("/")} button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Tooltip>

          <Tooltip title="Components" placement="right">
            <ListItem onClick={() => history.push("/components")} button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Components" />
            </ListItem>
          </Tooltip>

          <Tooltip title="Utilities" placement="right">
            <ListItem onClick={() => history.push("/utilities")} button>
              <ListItemIcon>
                <BuildIcon  />
              </ListItemIcon>
              <ListItemText primary="Utilities" />
            </ListItem>
          </Tooltip>

          <Tooltip title="Pages" placement="right">
            <ListItem onClick={() => history.push("/pages")} button>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItem>
          </Tooltip>

          <Tooltip title="Charts" placement="right">
            <ListItem onClick={() => history.push("/charts")} button>
              <ListItemIcon>
                <PieChartIcon />
              </ListItemIcon>
              <ListItemText primary="Charts" />
            </ListItem>
          </Tooltip>

          <Tooltip title="Tables" placement="right">
            <ListItem onClick={() => history.push("/tables")} button>
              <ListItemIcon>
                <TableViewIcon />
              </ListItemIcon>
              <ListItemText primary="Tables" />
            </ListItem>
          </Tooltip>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/components">
            <Components />
          </Route>

          <Route exact path="/utilities">
            <Utilities />
          </Route>

          <Route exact path="/pages">
            <Pages />
           
          </Route>
          <Route exact path="/charts">
             <Chartsection />
          </Route>

          <Route exact path="/tables">
           <Tables />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
