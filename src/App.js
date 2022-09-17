import React from 'react';
import { ThemeProvider } from '@mui/system';
import theme from './theme'
import Main from './pages/Main';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom"
import Offers from './pages/Offers';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="login"
          element={
            <Main>
              <Login />
            </Main>
          }
        />
        <Route path="offers"
          element={
            <Main>
              <Offers />
            </Main>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
