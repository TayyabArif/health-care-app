import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import HospitalInfo from "../components/Hopitals/HospitalInfo";
import DepartmenCard from "../components/Hopitals/DepartmentCard";
import DoctorlInfo from "../components/Hopitals/DoctorInfo/DoctorInfo";
import HospitalAbout from "../components/HopitalAbout";
import FAQ from "../components/FAQ";
import SimilarHospitals from "../components/Hopitals/SimilarHospitals";
import Help from "../components/Help";
const Hospitals = () => {
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
          sx={{ width: "98%", height: "9%", bgcolor: "white", m: "1%" }}
          alignItems="center"
        >
          <Button variant="text" sx={{ color: "black", fontSize: "0.8rem" }}>
            Home
          </Button>
          <KeyboardArrowRightIcon sx={{ color: "primary.main" }} />
          <Button variant="text" sx={{ color: "black", fontSize: "0.8rem" }}>
            Hospitals
          </Button>
          <KeyboardArrowRightIcon sx={{ color: "primary.main" }} />
          <Button variant="text" sx={{ color: "black", fontSize: "0.8rem" }}>
            Lahore
          </Button>
          <KeyboardArrowRightIcon sx={{ color: "primary.main" }} />
          <Button variant="text" sx={{ color: "black", fontSize: "0.8rem" }}>
            Hameed Latif hospital
          </Button>
          <KeyboardArrowRightIcon sx={{ color: "primary.main" }} />
          <Typography fontSize="0.9rem">Special offers</Typography>
        </Grid>
        <Grid
          container
          item
          sx={{ width: "98%", height: "9%", bgcolor: "white", m: "1%", mt: 0 }}
        >
          <HospitalInfo />
        </Grid>
        <Grid
          container
          item
          sx={{ width: "98%", height: "19%", bgcolor: "white", m: "1%", mt: 0 }}
        >
          <Typography
            sx={{ mt: 1, mb: 1 }}
            fontSize="1.1rem"
            fontWeight="bold"
            color="primary.main"
            fontFamily="Consolas"
          >
            Departments / Clinics in Hameed Latif Hospital
          </Typography>
          <Grid
            container
            item
            sx={{
              width: "100%",
              height: "75%",
              mt: 1,
              mb: 1,
              bgcolor: "white",
              pl: 3,
              flexWrap: "wrap",
            }}
          >
            <DepartmenCard />
            <DepartmenCard />
            <DepartmenCard />
            <DepartmenCard />
            <DepartmenCard />
            <DepartmenCard />
            <DepartmenCard />
            <DepartmenCard />
          </Grid>
          <Grid
            container
            item
            sx={{ width: "98%", height: "10%" }}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="text"
              sx={{ color: "primary.main", fontSize: "1.1rem" }}
            >
              Show more
            </Button>
          </Grid>
        </Grid>
        <Grid container Item sx={{height: '9%', width: '98%', bgcolor: "white"}}>
        <Typography
            sx={{ mt: 1, mb: 1 , pl: 3}}
            fontSize="1rem"
            fontFamily="Consolas"
          >
           Best doctors in Hameed Latif Hospital
          </Typography>
        </Grid>
        <Grid sx={{width: '98%', height: '9%'}}>
        <DoctorlInfo />
        <DoctorlInfo />
        <DoctorlInfo />
        <DoctorlInfo />
        </Grid>
        <Grid sx={{width: '98%', height: '5%'}}>
        <Button
            variant="contained"
            sx={{width: '100%', mt: 1, color: "white", backgroundColor: "primary.main" }}
          >
            Load More Doctors
          </Button>
        </Grid>
        <Grid container item sx={{width: '98%', height: '9%', mt: 1,p: 3, bgcolor: "white"}}>
            <HospitalAbout />
        </Grid>
        <Grid container item  direction='column' sx={{width: '98%', height: '9%', mt: 1,p: 3, bgcolor: "white"}} justifyContent='center'>
          <FAQ />
        </Grid>
        <Grid container item direction='column' sx={{ bgcolor: 'white', width: '98%', height: '5%', p: 3, mt: '1%' }}>
            <SimilarHospitals />
        </Grid>
        <Grid container item direction='column' sx={{ bgcolor: 'white', width: '98%', height: '5%',mt: '1%', p: 3 }}>
            <SimilarHospitals />
        </Grid>
        <Grid container item direction='column' sx={{ bgcolor: 'white',width: '98%', height: '5%', mt: '1%', p: 3 }} justifyContent='center' alignItems='center'>
        <Help />
      </Grid>
      </Grid>
    </Box>
  );
};

export default Hospitals;
