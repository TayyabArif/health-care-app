import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import DoctorlInfo from "../components/Hopitals/DoctorInfo/DoctorInfo";
import HospitalAbout from "../components/HopitalAbout";
import FAQ from "../components/FAQ";
import SimilarHospitals from "../components/Hopitals/SimilarHospitals";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Divider from '@mui/material/Divider';
import Help from "../components/Help";
import { borderRadius } from "@mui/system";
const Doctors = () => {
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
          sx={{ width: "98%", height: "9%", bgcolor: "white", m: "1%", mb: 0 }}
          alignItems="center"
        >
          <Button
            variant="text"
            sx={{ color: "primary.light", fontSize: "0.7rem" }}
          >
            Home
          </Button>
          <KeyboardArrowRightIcon sx={{ color: "primary.main" }} />
          <Button
            variant="text"
            sx={{ color: "primary.light", fontSize: "0.7rem" }}
          >
            Doctors
          </Button>
          <KeyboardArrowRightIcon sx={{ color: "primary.main" }} />
          <Button
            variant="text"
            sx={{ color: "primary.light", fontSize: "0.7rem" }}
          >
            Psychiatrist
          </Button>
          <KeyboardArrowRightIcon sx={{ color: "primary.main" }} />
          <Button
            variant="text"
            sx={{ color: "primary.light", fontSize: "0.7rem" }}
          >
            Lahore
          </Button>
        </Grid>
        <Grid
          container
          item
          direction="column"
          sx={{
            width: "98%",
            height: "9%",
            bgcolor: "white",
            mb: 1,
            mt: 0,
            pl: 2,
          }}
        >
          <Typography
            sx={{ mb: 1 }}
            fontSize="1rem"
            fontWeight="bold"
            color="primary.main"
            fontFamily="Consolas"
          >
            Best Psychiatrists In Lahore
          </Typography>
          <Typography sx={{ mb: 1 }} fontSize="0.9rem" fontFamily="Consolas">
            Mental Health Specialist , Mahir-e-imraz-e- nafsiyat
          </Typography>
        </Grid>
        <Grid
          container
          item
          sx={{
            width: "98%",
            height: "19%",
            bgcolor: "white",
            overflow: "auto",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "14%",
              mt: 0.5,
              color: "primary.main",
              backgroundColor: "#89c4b0",
              fontSize: "0.7rem",
            }}
          >
            All
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "12%",
              mt: 0.5,
              color: "primary.main",
              backgroundColor: "#e0efeb",
              fontSize: "0.7rem",
              borderRadius: "0px",
              borderRight: "0.5px solid lightgray",
            }}
          >
            Fee Range
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "12%",
              mt: 0.5,
              color: "primary.main",
              backgroundColor: "#e0efeb",
              fontSize: "0.7rem",
              borderRadius: "0px",
              borderRight: "0.5px solid lightgray",
            }}
          >
            Time Slot
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "15%",
              mt: 0.5,
              color: "primary.main",
              backgroundColor: "#e0efeb",
              fontSize: "0.7rem",
              borderRadius: "0px",
              borderRight: "0.5px solid lightgray",
            }}
          >
            Doctors near me
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "15%",
              mt: 0.5,
              color: "primary.main",
              backgroundColor: "#e0efeb",
              fontSize: "0.7rem",
              borderRadius: "0px",
              borderRight: "0.5px solid lightgray",
            }}
          >
            Most Experienced
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "17%",
              mt: 0.5,
              color: "primary.main",
              backgroundColor: "#e0efeb",
              fontSize: "0.7rem",
              borderRadius: "0px",
              borderRight: "0.5px solid lightgray",
            }}
          >
            Video call under Rs.1000
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "15%",
              mt: 0.5,
              color: "primary.main",
              backgroundColor: "#e0efeb",
              fontSize: "0.7rem",
              borderRadius: "0px",
              borderRight: "0.5px solid lightgray",
            }}
          >
            Female Doctors
          </Button>
          {/* <Button
            variant="contained"
            sx={{width: '15%', mt: 0.5, color: "primary.main", backgroundColor: "#e0efeb", fontSize: '0.7rem', borderRadius: '0px', borderRight: '0.5px solid lightgray' }}
          >
            Male Doctors
          </Button> */}
        </Grid>
        <Grid sx={{ width: "98%", height: "9%" }}>
          <DoctorlInfo />
          <DoctorlInfo />
          <DoctorlInfo />
          <Grid
            item
            container
            sx={{ width: "100%", height: "20%", bgcolor: "#014e79", pt:1, pb:1, mt:1, mb:1}}
          >
            <Grid item container sx={{ width: "10%", height: "90%" }}>
              <VideocamOutlinedIcon
                sx={{ height: "60px", width: "100px", color: "white" }}
              />
            </Grid>
            <Grid
              container
              item
              direction="column"
              sx={{ width: "60%", height: "100%" }}
            >
              <Typography
                sx={{ mb: 1 }}
                fontSize="1.5rem"
                fontWeight="bold"
                color="white"
                fontFamily="Consolas"
              >
                Book Video Consultation
              </Typography>
              <Grid container item sx={{width: '100%'}}>
                <Grid container item sx={{width: '25%', height: '100%'}}>
                  <CheckCircleIcon sx={{width: '19%', color:'success.main'}}/>
                  <Typography
                    sx={{ mb: 1,width: '70%',pr:1}}
                    fontSize="1rem"
                    fontWeight="bold"
                    color="white"
                    fontFamily="Consolas"
                  >
                    Stay Home
                  </Typography>
                  <Divider orientation="vertical" sx={{bgcolor: 'white'}}/>
                </Grid>
                <Grid container item  sx={{width: '25%', height: '100%'}}>
                  <CheckCircleIcon sx={{width: '19%', color:'success.main'}} />
                  <Typography
                    sx={{ mb: 1, width: '70%', pr:1}}
                    fontSize="1rem"
                    fontWeight="bold"
                    color="white"
                    fontFamily="Consolas"
                  >
                    No Waiting in lines
                  </Typography>
                  <Divider orientation="vertical" sx={{bgcolor: 'white'}}/>
                </Grid>
                <Grid container item  sx={{width: '25%', height: '100%'}}>
                  <CheckCircleIcon sx={{width: '19%', color:'success.main'}}/>
                  <Typography
                    sx={{ mb: 1, width: '70%',pr:1 }}
                    fontSize="1rem"
                    fontWeight="bold"
                    color="white"
                    fontFamily="Consolas"
                  >
                    Audio/Video Call
                  </Typography>
                  <Divider orientation="vertical" sx={{bgcolor: 'white'}}/>
                </Grid>
                <Grid container item  sx={{width: '25%', height: '100%'}}>
                  <CheckCircleIcon sx={{width: '19%', color:'success.main'}} />
                  <Typography
                    sx={{ mb: 1, width: '70%',pr: 1}}
                    fontSize="1rem"
                    fontWeight="bold"
                    color="white"
                    fontFamily="Consolas"
                  >
                    PMC Verified Doctors
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid sx={{ width: "30%", height: "100%" }}>
            <Button
            variant="contained"
            sx={{ mt:'2.125rem', color:"danger.main", backgroundColor:"white", pl:'3.75rem', pr:'3.75rem', borderRadius:'8px'}}
          >
            View Online Dermatologists
          </Button>
              </Grid>
          </Grid>
          <DoctorlInfo />
          <DoctorlInfo />
          <DoctorlInfo />
          <DoctorlInfo />
        </Grid>
        <Grid sx={{ width: "98%", height: "5%" }}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              mt: 1,
              color: "white",
              backgroundColor: "primary.main",
            }}
          >
            Load More Doctors
          </Button>
        </Grid>
        <Grid
          container
          item
          sx={{ width: "98%", height: "9%", mt: 1, p: 3, bgcolor: "white" }}
        >
          <HospitalAbout />
        </Grid>
        <Grid
          container
          item
          direction="column"
          sx={{ width: "98%", height: "9%", mt: 1, p: 3, bgcolor: "white" }}
          justifyContent="center"
        >
          <FAQ />
        </Grid>
        <Grid
          container
          item
          direction="column"
          sx={{ bgcolor: "white", width: "98%", height: "5%", p: 3, mt: "1%" }}
        >
          <SimilarHospitals />
        </Grid>
        <Grid
          container
          item
          direction="column"
          sx={{ bgcolor: "white", width: "98%", height: "5%", mt: "1%", p: 3 }}
        >
          <SimilarHospitals />
        </Grid>
        <Grid
          container
          item
          direction="column"
          sx={{ bgcolor: "white", width: "98%", height: "5%", mt: "1%", p: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          <Help />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Doctors;