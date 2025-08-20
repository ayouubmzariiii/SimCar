import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Avatar, Chip } from '@mui/material';
import { DirectionsCar, Build, People, Warning, CheckCircle, Assessment } from '@mui/icons-material';
import { recentActivities } from '../data/mockData';

const iconMap = {
  vehicle_added: <DirectionsCar />,
  maintenance: <Build />,
  user_login: <People />,
  alert: <Warning />,
  report: <Assessment />
};

const NotificationsPage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Notifications
      </Typography>

      <Card>
        <CardContent>
          <List>
            {recentActivities.map((a) => (
              <ListItem key={a.id} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
                <ListItemAvatar>
                  <Avatar color={a.color}>{iconMap[a.type] || <CheckCircle />}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={a.message}
                  secondary={a.timestamp}
                />
                <Chip label={a.type} size="small" variant="outlined" />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NotificationsPage;