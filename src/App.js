import React from 'react';
import { ThemeProvider } from '@mui/system';
import theme from './theme'
import Button from '@mui/material/Button';
function App() {
  return (
    <ThemeProvider theme={theme}>
     <Button variant="text">Text</Button>
    </ThemeProvider>
  );
}

export default App;
