import React from 'react';
import { AppBar, Toolbar, Box, Typography, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'; // Or use your SVG/logo

const Header = () => (
  <AppBar position="static" sx={{
    background: 'linear-gradient(90deg, #180C52 35%, #321D7E 100%)',
    boxShadow: '0 2px 20px #24206344'
  }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 3 }}>
      {/* Left: Logo + Site Name */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.1 }}>
        {/* You can replace this with your own SVG for a custom logo */}
        <CurrencyBitcoinIcon sx={{ color: '#ffeb3b', fontSize: 34 }} />
        <Typography
          component={Link}
          to="/"
          sx={{
            color: 'white',
            fontWeight: 900,
            fontSize: '1.38rem',
            letterSpacing: '.04em',
            textDecoration: 'none',
            fontFamily: 'Poppins, Segoe UI, Arial'
          }}
        >
          VioletVault
        </Typography>
      </Box>
      {/* Center: Nav links */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Typography component={Link} to="/" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', letterSpacing: '.02em' }}>
          Home
        </Typography>
        <Typography component={Link} to="/features" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', letterSpacing: '.02em' }}>
          Features
        </Typography>
        <Typography component={Link} to="/coins" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', letterSpacing: '.02em' }}>
          Crypto List
        </Typography>
        <Typography component={Link} to="/portfolio" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', letterSpacing: '.02em' }}>
          Portfolio
        </Typography>
        {/* You can add more nav items here */}
      </Box>
      {/* Right: Currency Selector */}
      <Select
        variant="outlined"
        defaultValue="EUR"
        sx={{
          color: '#fff',
          bgcolor: 'transparent',
          border: '1.4px solid #fff',
          borderRadius: '8px',
          fontWeight: 600,
          ml: 2,
          '.MuiSelect-icon': { color: '#fff' },
          '.MuiOutlinedInput-notchedOutline': { border: 0 },
        }}
      >
        <MenuItem value="EUR">EUR</MenuItem>
        <MenuItem value="USD">USD</MenuItem>
        {/* Add more currencies as needed */}
      </Select>
    </Toolbar>
  </AppBar>
);

export default Header;
