import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: { main: '#4a90e2' },       // Soft Blue
    secondary: { main: '#f50057' },     // Vibrant Pink
    background: { default: '#f0f4f8' }, // Light gray-blue
    text: { primary: '#333', secondary: '#666' },
  },
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    h3: { fontWeight: 700, letterSpacing: '0.03em' },
    button: { fontWeight: 'bold', textTransform: 'none' },
  },
  shape: { borderRadius: 12 },
});

export default theme;
