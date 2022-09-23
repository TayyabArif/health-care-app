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
    <Grid container item sx={{ width: '99%', height: '30%', bgcolor: '#f8f8ff', pt: 1, mt: 1 }} justifyContent='space-between'>
      <Grid container item sx={{ width: '50%' }}>
        <Grid item sx={{ width: '30%', ml: 2 }}>
          Picture
        </Grid>
        <Grid container item direction='column' sx={{ width: '60%', ml: 3 }}>
          <Link>
            PRK Eye Surgery in Lahore
          </Link>
          <Grid container item sx={{mb: 2, mt: 1}}>
            <LocationOnOutlinedIcon sx={{color: 'gray', fontSize: '1rem', pt: 0.5}}/>
            <Typography
            fontSize = '1rem'
            fontFamily = 'Consolas'
            >
              Lahore
            </Typography>
          </Grid>
          <Grid container item  sx={{mb: 1}}>
            <EventAvailableOutlinedIcon sx={{color: 'gray', fontSize: '1rem', pt: 0.5}}/>
            <Typography
             fontSize = '1rem'
             fontFamily = 'Consolas'
             >
              Tue Fri
            </Typography>
          </Grid>
          <Grid container item justifyContent='space-between'>
            <Grid container item direction='column' sx={{ width: '30%' }}>
              <Grid container item  sx={{mb: 1}}>
                <ThumbUpOutlinedIcon sx={{color: 'gray', fontSize: '1rem', pt: 0.5}}/>
                <Typography
                fontWeight='bold'
                fontSize = '1rem'
                fontFamily = 'Consolas'
                >
                  Fees
                </Typography>
              </Grid>
              <Typography
               sx={{ml: 1}}
               fontSize = '1rem'
               fontFamily = 'Consolas'
              >
                PKR. 50,000
              </Typography>
            </Grid>
            <Grid item sx={{ width: '50%' }}>
              <Grid container item direction='column' sx={{ width: '70%' }}>
                <Grid container item>
                  <TimerOutlinedIcon sx={{color: 'gray', fontSize: '1rem', pt: 0.5}}/>
                  <Typography
                  fontWeight='bold'
                  fontSize = '1rem'
                  fontFamily = 'Consolas'
                  >
                    Opening hours
                  </Typography>
                </Grid>
                <Typography
                 sx={{ml: 1}}
                 fontSize = '1rem'
                 fontFamily = 'Consolas'
                 >
                  09:00 AM - 09:00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item direction='column' sx={{ width: '50%', pl: 50, pr: 2 }}>
        <TransitionsModal name={'Call Helpline'} />
        <Button variant="contained" sx={{ mt: 2 }}>View Details</Button>
      </Grid>
    </Grid>
  )
}

export default AllOffers
