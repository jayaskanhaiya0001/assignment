import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  Button,
  IconButton,
  Tooltip,
  useMediaQuery,
  Typography,
  Drawer
} from "@mui/material";
import { Search, Notifications, Settings, Person, Menu } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import RightSidebar from '../sidebar/right-sidebar'

const HeaderNavTooltip = ({ children, title }) => {
  return (
    <Tooltip title={title}>
      <Button sx={{
        bgcolor: "#f0ecfd",
        color: "#603AE5",
        minWidth: "40px"
      }}>
        {children}
      </Button>
    </Tooltip>
  )
}

const Header = ({ handleDrawerToggle }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  const toggleDrawer = (state) => {
    setOpen(state);
  };
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        p={2}
        bgcolor="#fff"
        boxShadow={1}
        flex={1}
        height={'max-content'}
        position={'sticky'}
        top={'0'}
        width={'100%'}
        zIndex={999}

      >
        {/* Dropdown and Tag */}

        <Box display="flex" alignItems="center" gap={1}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, color: "#000" }}
          >
            <Menu />
          </IconButton>
          <Typography>Review</Typography>
          <Select defaultValue="Google" size="small" >
            <MenuItem value="Google">Google</MenuItem>
            <MenuItem value="Facebook">Facebook</MenuItem>
            <MenuItem value="Yelp">Yelp</MenuItem>
          </Select>
          {
            !isTablet && <Button size="small" sx={{ bgcolor: "#ecfcff", color: "green", textWrap: "nowrap" }}>
              Quickbook’s Data
            </Button>
          }

        </Box>

        {/* Action Buttons */}
        <Box display="flex" alignItems="center" gap={1}>
          <HeaderNavTooltip title="Search"><Search /></HeaderNavTooltip>
          {!isTablet && (
            <>
              <HeaderNavTooltip>Export To Excel</HeaderNavTooltip>
              <HeaderNavTooltip>Add Document</HeaderNavTooltip>
            </>
          )}
          <HeaderNavTooltip>Connect</HeaderNavTooltip>
          <HeaderNavTooltip title="Notifications"><img src="/notification.svg" /></HeaderNavTooltip>
          <HeaderNavTooltip title="Settings"><img src="/setting.svg" /></HeaderNavTooltip>
          <Tooltip title={'Profile'} onClick={() => toggleDrawer(true)}>
            <Button sx={{
              bgcolor: "#f0ecfd",
              color: "#603AE5",
              minWidth: "40px"
            }} >
              <img src="/profile.svg" />
            </Button>
          </Tooltip>
        </Box>
      </Box>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <RightSidebar />
      </Drawer>
    </>
  );
};

export default Header;