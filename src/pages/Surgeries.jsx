import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SpecialistCard from "../components/SpecialistCard";
import SergrieslInfo from "../components/Sergries/SergriesInfo";
import Diseases from "../components/Sergries/Diseases";
import Services from "../components/Sergries/Services";

const Surgeries = () => {
  return (
    <Box
      component="div"
      sx={{ height: "100%", width: "100%", bgcolor: "#eeeee4" }}
    >
      <Grid
        container
        direction="column"
        sx={{ height: "100%", width: "100%" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid
          container
          item
          direction="column"
          sx={{
            width: "100%",
            height: "15%",
            bgcolor: "#014e78",
            pt: 5,
            pb: 5,
            mb: "1%",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            fontSize="2rem"
            fontWeight="bold"
            color="#f8f8ff"
            fontFamily="Consolas"
          >
            Surgical Procedures in Pakistan
          </Typography>
          <Typography color="#f8f8ff" sx={{ mt: "5px", mb: "20px" }}>
            Find Best Surgeons List, Addresses and Contact Info
          </Typography>
          <FormControl
            sx={{
              m: 1,
              minWidth: "700px",
              bgcolor: "white",
              borderRadius: "10px",
            }}
          >
            {/* <InputLabel htmlFor="outlined-adornment-amount">Select your City</InputLabel> */}
            <OutlinedInput
              id="outlined-adornment-amount"
              value=""
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              label="Select your City"
              placeholder="Search for Doctors, Specialists, Labs and Hospitals"
            />
          </FormControl>
        </Grid>
        <Grid
          container
          item
          sx={{ width: "98%", height: "9%", bgcolor: "white" }}
          alignItems="center"
        >
          <Grid
            container
            item
            sx={{ width: "100%", height: "70%", bgcolor: "white", pl: 0 }}
            alignItems="center"
          >
            <Button variant="text" sx={{ color: "black", fontSize: "0.8rem" }}>
              Home
            </Button>
            <KeyboardArrowRightIcon sx={{ color: "primary.main" }} />
            <Typography fontSize="0.9rem">All Surgeries</Typography>
          </Grid>
          <Grid
            container
            item
            sx={{ width: "100%", height: "19%", bgcolor: "white", pl: 1.5 }}
          >
            <Typography
              fontSize="1rem"
              fontWeight="bold"
              color="primary.main"
              fontFamily="Consolas"
            >
              Find a Doctor - All Surgeries
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          sx={{
            width: "98%",
            height: "10%",
            bgcolor: "white",
            mb: "1%",
            p: 1.5,
            pt: 4,
          }}
        >
          <Grid container item>
            <Typography
              fontSize="1rem"
              fontWeight="bold"
              color="primary.main"
              fontFamily="Consolas"
              sx={{ mb: 2 }}
            >
              Top Surgeries and Procedures
            </Typography>
          </Grid>
          <Grid
            container
            item
            sx={{ width: "100%", height: "25%", mt: 1, mb: 1, pl: 1 }}
          >
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
          </Grid>
        </Grid>
        <Grid sx={{ width: "98%", height: "19%" }}>
          <SergrieslInfo />
          <SergrieslInfo />
          <SergrieslInfo />
          <SergrieslInfo />
          <SergrieslInfo />
          <SergrieslInfo />
          <SergrieslInfo />
          <SergrieslInfo />
        </Grid>
        <Grid
          container
          item
          direction= 'column'
          sx={{
            width: "98%",
            height: "10%",
            bgcolor: "white",
            mb: "1%",
            p: 1.5,
            pt: 2,
          }}
        >
          <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              fontSize="1.4rem"
              fontWeight="bold"
              color="primary.main"
              fontFamily="Consolas"
              sx={{ mb: 1 }}
            >
              Top Searched Specialities
            </Typography>
            <Typography fontSize="0.9rem" fontFamily="Consolas" sx={{ mb: 2 }}>
              150+ Specialities available
            </Typography>
          </Grid>
          <Grid
            container
            item
            sx={{ width: "100%", height: "65%", mt: 1, mb: 1, pl: 1 }}
          >
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
          </Grid>
          <Grid container item justifyContent="center"
            alignItems="center">
          <Button
            variant="contained"
            sx={{ mt: 2, color: "white", backgroundColor: "danger.main" }}
          >
            View All Specialists
          </Button>
          </Grid>
        </Grid>
        <Grid container item direction='column' sx={{ bgcolor: 'white', width: '98%', height: '5%',mt: '1%', p:3 }}>
            <Diseases />
        </Grid>
        <Grid container item direction='column' sx={{ bgcolor: 'white', width: '98%', height: '5%', p: 3, pt: 0, mb: '1%' }}>
            <Services />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Surgeries;
