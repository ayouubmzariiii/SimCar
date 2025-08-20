import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  IconButton,
  Tooltip,
  useTheme
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  DirectionsCar,
  People,
  AttachMoney,
  Speed,
  Build,
  Warning,
  CheckCircle,
  MoreVert
} from '@mui/icons-material';
import { LineChart, BarChart, DoughnutChart, MiniChart } from '../components/charts/ChartComponents';
import {
  dashboardMetrics,
  vehicleStatusData,
  revenueChartData,
  userActivityData,
  recentActivities,
  topVehicles,
  performanceMetrics
} from '../data/mockData';

const MetricCard = ({ title, value, change, trend, icon, color = 'primary' }) => {
  const theme = useTheme();
  const isPositive = trend === 'up';
  
  // Create mini chart data for sparkline
  const miniData = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [{
      data: [65, 72, 68, 85, 92, 88, 95],
      borderColor: theme.palette[color].main,
      backgroundColor: `${theme.palette[color].main}20`,
      fill: true
    }]
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography color="text.secondary" gutterBottom variant="body2">
              {title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
              {typeof value === 'number' && title.includes('Revenue') 
                ? `$${value.toLocaleString()}` 
                : typeof value === 'number' && title.includes('Efficiency')
                ? `${value}%`
                : value.toLocaleString()}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {isPositive ? (
                <TrendingUp sx={{ color: 'success.main', fontSize: 16 }} />
              ) : (
                <TrendingDown sx={{ color: 'error.main', fontSize: 16 }} />
              )}
              <Typography
                variant="body2"
                sx={{
                  color: isPositive ? 'success.main' : 'error.main',
                  fontWeight: 'medium'
                }}
              >
                {Math.abs(change)}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                vs last month
              </Typography>
            </Box>
          </Box>
          <Avatar sx={{ bgcolor: `${color}.main`, width: 56, height: 56 }}>
            {icon}
          </Avatar>
        </Box>
        <Box sx={{ mt: 2 }}>
          <MiniChart data={miniData} height={40} />
        </Box>
      </CardContent>
    </Card>
  );
};

const ActivityItem = ({ activity }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'vehicle_added': return <DirectionsCar />;
      case 'maintenance': return <Build />;
      case 'user_login': return <People />;
      case 'alert': return <Warning />;
      case 'report': return <CheckCircle />;
      default: return <CheckCircle />;
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1 }}>
      <Avatar sx={{ bgcolor: `${activity.color}.main`, width: 32, height: 32 }}>
        {getIcon(activity.type)}
      </Avatar>
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2">{activity.message}</Typography>
        <Typography variant="caption" color="text.secondary">
          {activity.timestamp}
        </Typography>
      </Box>
    </Box>
  );
};

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {/* Metrics Cards */}
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard
            title="Total Vehicles"
            value={dashboardMetrics.totalVehicles.value}
            change={dashboardMetrics.totalVehicles.change}
            trend={dashboardMetrics.totalVehicles.trend}
            icon={<DirectionsCar />}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard
            title="Active Users"
            value={dashboardMetrics.activeUsers.value}
            change={dashboardMetrics.activeUsers.change}
            trend={dashboardMetrics.activeUsers.trend}
            icon={<People />}
            color="info"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard
            title="Monthly Revenue"
            value={dashboardMetrics.revenue.value}
            change={dashboardMetrics.revenue.change}
            trend={dashboardMetrics.revenue.trend}
            icon={<AttachMoney />}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard
            title="Fleet Efficiency"
            value={dashboardMetrics.efficiency.value}
            change={dashboardMetrics.efficiency.change}
            trend={dashboardMetrics.efficiency.trend}
            icon={<Speed />}
            color="warning"
          />
        </Grid>

        {/* Revenue Chart */}
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Revenue & Expenses Trend
              </Typography>
              <LineChart data={revenueChartData} height={350} />
            </CardContent>
          </Card>
        </Grid>

        {/* Vehicle Status */}
        <Grid item xs={12} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Vehicle Status
              </Typography>
              <DoughnutChart data={vehicleStatusData} height={300} />
            </CardContent>
          </Card>
        </Grid>

        {/* User Activity */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Weekly User Activity
              </Typography>
              <BarChart data={userActivityData} height={250} />
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activities */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              <Box sx={{ maxHeight: 250, overflow: 'auto' }}>
                {recentActivities.map((activity) => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Top Vehicles Table */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">
                  Top Performing Vehicles
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Vehicle</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Efficiency</TableCell>
                      <TableCell>Mileage</TableCell>
                      <TableCell>Last Service</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {topVehicles.map((vehicle) => (
                      <TableRow key={vehicle.id} hover>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                              <DirectionsCar fontSize="small" />
                            </Avatar>
                            <Typography variant="body2" fontWeight="medium">
                              {vehicle.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={vehicle.type} 
                            size="small" 
                            variant="outlined"
                            color={vehicle.type === 'Electric' ? 'success' : vehicle.type === 'Hybrid' ? 'info' : 'default'}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={vehicle.status} 
                            size="small"
                            color={
                              vehicle.status === 'Active' ? 'success' : 
                              vehicle.status === 'Maintenance' ? 'warning' : 'default'
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box sx={{ width: 60 }}>
                              <LinearProgress 
                                variant="determinate" 
                                value={vehicle.efficiency} 
                                color={vehicle.efficiency > 90 ? 'success' : 'primary'}
                              />
                            </Box>
                            <Typography variant="body2">
                              {vehicle.efficiency}%
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {vehicle.mileage.toLocaleString()} mi
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" color="text.secondary">
                            {vehicle.lastService}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;