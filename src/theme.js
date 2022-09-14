
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light', 
    primary: {
      main: '#20BC62',
    },
    secondary: {
      main: '#522A27',
    },
    danger: {
        main: '#FF5D73',
      },
    success: {
        main: '#0CCE6B'
    },
    divider: '#587291',
  },
});

export default theme;