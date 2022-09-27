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
import DataFooter from '../components/DataFooter';
import FAQ from '../components/FAQ';

const OffersDetails = () => {
  return (
    <Box component="div" sx={{ height: '100%', width: '100%', bgcolor: '#eeeee4'}}>
      <Grid container direction='column' sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent='space-between' >
        <Grid container item sx={{ width: '100%', height: '9%', bgcolor: 'white', mb: '1%', mt: 1, p: 1 }} alignItems='center'>
          <Button variant="text" sx={{ color: 'black',  fontSize: '0.8rem' }}>Home</Button>
          <KeyboardArrowRightIcon />
          <Button variant="text" sx={{ color: 'black', fontSize: '0.8rem' }}>All Special offers</Button>
          <KeyboardArrowRightIcon />
          <Typography
           fontSize='0.8rem'>
            LASIK Eye Surgery (with Microkeratome)
          </Typography>
        </Grid>
        <Grid container item direction='column' sx={{ width: '95%', height: '11%', bgcolor: 'white', p: 3, mb: '1%' }}>
          <Typography
           sx={{ mt: 1, mb: 1 }}
           fontSize='1.3rem'
           fontWeight = 'bold'
           color='primary.main'
           
          >
            What is LASIK Eye Surgery (with Microkeratome)
          </Typography>
          <Typography>
            In this method, the epithelial membrane (top layer of the cornea) is prevented by making a flap with a keratome blade. Once the flap is made, it is lifted up and the excimer laser is applied to correct refractive errors accordingly. Then the flap is re-placed again with a special instrument to heal itself. (No bandage required)
          </Typography>
          <Button variant="contained" sx={{ ml: '45%', width: '20%', mt: 2, bgcolor: 'danger.main', p: 1, borderRadius: '10px' }}>Book Now</Button>
        </Grid>
        <Grid container item direction='column' sx={{ width: '95%', height: '20%', bgcolor: 'white' , mb: '1%',  p: 3}}>
          <Typography
           sx={{ mt: 1, mb: 1 }}
           fontSize='1.3rem'
           fontWeight = 'bold'
           color='primary.main'
          >
            Package Details
          </Typography>
          <Grid container item sx={{ width: '100%', height: '50%', mt: 1, mb: 1 }}>
            <OffersDetailsCard />
          </Grid>
        </Grid>
        <Grid item sx={{ width: '95%', height: '14%', bgcolor: 'white', mb: '1%' }}>
          <AllOffers />
        </Grid>
        <Grid container item direction='column' sx={{ width: '95%', height: '25%', bgcolor: 'white', p: 3, mb: '1%' }}>
          <FAQ />
        </Grid>
        <Grid container item direction='column' sx={{ width: '95%', height: '15%', bgcolor: 'white', p: 2 , mb: '1%'}} justifyContent='center' alignItems='center'>
          <Help />
        </Grid>
      </Grid>
    </Box>
  )
}

export default OffersDetails
