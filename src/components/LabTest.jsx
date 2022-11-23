import React from 'react'
import { Grid, Link, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import styled from 'styled-components'

const Image = styled.img`
height: 110px;
width: 180px;
border-radius: 50%;
`
const LabTest = ({data}) => {
  const goTo = () => {
    document.getElementById('add-test').scrollIntoView();
  }
  console.log('my data in zxzxzxzxzx', data)
  return (
    <Grid container item sx={{ width: '99%', height: '30%', bgcolor: 'white', pt: 1, mt: 1 }} justifyContent='space-between'>
      <Grid container item sx={{ width: '70%' }}>
        <Grid item sx={{ width: '30%', ml: 2 }} >
        <Image src={data.icon} />
        </Grid>
        <Grid container item direction='column' sx={{ width: '60%', ml: 3 }}>
          <Link>
            {data.name}
          </Link>
          <Grid container item sx={{mb: 2, mt: 1}}>
            <LocationOnOutlinedIcon sx={{color: 'gray', fontSize: '1rem', pt: 0.5}}/>
            <Typography
            fontSize = '1rem'
            fontFamily = 'Consolas'
            >
              10 Jail Road, Adjacent to Ammar Medical Complex, Gulberg, Lahore
            </Typography>
          </Grid>
          <Grid container item  sx={{mb: 1}}>
            <EventAvailableOutlinedIcon sx={{color: 'gray', fontSize: '1rem', pt: 0.5}}/>
            <Typography
             fontSize = '1rem'
             fontFamily = 'Consolas'
             >
              Open Today
            </Typography>
          </Grid>
          <Grid container item justifyContent='space-between'>
            <Grid container item direction='column' sx={{ width: '30%', py: '30px' }}>
              <Grid container item  sx={{mb: 1}}>
                <CorporateFareIcon sx={{color: 'gray', fontSize: '1rem', pt: 0.5}}/>
                <Typography
                fontWeight='bold'
                fontSize = '1rem'
                fontFamily = 'Consolas'
                sx={{ml: '8px'}}
                >
                  Branches
                </Typography>
              </Grid>
              <Typography
               sx={{ml: 4}}
               fontSize = '1rem'
               fontFamily = 'Consolas'
              >
                  {data.branches.length}
              </Typography>
            </Grid>
            <Grid item sx={{ width: '30%', py:'30px' }}>
              <Grid container item direction='column' sx={{ width: '100%' }}>
                <Grid container item sx={{mb: 1}}>
                  <CloudQueueIcon sx={{color: 'gray', fontSize: '1rem', pt: 0.5}}/>
                  <Typography
                  fontWeight='bold'
                  fontSize = '1rem'
                  fontFamily = 'Consolas'
                  sx={{ml: '8px'}}
                  >
                    Opening hours
                  </Typography>
                </Grid>
                <Typography
                 sx={{ml: 3}}
                 fontSize = '1rem'
                 fontFamily = 'Consolas'
                 >
                  {data.timings}
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ width: '30%', py:'30px' }}>
              <Grid container item direction='column' sx={{ width: '100%' }}>
                <Grid container item sx={{mb: 1}}>
                  <ModeEditOutlineOutlinedIcon sx={{color: 'gray', fontSize: '1rem', pt: 0.5}}/>
                  <Typography
                  fontWeight='bold'
                  fontSize = '1rem'
                  fontFamily = 'Consolas'
                  sx={{ml: '8px'}}
                  >
                    Reviews
                  </Typography>
                </Grid>
                <Typography
                 sx={{ml: 3}}
                 fontSize = '1rem'
                 fontFamily = 'Consolas'
                 >
                  100+
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item direction='column' sx={{ width: '30%', pl: 15, pr: 2 }}>
      <Button variant="outlined" onClick={() => goTo()} sx={{ mt: 2 ,color: 'danger.main', backgroundColor: 'white', borderColor: 'danger.main'}}>Get Discount Code</Button>
      <Button variant="contained" onClick={() => goTo()} sx={{ mt: 2 ,color: 'white', backgroundColor: 'danger.main'}}>Book Lab Test(s)</Button>
      </Grid>
    </Grid>
  )
}

export default LabTest
