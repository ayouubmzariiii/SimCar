import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
  Tooltip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon,
  DarkMode,
  LightMode,
  Notifications,
  AccountCircle,
  Logout,
  Settings,
  Person
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme as useCustomTheme } from '../../contexts/ThemeContext';

const Header = ({ onMenuToggle, sidebarOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { user, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useCustomTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchor, setNotificationAnchor] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationOpen = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchor(null);
  };

  const handleLogout = () => {
    logout();
    handleProfileMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'background.paper',
        color: 'text.primary',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side - Menu and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          {!isMobile && (
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Dashboard
            </Typography>
          )}
        </Box>

        {/* Right side - Actions and Profile */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Theme Toggle */}
          <Tooltip title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            <IconButton
              color="inherit"
              onClick={toggleDarkMode}
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'action.hover' 
                }
              }}
            >
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Tooltip>

          {/* Notifications */}
          <Tooltip title="Notifications">
            <IconButton
              color="inherit"
              onClick={handleNotificationOpen}
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'action.hover' 
                }
              }}
            >
              <Badge badgeContent={3} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Profile Menu */}
          {user && (
            <>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleProfileMenuOpen}
                  sx={{ 
                    p: 0.5,
                    '&:hover': { 
                      backgroundColor: 'action.hover' 
                    }
                  }}
                >
                  <Avatar
                    src={user.avatar}
                    sx={{ width: 32, height: 32 }}
                  >
                    {user.name?.charAt(0)}
                  </Avatar>
                </IconButton>
              </Tooltip>
              
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProfileMenuClose}
                onClick={handleProfileMenuClose}
                PaperProps={{
                  elevation: 3,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
                    mt: 1.5,
                    minWidth: 200,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <Box sx={{ px: 2, py: 1 }}>
                  <Typography variant="subtitle2">{user.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </Box>
                <Divider />
                <MenuItem onClick={handleProfileMenuClose}>
                  <ListItemIcon>
                    <Person fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleProfileMenuClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Settings</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>

      {/* Notifications Menu */}
      <Menu
        anchorEl={notificationAnchor}
        open={Boolean(notificationAnchor)}
        onClose={handleNotificationClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            minWidth: 300,
            maxHeight: 400,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="h6">Notifications</Typography>
        </Box>
        <Divider />
        <MenuItem onClick={handleNotificationClose}>
          <Box>
            <Typography variant="body2">New vehicle registered</Typography>
            <Typography variant="caption" color="text.secondary">
              2 minutes ago
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleNotificationClose}>
          <Box>
            <Typography variant="body2">System maintenance scheduled</Typography>
            <Typography variant="caption" color="text.secondary">
              1 hour ago
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleNotificationClose}>
          <Box>
            <Typography variant="body2">Monthly report ready</Typography>
            <Typography variant="caption" color="text.secondary">
              3 hours ago
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;