"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  AttachMoney as MoneyIcon,
  Assignment as AssignmentIcon,
  Business as BusinessIcon,
  Link as LinkIcon,
  Warning as WarningIcon,
  Description as DescriptionIcon,
} from "@mui/icons-material";
import { DashboardContentBody } from "./DashboardContentBody";

// Sidebar width
const drawerWidth = "20%";
const mobileDrawerWidth = 240;

const menuItems = [
  { text: "Overview", icon: <HomeIcon /> },
  { text: "Fee Collected", icon: <MoneyIcon /> },
  { text: "License Issues", icon: <AssignmentIcon /> },
  { text: "Active License", icon: <AssignmentIcon /> },
  { text: "Expired License", icon: <WarningIcon /> },
  { text: "Loss", icon: <WarningIcon /> },
  { text: "Commercial Building", icon: <BusinessIcon /> },
  { text: "Linked License", icon: <LinkIcon /> },
  { text: "Raw Data", icon: <DescriptionIcon /> },
];

export default function Dashboard() {
  //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ overflow: "auto", backgroundColor: "#E6E6FA" }}>
      {/* Logo and Title */}
      <Box
        sx={{
          p: 2,
          gap: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 5px",
        }}
        style={{
          backgroundColor: "#E6E6FA",
          padding: "5px",
          borderRadius: "0px 40px 0px 0px",
          margin: "auto",
          height: "19vh",
        }}
      >
        <img
          src="https://pngimagesfree.com/wp-content/uploads/Karnataka-Govt-Logo-PNG@pngimagesfree.com_.png"
          alt="Government Logo"
          style={{ width: 80, height: 80 }}
        />
        <Typography
          style={{ fontSize: "1vw" }}
          variant="subtitle1"
          fontWeight="bold"
        >
          GOVERNMENT OF KARNATAKA
        </Typography>
      </Box>

      {/* Navigation List */}
      <List
        style={{
          paddingTop: "2.5vw",
          backgroundColor: "#E6E6FA",
          height: "81vh",
        }}
      >
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                    color: "primary.main",
                    borderRadius: "20px",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: "#4c2882", // Added default icon color
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#4c2882", // Added default text color
                  "& .MuiTypography-root": {
                    fontWeight: "500",
                    "&:hover": {
                      fontWeight: "600",
                      color: "#4c2882",
                    },
                  },
                }}
                primary={item.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />

      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth})` },
          ml: { md: drawerWidth },
          bgcolor: "background.paper",
          color: "text.primary",
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Trade License Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar / Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: mobileDrawerWidth,
              //   bgcolor: "background.default",
              borderRight: "1px solid",
              borderColor: "divider",
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100vh",
              borderRight: "1px solid",
              borderColor: "divider",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth})` },
          mt: "64px", // Height of AppBar
        }}
      >
        {/* Add your dashboard content here */}
        <DashboardContentBody />
      </Box>
    </Box>
  );
}
