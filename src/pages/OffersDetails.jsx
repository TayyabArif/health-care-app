import React from 'react'
import { Box, Grid, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import OffersDetailsCard from '../components/OffersDetailsCard';
import AllOffers from '../components/AllOffers';
import TransitionsModal from '../components/Modal';
import DropDown from '../components/DropDown';
import Help from '../components/Help';

const OffersDetails = () => {
  return (
    <Box component="div" sx={{ height: '100%', width: '100%' }}>
      <Grid container direction='column' sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent='space-between' >
        <Grid container item sx={{ width: '100%', height: '9%', bgcolor: 'blue', mb: '1%' }} alignItems='center'>
          <Button variant="text" sx={{ color: 'black' }}>Home</Button>
          <KeyboardArrowRightIcon />
          <Button variant="text" sx={{ color: 'black' }}>All Special offers</Button>
          <KeyboardArrowRightIcon />
          <Typography>
            LASIK Eye Surgery (with Microkeratome)
          </Typography>
        </Grid>
        <Grid container item direction='column' sx={{ width: '95%', height: '13%', bgcolor: 'orange', p: 2, mb: '1%' }}>
          <Typography>
            What is LASIK Eye Surgery (with Microkeratome)
          </Typography>
          <Typography>
            In this method, the epithelial membrane (top layer of the cornea) is prevented by making a flap with a keratome blade. Once the flap is made, it is lifted up and the excimer laser is applied to correct refractive errors accordingly. Then the flap is re-placed again with a special instrument to heal itself. (No bandage required)
          </Typography>
          <Button variant="contained" sx={{ ml: '45%', width: '15%' }}>Book Now</Button>
        </Grid>
        <Grid container item direction='column' sx={{ width: '95%', height: '24%', bgcolor: 'green' , mb: '1%'}}>
          <Typography>
            Package Details
          </Typography>
          <Grid container item sx={{ width: '100%', height: '50%', mt: 1, mb: 1 }}>
            <OffersDetailsCard />
          </Grid>
        </Grid>
        <Grid item sx={{ width: '95%', height: '14%', bgcolor: 'yellow', mb: '1%' }}>
          <AllOffers />
        </Grid>
        <Grid container item direction='column' sx={{ width: '95%', height: '24%', bgcolor: 'pink', p: 2, mb: '1%' }}>
          <Grid container item sx={{ height: '30%' }} justifyContent='space-between' alignItems='center'>
            <Grid container item direction='column' sx={{ height: '100%', width: '70%' }}>
              <Typography>
                Frequently Asked Questions
              </Typography>
              <Typography>
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
        </Grid>
        <Grid container item direction='column' sx={{ width: '95%', height: '9%', bgcolor: 'cyan', p: 2 , mb: '1%'}} justifyContent='center' alignItems='center'>
          <Help />
        </Grid>
      </Grid>
    </Box>
  )
}

export default OffersDetails
