import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  Grid,
  Chip,
  Divider,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { PhotoCamera, Save, Cancel } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || 'User',
    avatar: user?.avatar || '',
    phone: user?.phone || '',
    department: user?.department || '',
    bio: user?.bio || ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
    setSnackbar({ open: true, message: 'Profile updated successfully!', severity: 'success' });
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      role: user?.role || 'User',
      avatar: user?.avatar || '',
      phone: user?.phone || '',
      department: user?.department || '',
      bio: user?.bio || ''
    });
    setIsEditing(false);
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Profile
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Avatar
                  src={formData.avatar}
                  sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                >
                  {!formData.avatar && formData.name.charAt(0)}
                </Avatar>
                {isEditing && (
                  <Button
                    component="label"
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      right: -8,
                      minWidth: 0,
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      '&:hover': { backgroundColor: 'primary.dark' }
                    }}
                  >
                    <PhotoCamera sx={{ fontSize: 18 }} />
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={handleAvatarChange}
                    />
                  </Button>
                )}
              </Box>
              
              <Typography variant="h6" gutterBottom>
                {formData.name}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {formData.email}
              </Typography>
              <Chip label={formData.role} color="primary" variant="outlined" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">Profile Information</Typography>
                {!isEditing ? (
                  <Button 
                    variant="contained" 
                    onClick={() => setIsEditing(true)}
                    startIcon={<Save />}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button 
                      variant="contained" 
                      onClick={handleSave}
                      startIcon={<Save />}
                    >
                      Save
                    </Button>
                    <Button 
                      variant="outlined" 
                      onClick={handleCancel}
                      startIcon={<Cancel />}
                    >
                      Cancel
                    </Button>
                  </Box>
                )}
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    variant={isEditing ? "outlined" : "standard"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    variant={isEditing ? "outlined" : "standard"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    variant={isEditing ? "outlined" : "standard"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Role</InputLabel>
                    <Select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      variant={isEditing ? "outlined" : "standard"}
                    >
                      <MenuItem value="Admin">Admin</MenuItem>
                      <MenuItem value="Manager">Manager</MenuItem>
                      <MenuItem value="User">User</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    variant={isEditing ? "outlined" : "standard"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bio"
                    name="bio"
                    multiline
                    rows={4}
                    value={formData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    variant={isEditing ? "outlined" : "standard"}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Account Statistics</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">Member Since</Typography>
                  <Typography variant="h6">January 2024</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">Last Login</Typography>
                  <Typography variant="h6">Today, 2:30 PM</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">Total Vehicles Managed</Typography>
                  <Typography variant="h6">127</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">Reports Generated</Typography>
                  <Typography variant="h6">34</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

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

export default Profile;