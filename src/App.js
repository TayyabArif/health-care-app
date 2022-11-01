import React from 'react';
import { ThemeProvider } from '@mui/system';
import theme from './theme'
import Main from './pages/Main';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom"
import Offers from './pages/Offers';
import OffersDetails from './pages/OffersDetails';
import BookLabTest from './pages/BookLabTest';
import OnlineConsultation from './pages/OnlineConsultation';
import Queries from './pages/Queries';
import Home from './pages/Home'
import Hospitals from './pages/Hospitals';
import Surgeries from './pages/Surgeries';
import Doctors from './pages/Doctors';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
      <Route path="/"
          element={
            <Main>
              <Home />
            </Main>
          }
        />

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
        <Route path="online-consultation"
          element={
            <Main>
              <OnlineConsultation />
            </Main>
          }
        />
        <Route path="help-me"
          element={
            <Main>
              <Queries />
            </Main>
          }
        />
        <Route path="hospital"
          element={
            <Main>
              <Hospitals />
            </Main>
          }
        />
        <Route path="surgeries"
          element={
            <Main>
              <Surgeries />
            </Main>
          }
        />
        <Route path="doctors"
          element={
            <Main>
              <Doctors />
            </Main>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
