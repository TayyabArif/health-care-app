import React from 'react';
import { ThemeProvider } from '@mui/system';
import theme from './theme'
import Main from './pages/Main';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom"
import Offers from './pages/Offers';
import OffersDetails from './pages/OffersDetails';
import BookLabTest from './pages/BookLabTest';

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
          <Route path="offersdetails"
          element={
            <Main>
              <OffersDetails />
            </Main>
          }
        />
        <Route path="lab%20test"
          element={
            <Main>
              <BookLabTest />
            </Main>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
