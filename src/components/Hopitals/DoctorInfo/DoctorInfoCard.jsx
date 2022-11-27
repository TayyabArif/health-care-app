import React from 'react'
import { Grid, Link, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const DoctorInfoCard = ({title, available, timing, price, id}) => {
  return (
    <Card sx={{ maxWidth: 350, mr: 3, mb: 1, width: '100%', height:'100%'}} alignItems = 'center'>
      <CardContent sx={{p: 0.5, border: '1.5px solid black', borderRadius: '7px'}} >
        <Grid container direction = 'column' sx={{ width: '99%', height: '100%', p: 0}} >
          <Grid container item sx={{width: '99%', height: '30%'}}>
           {id === 1 &&
          <VideocamOutlinedIcon />}
          <Typography
              fontSize='1rem'
              color='primary.main'
              fontFamily='Consolas'
              sx={{ml: '10px'}}
            >
              {title}
            </Typography>
          </Grid>
          <Grid container item sx={{width: '99%', height: '30%', mt: '10px'}} alignItems='center'>
          <AccessTimeIcon />
          <Typography
              fontSize='1rem'
              color='primary.main'
              fontFamily='Consolas'
              sx={{ml: '10px'}}
            >
              {timing}
            </Typography>
          </Grid>
          <Grid container direction = 'column' sx={{ width: '99%', height: '30%',pt: 3}} >
          <Grid container item sx={{width: '99%', height: '50%'}} justifyContent = 'space-between' alignItems='center'>
          <Typography
              fontSize='0.8rem'
              color='success.main'
              fontWeight = 'bold'
              fontFamily='Consolas'
            >
             . Available {available}
            </Typography>
            <Typography
              fontSize='1rem'
              fontFamily='Consolas'
            >
            Rs. {price}
            </Typography>
          </Grid>
        </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default DoctorInfoCard
