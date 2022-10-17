import React from 'react'
import { Grid, Link, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
const DoctorInfoCard = () => {
  return (
    <Card sx={{ maxWidth: 350, mr: 3, mb: 1, width: '100%'}} alignItems = 'center'>
      <CardContent sx={{p: 0.5, border: '1.5px solid black', borderRadius: '7px'}} >
        <Grid container direction = 'column' sx={{ width: '99%', height: '100%', p: 0}} >
          <Grid container item sx={{width: '99%', height: '50%'}}>
          <VideocamOutlinedIcon />
          <Typography
              fontSize='1rem'
              color='primary.main'
              fontFamily='Consolas'
            >
              Video Consultation
            </Typography>
          </Grid>
          <Grid container direction = 'column' sx={{ width: '99%', height: '50%',pt: 3}} >
          <Grid container item sx={{width: '99%', height: '50%'}} justifyContent = 'space-between'>
          <Typography
              fontSize='1rem'
              color='success.main'
              fontWeight = 'bold'
              fontFamily='Consolas'
            >
             . Available Tomorrow
            </Typography>
            <Typography
              fontSize='1rem'
              fontFamily='Consolas'
            >
            Rs. 3,000
            </Typography>
          </Grid>
        </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default DoctorInfoCard
