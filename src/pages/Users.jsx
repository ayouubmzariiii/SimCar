import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton, Snackbar, Alert } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const users = [
  { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'Manager', status: 'Active' },
  { id: 3, name: 'John Smith', email: 'john@example.com', role: 'Viewer', status: 'Suspended' },
];

const Users = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

  const handleEditUser = (user) => {
    setSnackbar({ open: true, message: `Editing ${user.name}`, severity: 'info' });
  };

  const handleDeleteUser = (user) => {
    setSnackbar({ open: true, message: `Deleting ${user.name} (simulated)`, severity: 'warning' });
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Users
      </Typography>

      <Card>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((u) => (
                  <TableRow key={u.id} hover>
                    <TableCell>{u.name}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.role}</TableCell>
                    <TableCell>
                      <Chip label={u.status} size="small" color={u.status === 'Active' ? 'success' : 'warning'} />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={() => handleEditUser(u)}>
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleDeleteUser(u)}>
                        <Delete fontSize="small" />
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

export default Users;