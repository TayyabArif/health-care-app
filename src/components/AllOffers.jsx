import React from 'react'
import { Grid, Link, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import TransitionsModal from '../components/Modal';

const AllOffers = () => {
  return (
    <Grid container item sx={{ width: '100%', height: '30', bgcolor: 'orange', pt: 1, mt: 1 }} justifyContent='space-between'>
    <Grid container item sx={{ width: '50%' }}>
      <Grid item sx={{ width: '30%', ml: 2 }}>
        Picture
      </Grid>
      <Grid container item direction='column' sx={{width: '60%', ml: 3 }}>
        <Link>
          PRK Eye Surgery in Lahore
        </Link>
        <Grid container item>
          <LocationOnOutlinedIcon />
          <Typography>
            Lahore
          </Typography>
        </Grid>
        <Grid container item>
          <EventAvailableOutlinedIcon />
          <Typography>
            Tue Fri
          </Typography>
        </Grid>
        <Grid container item justifyContent='space-between'>
          <Grid container item direction='column' sx={{width: '30%'}}>
            <Grid container item>
              <ThumbUpOutlinedIcon />
              <Typography>
                Fees
              </Typography>
            </Grid>
            <Typography>
              PKR. 50,000
            </Typography>
          </Grid>
          <Grid item sx={{width: '50%'}}>
          <Grid container item direction='column' sx={{width: '70%'}}>
            <Grid container item>
              <TimerOutlinedIcon />
              <Typography>
                Opening hours
              </Typography>
            </Grid>
            <Typography>
             09:00 AM - 09:00
            </Typography>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid container item direction='column' sx={{ width: '50%', pl: 50 , pr: 2}}>
      <TransitionsModal name={'Call Helpline'}/>
      <Button variant="contained" sx={{mt: 2}}>View Details</Button>
    </Grid>
  </Grid>
  )
}

export default AllOffers
