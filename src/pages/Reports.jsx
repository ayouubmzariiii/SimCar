import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Snackbar, Alert } from '@mui/material';

const reportDefs = [
  { id: 'monthly', title: 'Monthly Performance Report', desc: 'Summary of KPIs, revenue, and fleet performance for the month.' },
  { id: 'utilization', title: 'Fleet Utilization', desc: 'Vehicle utilization and downtime analysis.' },
  { id: 'maintenance', title: 'Maintenance Overview', desc: 'Upcoming maintenance and cost breakdown.' },
];

const Reports = () => {
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  const generate = (title) => {
    setSnack({ open: true, message: `${title} generated successfully`, severity: 'success' });
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Reports
      </Typography>

      <Grid container spacing={3}>
        {reportDefs.map((r) => (
          <Grid key={r.id} item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{r.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{r.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" onClick={() => generate(r.title)}>Generate</Button>
                <Button>Preview</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Snackbar open={snack.open} autoHideDuration={2500} onClose={() => setSnack({ ...snack, open: false })}>
        <Alert onClose={() => setSnack({ ...snack, open: false })} severity={snack.severity} variant="filled" sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Reports;