import React from 'react'
import DropDown from '../components/DropDown';
import { Box, Grid, Link, TextField, Typography } from '@mui/material'
import TransitionsModal from '../components/Modal';

const FAQ = () => {
  return (
    <div>
   <Grid container item sx={{ height: '30%' }} justifyContent='space-between' alignItems='center'>
          <Grid container item direction='column' sx={{ height: '100%', width: '70%' }}>
            <Typography
             fontSize='1.2rem'
             fontWeight = 'bold'
             color='primary.main'
             fontFamily = 'Consolas'
             >
              Frequently Asked Questions
            </Typography>
            <Typography
            fontSize='1.2rem'
            fontWeight = 'bold'
            color='primary.light'
            fontFamily = 'Consolas'
            >
              10 Million+ People Have Used MARHAM!
            </Typography>
          </Grid>
          <Grid container item sx={{ height: '100%', width: '30%', pl: '15%' }}>
            <TransitionsModal name={'Call Helpline'} />
          </Grid>
        </Grid>
        <Grid container item direction='column' sx={{ height: '70%' }} >
          <DropDown />
          <DropDown />
          <DropDown />
        </Grid>
    </div>
  )
}

export default FAQ
