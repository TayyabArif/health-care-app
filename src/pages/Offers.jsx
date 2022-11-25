import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import DataCard from '../components/Card';
import AllOffers from '../components/AllOffers';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

const Offers = () => {
  return (
    <Box component="div" sx={{ height: '100%', width: '100%' , bgcolor: '#eeeee4'}}>
      <Grid container direction='column' sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent='space-between' >
        <Grid container item direction='column' sx={{ width: '100%', height: '24%', bgcolor: '#014e78', pt: 5, pb: 5, mb: '1%' }} alignItems="center" justifyContent='center'>
          <Typography
          fontSize='2rem'
          fontWeight = 'bold'
          color='#f8f8ff'
          fontFamily = 'Consolas'
          >
            Marham Special offers
          </Typography>
          <Typography
           color='#f8f8ff'
           sx={{mt: '5px', mb: '20px'}}
          >
            Select your City
          </Typography>
          {/* <TextField
            id="outlined-name"
            label={<SearchIcon />}
            value="City"
            placeholder="Enter your city"
            type="text"
            minRows={3}
          /> */}
          <FormControl  sx={{ m: 1 , maxWidth: '700px', bgcolor: 'white', borderRadius: '10px'}}>
          <InputLabel htmlFor="outlined-adornment-amount">Select your City</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value=''
            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
            label="Select your City"
          />
        </FormControl>
        </Grid>
        <Grid container item sx={{ width: '99%', height: '9%', bgcolor: '#f8f8ff', mb: '1%' }} alignItems='center'>
          <Button variant="text" sx={{ color: 'black',  fontSize: '0.8rem' }}>Home</Button>
          <KeyboardArrowRightIcon sx={{color: 'primary.main'}}/>
          <Typography
          fontSize='0.9rem'
          >
            Special offers
          </Typography>
        </Grid>
        <Grid container item direction='column' sx={{ width: '99%', height: '49%', bgcolor: '#f8f8ff', mb: '1%', p: 2 }}>
          <Typography
          fontSize='1.5rem'
          fontWeight = 'bold'
          color='primary.main'
          fontFamily = 'Consolas'
          >
            Most view Details
          </Typography>
          <Grid container item sx={{ width: '100%', height: '25%', mt: 1, mb: 1, bgcolor: 'white'}}>
          <DataCard title='Dark circles and Treatment' src='https://static.marham.pk/assets/images/deal/dark-circle.png'/>
              <DataCard title = 'Hydra Facial Treatment' src='https://static.marham.pk/assets/images/deal/hydra-facial.jpg'/>
              <DataCard title = 'Pigmentation Facial Treatment' src='https://static.marham.pk/assets/images/deal/pigmentation.jpg'/>
              <DataCard title = 'Acne Scars Treatment' src = 'https://static.marham.pk/assets/images/deal/acne.png'/>
              <DataCard title = 'PRP Hair Treatment' src = 'https://static.marham.pk/assets/images/deal/prp.jpg'/>
          </Grid>
        </Grid>
        <Grid container item sx={{ width: '99%', height: '9%', bgcolor: '#f8f8ff', mb: '1%' }} alignItems='center'>
          <Typography
          sx={{ mt: 1, mb: 1 }}
          fontSize='1.2rem'
          fontWeight = 'bold'
          color='primary.main'
          fontFamily = 'Consolas'
          >
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
