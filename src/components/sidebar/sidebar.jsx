import React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const menuItems = [
  { text: "Dashboard", icon: '/dashboard.svg' },
  { text: "Accounting", icon: '/accounting.svg', selected: true },
  { text: "Banking", icon: '/banking.svg' },
  { text: "Reports", icon: '/reports.svg' },
  { text: "Contacts", icon: '/contacts.svg' },
  { text: "Invoicing", icon:  '/basil_invoice-outline.svg' },
  { text: "Queries", icon: '/ph_question.svg' },
  { text: "Help", icon: '/ph_question.svg' },
];

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <List disablePadding>
      <ListItem >
        <ListItemButton sx={{ textAlign: "center", display: "block", color: "white", padding: '8px' }}>
          <ListItemIcon sx={{ color: "white", minWidth: 0, justifyContent: "center" }}>
            <img src="/logo.png" />
          </ListItemIcon>

        </ListItemButton>
      </ListItem>
      {menuItems.map((item, index) => (
        <ListItem key={index} disablePadding >
          <ListItemButton sx={{ textAlign: "center", display: "block", color: "white", backgroundColor: item.selected ? "#5E35B1" : "inherit", padding: '8px' }} >
            <ListItemIcon sx={{ color: "white", minWidth: 0, justifyContent: "center" }}>
            
              <img src={item.icon} />
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ fontSize: "12px", textAlign: "center" }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>

      <Drawer
        variant="permanent"
        sx={{
          width: { sm: 98 },
          flexShrink: 0,
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            backgroundColor: "#603AE5",
            color: "white",
            display: "flex",
            alignItems: "center",
          },
        }}
        ModalProps={{ BackdropProps: { invisible: false } }}
      >

        {drawer}
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: 200,
            backgroundColor: "#673AB7",
            color: "white",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;
