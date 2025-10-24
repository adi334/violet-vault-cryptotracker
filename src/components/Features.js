import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import TimelineIcon from '@mui/icons-material/Timeline';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const features = [
  {
    title: 'Real-time Price Tracking',
    icon: <TrendingUpIcon sx={{ fontSize: 42, color: '#a889ff' }} />,
    desc: 'Monitor live crypto prices and market movements with instant updates.',
  },
  {
    title: 'Secure Portfolio Management',
    icon: <SecurityIcon sx={{ fontSize: 42, color: '#a889ff' }} />,
    desc: 'Safely track your holdings and historic transactions in a transparent dashboard.',
  },
  {
    title: 'Interactive Analytics',
    icon: <TimelineIcon sx={{ fontSize: 42, color: '#a889ff' }} />,
    desc: 'Visualize trends and insights with dynamic price charts and history.',
  },
  {
    title: 'Modern, Intuitive Design',
    icon: <DesignServicesIcon sx={{ fontSize: 42, color: '#a889ff' }} />,
    desc: "Enjoy a seamless, responsive UI that's easy to navigate on any screen.",
  },
];

const Features = () => (
  <Box
    sx={{
      minHeight: '90vh',
      background: 'linear-gradient(135deg, #180C52 0%, #321D7E 100%)',
      px: 2, py: 8,
    }}
  >
    <Typography
      variant="h3"
      align="center"
      sx={{
        color: "#fff",
        fontWeight: 800,
        letterSpacing: ".04em",
        mb: 5,
        fontFamily: 'Poppins, Segoe UI, Arial',
      }}
    >
      Platform Features
    </Typography>
    <Grid container spacing={5} justifyContent="center">
      {features.map((feature, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card
            elevation={6}
            sx={{
              background: "rgba(129, 84, 255, 0.19)",
              borderRadius: 4,
              minHeight: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
              boxShadow: "0 6px 24px #5f37cc33",
              color: "#eedcff",
            }}
          >
            <Box mb={1.6}>{feature.icon}</Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: "#fff" }}>
              {feature.title}
            </Typography>
            <Typography sx={{ color: "#e6dbfd", fontSize: ".99rem" }}>
              {feature.desc}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Features;
