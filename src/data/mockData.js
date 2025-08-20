// Mock data for dashboard metrics and charts

export const dashboardMetrics = {
  totalVehicles: {
    value: 1247,
    change: 12.5,
    trend: 'up',
    period: 'vs last month'
  },
  activeUsers: {
    value: 8934,
    change: -2.3,
    trend: 'down',
    period: 'vs last month'
  },
  revenue: {
    value: 125430,
    change: 18.7,
    trend: 'up',
    period: 'vs last month'
  },
  efficiency: {
    value: 94.2,
    change: 3.1,
    trend: 'up',
    period: 'vs last month'
  }
};

export const vehicleStatusData = {
  labels: ['Active', 'Maintenance', 'Idle', 'Out of Service'],
  datasets: [{
    data: [756, 123, 298, 70],
    backgroundColor: [
      '#4caf50',
      '#ff9800',
      '#2196f3',
      '#f44336'
    ],
    borderWidth: 0
  }]
};

export const revenueChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [65000, 72000, 68000, 85000, 92000, 88000, 95000, 102000, 98000, 115000, 125000, 135000],
      borderColor: '#1976d2',
      backgroundColor: 'rgba(25, 118, 210, 0.1)',
      fill: true,
      tension: 0.4
    },
    {
      label: 'Expenses',
      data: [45000, 52000, 48000, 55000, 62000, 58000, 65000, 72000, 68000, 75000, 82000, 88000],
      borderColor: '#dc004e',
      backgroundColor: 'rgba(220, 0, 78, 0.1)',
      fill: true,
      tension: 0.4
    }
  ]
};

export const userActivityData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Active Users',
    data: [1200, 1900, 1500, 2100, 1800, 900, 600],
    backgroundColor: 'rgba(25, 118, 210, 0.8)',
    borderColor: '#1976d2',
    borderWidth: 1
  }]
};

export const recentActivities = [
  {
    id: 1,
    type: 'vehicle_added',
    message: 'New vehicle Tesla Model S added to fleet',
    timestamp: '2 minutes ago',
    icon: 'car',
    color: 'success'
  },
  {
    id: 2,
    type: 'maintenance',
    message: 'Vehicle BMW X5 scheduled for maintenance',
    timestamp: '15 minutes ago',
    icon: 'build',
    color: 'warning'
  },
  {
    id: 3,
    type: 'user_login',
    message: 'John Doe logged into the system',
    timestamp: '1 hour ago',
    icon: 'person',
    color: 'info'
  },
  {
    id: 4,
    type: 'alert',
    message: 'Low fuel alert for vehicle Honda Civic',
    timestamp: '2 hours ago',
    icon: 'warning',
    color: 'error'
  },
  {
    id: 5,
    type: 'report',
    message: 'Monthly report generated successfully',
    timestamp: '3 hours ago',
    icon: 'assessment',
    color: 'primary'
  }
];

export const topVehicles = [
  {
    id: 1,
    name: 'Tesla Model S',
    type: 'Electric',
    efficiency: 98.5,
    status: 'Active',
    lastService: '2024-01-15',
    mileage: 45230
  },
  {
    id: 2,
    name: 'BMW X5',
    type: 'Hybrid',
    efficiency: 92.3,
    status: 'Maintenance',
    lastService: '2024-01-10',
    mileage: 67890
  },
  {
    id: 3,
    name: 'Audi A4',
    type: 'Gasoline',
    efficiency: 89.7,
    status: 'Active',
    lastService: '2024-01-20',
    mileage: 34567
  },
  {
    id: 4,
    name: 'Honda Civic',
    type: 'Hybrid',
    efficiency: 94.1,
    status: 'Idle',
    lastService: '2024-01-18',
    mileage: 23456
  },
  {
    id: 5,
    name: 'Ford Mustang',
    type: 'Gasoline',
    efficiency: 87.2,
    status: 'Active',
    lastService: '2024-01-12',
    mileage: 56789
  }
];

export const performanceMetrics = {
  fuelEfficiency: {
    current: 94.2,
    target: 95.0,
    trend: 'up'
  },
  maintenanceCost: {
    current: 15420,
    target: 14000,
    trend: 'down'
  },
  uptime: {
    current: 98.7,
    target: 99.0,
    trend: 'up'
  },
  customerSatisfaction: {
    current: 4.6,
    target: 4.8,
    trend: 'up'
  }
};