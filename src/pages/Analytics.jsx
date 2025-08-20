import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { LineChart, BarChart, DoughnutChart } from '../components/charts/ChartComponents';
import { revenueChartData, userActivityData, vehicleStatusData } from '../data/mockData';

const Analytics = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Analytics
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Revenue & Expenses Over Time
              </Typography>
              <LineChart data={revenueChartData} height={380} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Fleet Status Distribution
              </Typography>
              <DoughnutChart data={vehicleStatusData} height={320} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Weekly Active Users
              </Typography>
              <BarChart data={userActivityData} height={300} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;