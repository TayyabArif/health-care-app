import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import DoctorlInfo from "../components/Hopitals/DoctorInfo/DoctorInfo";
import HospitalAbout from "../components/HopitalAbout";
import FAQ from "../components/FAQ";
import SimilarHospitals from "../components/Hopitals/SimilarHospitals";
import Help from "../components/Help";
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { Doctors_Disease_List, Doctors_Speciality_List } from "../redux/actions/Doctors";
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import VideoConsultationBox from "../components/VideoConsultationBox";

const Doctors = () => {
  const dispatch = useDispatch();
  const allDoctors = useSelector(state => state.Doctors.doctors)
  console.log('doctor dataaaaaaaaaaaaaaa', allDoctors)
  const loading = useSelector(state => state.Doctors.loading)
  console.log('doctors loaaaaaaaadingggg', loading)
  const {state} = useLocation();
  const { name, data, value} = state;
  useEffect(() => {
    if( name === 'Doctor by speciality')
    {
      dispatch(Doctors_Speciality_List(data))
    }
    if( name === 'Doctor by disease')
    {
      dispatch(Doctors_Disease_List(data))
    }
  }, [])
  return (
    <Grid container>
      {loading ?
        <Box sx={{ display: 'flex', height: '100vh', width: '100%', }} justifyContent='center' alignItems="center">
            <CircularProgress />
        </Box> :
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
              {value === 'Speciality' ?
              <Button
                variant="text"
                sx={{ color: "primary.light", fontSize: "0.7rem" }}
              >
                Doctors
              </Button> :
              <Button
              variant="text"
              sx={{ color: "primary.light", fontSize: "0.7rem" }}
              >
                Disease
              </Button>
              }
              <KeyboardArrowRightIcon sx={{ color: "primary.main" }} />
              <Button
                variant="text"
                sx={{ color: "primary.light", fontSize: "0.7rem" }}
              >
                {data}
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

              >
                Best {data} In Lahore
              </Typography>
              <Typography sx={{ mb: 1 }} fontSize="0.9rem" >
              {data}  Specialist , Mahir-e-imraz-e- {data}
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
              {allDoctors.length == 0 ?
              <Grid
              item
              container
              direction = 'column'
              sx={{ width: "100%", height: "50%", bgcolor: "white", pt:10, pb:10, mt:1, mb:1}}
              justifyContent='center'
              alignItems='center'
               >
                <Typography
                fontSize="1.5rem"
                fontWeight="bold">
                  No Doctor Found for this category
                </Typography>
                <ErrorOutlineIcon sx={{height: '60px', width: '60px'}}/>
              </Grid> :
              <div>
              {allDoctors.map((data, index) => {
                if(index ==2)
                {
                  return(
                  <div>
                  <DoctorlInfo data={data}/>
                  <VideoConsultationBox marginTop="5px" marginBottom = "2px"/>
                  </div>
                  )
                }
                else{
                  return(
                    <DoctorlInfo data={data}/>
                  )
                }
                })}
              </div>
              }
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
      }
    </Grid>
  );
};

export default Doctors;
