import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Box, useTheme } from '@mui/material';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

export const LineChart = ({ data, options = {}, height = 300 }) => {
  const theme = useTheme();
  
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme.palette.text.primary,
          usePointStyle: true,
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.primary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true
      }
    },
    scales: {
      x: {
        grid: {
          color: theme.palette.divider,
          drawBorder: false
        },
        ticks: {
          color: theme.palette.text.secondary
        }
      },
      y: {
        grid: {
          color: theme.palette.divider,
          drawBorder: false
        },
        ticks: {
          color: theme.palette.text.secondary
        }
      }
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6
      },
      line: {
        borderWidth: 2
      }
    },
    ...options
  };

  return (
    <Box sx={{ height, width: '100%' }}>
      <Line data={data} options={defaultOptions} />
    </Box>
  );
};

export const BarChart = ({ data, options = {}, height = 300 }) => {
  const theme = useTheme();
  
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme.palette.text.primary,
          usePointStyle: true,
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.primary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        cornerRadius: 8
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: theme.palette.text.secondary
        }
      },
      y: {
        grid: {
          color: theme.palette.divider,
          drawBorder: false
        },
        ticks: {
          color: theme.palette.text.secondary
        }
      }
    },
    elements: {
      bar: {
        borderRadius: 4,
        borderSkipped: false
      }
    },
    ...options
  };

  return (
    <Box sx={{ height, width: '100%' }}>
      <Bar data={data} options={defaultOptions} />
    </Box>
  );
};

export const DoughnutChart = ({ data, options = {}, height = 300 }) => {
  const theme = useTheme();
  
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: theme.palette.text.primary,
          usePointStyle: true,
          padding: 20,
          generateLabels: (chart) => {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const dataset = data.datasets[0];
                const backgroundColor = dataset.backgroundColor[i];
                return {
                  text: label,
                  fillStyle: backgroundColor,
                  strokeStyle: backgroundColor,
                  lineWidth: 0,
                  pointStyle: 'circle',
                  hidden: false,
                  index: i
                };
              });
            }
            return [];
          }
        }
      },
      tooltip: {
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.primary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    cutout: '60%',
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: theme.palette.background.paper
      }
    },
    ...options
  };

  return (
    <Box sx={{ height, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Doughnut data={data} options={defaultOptions} />
    </Box>
  );
};

export const MiniChart = ({ data, type = 'line', height = 60 }) => {
  const theme = useTheme();
  
  const miniOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 0
      },
      line: {
        borderWidth: 2,
        tension: 0.4
      }
    },
    interaction: {
      intersect: false
    }
  };

  return (
    <Box sx={{ height, width: '100%' }}>
      {type === 'line' ? (
        <Line data={data} options={miniOptions} />
      ) : (
        <Bar data={data} options={miniOptions} />
      )}
    </Box>
  );
};