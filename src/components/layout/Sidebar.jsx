import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Dashboard,
  Analytics,
  People,
  Settings,
  DirectionsCar,
  Assessment,
  Notifications,
  Help,
  AccountCircle,
  Logout
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';
import { NavLink, useLocation } from 'react-router-dom';

const drawerWidth = 280;

const menuItems = [
  // Main Dashboard
  { text: 'Dashboard', icon: <Dashboard />, path: '/', group: 'main' },
  { text: 'Analytics', icon: <Analytics />, path: '/analytics', group: 'main' },
  
  // Fleet Management
  { text: 'Vehicles', icon: <DirectionsCar />, path: '/vehicles', group: 'fleet' },
  { text: 'Reports', icon: <Assessment />, path: '/reports', group: 'fleet' },
  
  // User Management
  { text: 'Users', icon: <People />, path: '/users', group: 'users' },
  { text: 'Notifications', icon: <Notifications />, path: '/notifications', group: 'users' },
  
  // Account & Settings
  { text: 'Profile', icon: <AccountCircle />, path: '/profile', group: 'account' },
  { text: 'Settings', icon: <Settings />, path: '/settings', group: 'account' },
  { text: 'Help', icon: <Help />, path: '/help', group: 'account' },
];

const Sidebar = ({ open, onClose, selectedItem, onItemSelect }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActivePath = (path) => {
    if (path === '/' && (location.pathname === '/' || location.pathname === '/dashboard')) return true;
    return location.pathname === path;
  };

  const handleItemClick = () => {
    if (isMobile) onClose();
  };

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Enhanced Header Section */}
      <Box sx={{ p: 2, textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 0.8 }}>
          <DirectionsCar sx={{ fontSize: 28, mr: 0.8 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
            SimCar
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.8rem' }}>
          Fleet Management System
        </Typography>
      </Box>
      
      {user && (
        <Box sx={{ p: 1.8, backgroundColor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.8 }}>
            <Avatar 
              src={user.avatar} 
              sx={{ 
                width: 42, 
                height: 42, 
                border: 1.5, 
                borderColor: 'primary.main' 
              }}
            >
              {user.name?.charAt(0)}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, lineHeight: 1.2, fontSize: '0.85rem' }}>
                {user.name}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontSize: '0.7rem' }}>
                {user.role}
              </Typography>
              <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 500, fontSize: '0.7rem' }}>
                Online
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
      
      {/* Navigation Menu */}
      <List sx={{ flex: 1, pt: 1.5, px: 1.2, overflow: 'hidden', paddingBottom: 0.8 }}>
        {(() => {
          let currentGroup = '';
          return menuItems.map((item) => {
            const showGroupHeader = item.group !== currentGroup;
            currentGroup = item.group;
            
            const groupTitles = {
              main: 'Overview',
              fleet: 'Fleet Management',
              users: 'User Management',
              account: 'Account'
            };
            
            return (
              <React.Fragment key={item.text}>
                {showGroupHeader && (
                  <Typography 
                    variant="overline" 
                    sx={{ 
                      px: 1.8, 
                      py: 1, 
                      color: 'text.secondary', 
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: 1.1
                    }}
                  >
                    {groupTitles[item.group]}
                  </Typography>
                )}
                <ListItem disablePadding sx={{ mb: 0.3 }}>
                  <ListItemButton
                    component={NavLink}
                    to={item.path}
                    onClick={handleItemClick}
                    className={({ isActive }) => (isActive || isActivePath(item.path) ? 'active' : '')}
                    sx={{
                      borderRadius: 1.8,
                      py: 1,
                      px: 1.8,
                      '&.active': {
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        },
                        '& .MuiListItemIcon-root': {
                          color: 'primary.contrastText',
                        },
                      },
                      '&:hover': {
                        backgroundColor: 'action.hover',
                        '& .MuiListItemIcon-root': {
                          color: 'primary.main',
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 32,
                        color: isActivePath(item.path) ? 'primary.contrastText' : 'text.secondary',
                        transition: 'color 0.2s',
                        '& svg': { fontSize: '1.2rem' }
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: '0.8rem',
                        fontWeight: isActivePath(item.path) ? 600 : 500,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </React.Fragment>
            );
          });
        })()}
      </List>
      
      {/* Logout Button */}
      <Box sx={{ p: 1.2, borderTop: 1, borderColor: 'divider' }}>
        <ListItemButton
          onClick={() => {
            logout();
            if (isMobile) onClose();
          }}
          sx={{
            borderRadius: 1.8,
            py: 1,
            px: 1.8,
            '&:hover': {
              backgroundColor: 'error.light',
              color: 'error.contrastText',
              '& .MuiListItemIcon-root': {
                color: 'error.contrastText',
              },
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 32,
              color: 'error.main',
              transition: 'color 0.2s',
              '& svg': { fontSize: '1.2rem' }
            }}
          >
            <Logout />
          </ListItemIcon>
          <ListItemText 
            primary="Logout"
            primaryTypographyProps={{
              fontSize: '0.8rem',
              fontWeight: 500,
            }}
          />
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          top: isMobile ? 10 : 20,
          height: isMobile ? 'calc(100% - 20px)' : 'calc(100% - 40px)',
          backgroundColor: 'background.paper',
          border: 'none',
          borderRadius: 2,
          marginLeft: isMobile ? 1 : 2,
          marginTop: isMobile ? 1 : 0,
          position: 'fixed',
        },
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;