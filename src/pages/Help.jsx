import React from 'react';
import { Box, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Help = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Help & Support
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Getting Started</Typography>
          <Typography variant="body2" color="text.secondary">
            Use the sidebar to navigate between sections. Visit Analytics for insights, Vehicles to manage fleet, and Reports to generate summaries.
          </Typography>
        </CardContent>
      </Card>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I reset my password?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            Contact your administrator or use the password reset option on the login screen.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How can I export reports?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            Go to the Reports section and click Generate for the report you want, then choose the export format.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ mt: 3 }}>
        <Button variant="contained" href="mailto:support@simcar.example">Contact Support</Button>
      </Box>
    </Box>
  );
};

export default Help;