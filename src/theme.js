
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#01334e',
    },
    secondary: {
      main: '#00d986',
    },
    danger: {
        main: '#c02942',
      },
    success: {
        main: '#0CCE6B'
    },
    divider: '#587291',
  },
});

export default theme;
