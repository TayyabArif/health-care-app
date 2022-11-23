
import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Divider from '@mui/material/Divider';

const VideoConsultationBox = ({marginTop, marginBottom}) => {
  return (
    <Grid
    item
    container
    sx={{ width: "100%", height: "20%", bgcolor: "#014e79", pt:1, pb:1, mt: marginTop, mb: marginBottom}}
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
      sx={{ width: "70%", height: "100%" }}
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
            fontSize="0.9rem"
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
            fontSize="0.9rem"
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
            fontSize="0.9rem"
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
            fontSize="0.9rem"
            fontWeight="bold"
            color="white"
            fontFamily="Consolas"
          >
            PMC Verified Doctors
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid sx={{ width: "20%", height: "100%" }}>
      <Button
      variant="contained"
      sx={{ mt:'2.125rem', color:"danger.main", backgroundColor:"white", pl:'2rem', pr:'2rem', borderRadius:'8px'}}
      >
      View Online Doctors
      </Button>
    </Grid>
  </Grid>
  )
}

export default VideoConsultationBox
