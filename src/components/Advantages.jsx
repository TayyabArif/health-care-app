import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import CardTravelRoundedIcon from '@mui/icons-material/CardTravelRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import PhonelinkLockRoundedIcon from '@mui/icons-material/PhonelinkLockRounded';
const Advantages = ({data}) => {
    let logo
    if (data.id == 1) logo= <VerifiedRoundedIcon sx={{color: 'white', fontSize: '3rem'}}/>
    else if (data.id == 2) logo= <CardTravelRoundedIcon sx={{color: 'white', fontSize: '3rem'}}/>
    else if (data.id == 3) logo= <SupportAgentRoundedIcon sx={{color: 'white', fontSize: '3rem'}}/>
    else if (data.id == 4) logo= <PhonelinkLockRoundedIcon sx={{color: 'white', fontSize: '3rem'}}/>
  return (
        <Grid container sx={{height: '100%', width: '25%'}} alignItems='center'>
            <Grid item sx={{height: '90%', width: '30%', pl: '9%'}} > 
                {logo}
            </Grid>
            <Grid container item direction='column' sx={{height: '90%', width: '70%'}}>
                <Typography
                 variant= 'h6'
                 color= '#f8f8ff'
                 fontSize= '1.2rem'
                 fontWeight='bold'

                >
                    {data.title}
                </Typography>
                <Typography
                color='#f8f8ff'
                variant='p'
                fontSize='0.9rem'
                >
                    {data.desc}
                </Typography>
            </Grid>
        </Grid>
  )
}

export default Advantages
