import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  Divider,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert
} from '@mui/material';
import {
  AccountCircle,
  Notifications as NotificationsIcon,
  Security,
  Palette,
  Info,
  ExitToApp,
  Delete
} from '@mui/icons-material';
import { useTheme as useCustomTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const { darkMode, toggleDarkMode } = useCustomTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleDeleteAccount = () => {
    // In a real app, this would make an API call
    setSnackbar({ open: true, message: 'Account deletion simulated - this would call an API', severity: 'info' });
    setDeleteDialogOpen(false);
  };

  const settingsSections = [
    {
      title: 'Account',
      items: [
        {
          icon: <AccountCircle />,
          text: 'Profile Information',
          description: 'Manage your personal details and avatar',
          action: () => navigate('/profile'),
          buttonText: 'Manage'
        },
        {
          icon: <Security />,
          text: 'Security',
          description: 'Change password and security settings',
          action: () => setSnackbar({ open: true, message: 'Security settings would open here', severity: 'info' }),
          buttonText: 'Configure'
        }
      ]
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: <Palette />,
          text: 'Appearance',
          description: 'Customize the look and feel of your dashboard',
          action: null,
          buttonText: null
        },
        {
          icon: <NotificationsIcon />,
          text: 'Notifications',
          description: 'Manage email and push notifications',
          action: () => setSnackbar({ open: true, message: 'Notification preferences would open here', severity: 'info' }),
          buttonText: 'Manage'
        }
      ]
    },
    {
      title: 'System',
      items: [
        {
          icon: <Info />,
          text: 'About',
          description: 'Version information and system details',
          action: () => setSnackbar({ open: true, message: 'SimCar Dashboard v1.0.0', severity: 'info' }),
          buttonText: 'View'
        }
      ]
    }
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Settings
      </Typography>

      <Grid container spacing={3}>
        {settingsSections.map((section, sectionIndex) => (
          <Grid item xs={12} key={section.title}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {section.title}
                </Typography>
                <List>
                  {section.items.map((item, itemIndex) => (
                    <ListItem key={item.text} disablePadding divider={itemIndex < section.items.length - 1}>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText 
                        primary={item.text}
                        secondary={item.description}
                      />
                      {item.action && item.buttonText && (
                        <Button 
                          variant="outlined" 
                          size="small"
                          onClick={item.action}
                          sx={{ ml: 2 }}
                        >
                          {item.buttonText}
                        </Button>
                      )}
                      {item.text === 'Appearance' && (
                        <FormControlLabel
                          control={
                            <Switch 
                              checked={darkMode} 
                              onChange={toggleDarkMode}
                              color="primary"
                            />
                          }
                          label={darkMode ? 'Dark Mode' : 'Light Mode'}
                          sx={{ ml: 2 }}
                        />
                      )}
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'error.main' }}>
                Account Actions
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<ExitToApp />}
                  onClick={handleLogout}
                  fullWidth
                >
                  Sign Out
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => setDeleteDialogOpen(true)}
                  fullWidth
                >
                  Delete Account
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Delete Account Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="delete-dialog-title"
      >
        <DialogTitle id="delete-dialog-title">
          Delete Account
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your account? This action cannot be undone.
            All your data will be permanently removed from our system.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleDeleteAccount} color="error" autoFocus>
            Delete Account
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

// Add missing Grid import
import { Grid } from '@mui/material';

export default Settings;