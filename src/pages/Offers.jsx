import React from 'react'
import { Box, Grid, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import DataCard from '../components/Card';
import AllOffers from '../components/AllOffers';
const Offers = () => {
  return (
    <Box component="div" sx={{ height: '100%', width: '100%' }}>
      <Grid container direction='column' sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent='space-between' >
        <Grid container item direction='column' sx={{ width: '100%', height: '25', bgcolor: 'blue', pt: 5, pb: 5 }} alignItems="center" ustifyContent='center'>
          <Typography>
            Marham Special offers
          </Typography>
          <Typography>
            Select your City
          </Typography>
          <TextField
            id="outlined-name"
            label={<SearchIcon />}
            value="City"
            placeholder="Enter your city"
            type="text"
          />
        </Grid>
        <Grid container item sx={{ width: '100%', height: '10', bgcolor: 'pink' }} alignItems='center'>
          <Button variant="text" sx={{ color: 'black' }}>Home</Button>
          <KeyboardArrowRightIcon />
          <Typography>
            Special offers
          </Typography>
        </Grid>
        <Grid container item direction='column' sx={{ width: '100%', height: '25', bgcolor: 'yellow' }}>
          <Typography>
            Most view Details
          </Typography>
          <Grid container item sx={{ width: '100%', height: '50', mt: 1, mb: 1 }}>
            <DataCard />
            <DataCard />
            <DataCard />
            <DataCard />
            <DataCard />
            <DataCard />
          </Grid>
        </Grid>
        <Grid container item sx={{ width: '100%', height: '10', bgcolor: 'green' }} alignItems='center'>
          <Typography sx={{ mt: 1, mb: 2 }}>
            All Special offers
          </Typography>
        </Grid>
        <AllOffers />
        <AllOffers />
        <AllOffers />
        <AllOffers />
        <AllOffers />
        <AllOffers />
      </Grid>
    </Box>
  )
}

export default Offers
