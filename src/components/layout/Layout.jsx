import React, { useState } from 'react';
import {
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Sidebar from './Sidebar';

const drawerWidth = 280;

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
      {/* Floating Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={handleSidebarClose}
      />
      
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          minHeight: '100vh',
          backgroundColor: 'background.default',
          marginLeft: 0,
          transition: 'none',
          paddingLeft: isMobile ? 0 : '70px',
          paddingTop: 2.5,
          paddingRight: 2.5,
          paddingBottom: 2.5,
        }}
      >
        {/* Page Content Container */}
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            height: isMobile ? 'calc(100vh - 20px)' : 'calc(100vh - 40px)',
            overflow: 'auto',
            p: { xs: 2, sm: 3 },
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#c1c1c1',
              borderRadius: '4px',
              '&:hover': {
                background: '#a8a8a8',
              },
            },
            '&::-webkit-scrollbar-thumb:active': {
              background: '#888',
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;