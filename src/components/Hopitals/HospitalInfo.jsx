import React from 'react'
import { Grid, Link, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import TransitionsModal from '../Modal';
import styled from 'styled-components'

const Image = styled.img`
height: 130px;
width: 130px;
border-radius: 50%;
`
const HospitalInfo = () => {
  return (
    <Grid container item sx={{ width: '99%', height: '30%', bgcolor: 'white', pt: 1, mt: 1 }} justifyContent='space-between'>
      <Grid container item sx={{ width: '65%' }}>
        <Grid item sx={{ width: '30%', ml: 2 }} >
        <Image src="https://static.marham.pk/assets/hospitals/37/hameed-latif-hospital-27_80X80.jpg" />
        </Grid>
        <Grid container item direction='column' sx={{ width: '60%', ml: 3 }}>
          <Link underline="none" href= '#'>
            Hameed Latif Hospital Lahore
          </Link>
          <Grid container item sx={{width: "100%",mb: 2, mt: 1}}>
            <LocationOnOutlinedIcon sx={{color: 'gray', fontSize: '1rem', pt: 0.5}}/>
            <Typography
            fontSize = '1rem'
            fontFamily = 'Consolas'
            sx={{width: "90%"}}
            >
              14 New Abu Bakar Block, New Garden Town, Garden Town, Lahore
            </Typography>
          </Grid>
          <Grid container item justifyContent='space-between'>
            <Grid container item direction='column' sx={{ width: '40%' }}>
              <Grid container item  sx={{mb: 1, width: '100%'}}>
                <PeopleAltOutlinedIcon sx={{color: 'gray', fontSize: '1rem', pt: 0.5}}/>
                <Typography
                fontSize = '1rem'
                fontFamily = 'Consolas'
                >
                  Available Doctor(s)
                </Typography>
              </Grid>
              <Typography
               sx={{ml: 1}}
               fontSize = '1rem'
               fontWeight= 'bold'
               fontFamily = 'Consolas'
              >
                144
              </Typography>
            </Grid>
            <Grid item sx={{ width: '50%' }}>
              <Grid container item direction='column' sx={{ width: '70%' }}>
                <Grid container item>
                  <TimerOutlinedIcon sx={{color: 'gray', fontSize: '1rem', pt: 0.5}}/>
                  <Typography
                  fontSize = '1rem'
                  fontFamily = 'Consolas'
                  >
                    Opening hours
                  </Typography>
                </Grid>
                <Typography
                 sx={{ml: 1}}
                 fontSize = '1rem'
                 fontWeight='bold'
                 fontFamily = 'Consolas'
                 >
                  24 hours
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item direction='column' sx={{ width: '35%', pl: 15, pr: 2 }}>
        <TransitionsModal name={'Get Details'} />
        <Button variant="contained" sx={{ mt: 2 ,color: 'white', backgroundColor: 'danger.main'}}>Get Map direction</Button>
      </Grid>
    </Grid>
  )
}

export default HospitalInfo
