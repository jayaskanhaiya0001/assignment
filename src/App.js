import React, { useState } from "react";
import { Box } from '@mui/material';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import { DashBoard } from './view/dashboard/dashboard';
import './App.css';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className="App">
      <Box display={'flex'}>
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
        <Box flex={1}>
          <Header handleDrawerToggle={handleDrawerToggle}/>
          <DashBoard />
        </Box>
      </Box>
    </div>
  );
}

export default App;
