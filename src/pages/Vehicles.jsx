import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton, Snackbar, Alert } from '@mui/material';
import { Edit, Visibility } from '@mui/icons-material';
import { topVehicles } from '../data/mockData';

const Vehicles = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

  const handleViewVehicle = (vehicle) => {
    setSnackbar({ open: true, message: `Viewing ${vehicle.name} details`, severity: 'info' });
  };

  const handleEditVehicle = (vehicle) => {
    setSnackbar({ open: true, message: `Editing ${vehicle.name}`, severity: 'info' });
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Vehicles
      </Typography>

      <Card>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Efficiency</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Last Service</TableCell>
                  <TableCell>Mileage</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topVehicles.map((v) => (
                  <TableRow key={v.id} hover>
                    <TableCell>{v.name}</TableCell>
                    <TableCell>{v.type}</TableCell>
                    <TableCell>{v.efficiency}%</TableCell>
                    <TableCell>
                      <Chip
                        label={v.status}
                        size="small"
                        color={v.status === 'Active' ? 'success' : v.status === 'Maintenance' ? 'warning' : 'default'}
                        variant={v.status === 'Active' ? 'filled' : 'outlined'}
                      />
                    </TableCell>
                    <TableCell>{v.lastService}</TableCell>
                    <TableCell>{v.mileage.toLocaleString()} km</TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={() => handleViewVehicle(v)}>
                        <Visibility fontSize="small" />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleEditVehicle(v)}>
                        <Edit fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

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

export default Vehicles;