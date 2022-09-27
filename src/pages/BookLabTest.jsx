import React from 'react'
import { Box, Grid, Link, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import AllOffers from '../components/AllOffers';
import DropDown from '../components/DropDown';
import Help from '../components/Help';
import styled from 'styled-components'
import FAQ from '../components/FAQ';

const Image = styled.img`
    width: 100%;
    height: 100%;
    width: inherit;
`

const BookLabTest = () => {
  return (
    <Grid container item direction='column' sx={{ width: '100%', height: '100%', bgcolor: '#eeeee4' }} alignItems="center" justifyContent='space-between'>
      <Grid item sx={{ height: '10%', width: '100%' }}>
        <Image src="https://static.marham.pk/assets/labs/2/banner.jpg" onerror="this.onerror=null; this.src='https://static.marham.pk/assets/images/labs/banner.jpg'" alt="Chughtai Lab's Picture" />
      </Grid>
      <Grid container item sx={{ width: '90%', height: '4%', bgcolor: 'white', mb: '1%',  mt: 1, p: 1 }} alignItems='center'>
        <Button variant="text" sx={{ color: 'black', fontSize: '0.8rem' }}>Home</Button>
        <KeyboardArrowRightIcon />
        <Button variant="text" sx={{ color: 'black', fontSize: '0.8rem' }}>Labs in Pakistan</Button>
        <KeyboardArrowRightIcon />
        <Button variant="text" sx={{ color: 'black', fontSize: '0.8rem' }}>Labs in Lahore</Button>
        <KeyboardArrowRightIcon />
        <Typography
        fontSize = '0.8rem'>
          Chughtai Lab
        </Typography>
      </Grid>
      <Grid container item sx={{ bgcolor: 'white', width: '90%', height: '10%' }}>
        <AllOffers />
      </Grid>
      <Grid sx={{ bgcolor: 'yellow', height: '15%' }}>
        4
      </Grid>
      <Grid container item direction='column' sx={{ bgcolor: 'white', height: '15%',width: '90%',p: 3, mb: '1%' }}>
        <FAQ />
      </Grid>
      <Grid container item direction='column' sx={{ bgcolor: 'white',width: '90%', height: '10%', p: 3, mb: '1%' }}>
        <Typography
        fontSize='1.4rem'
        fontWeight = 'bold'
        color='primary.main'
        fontFamily = 'Consolas'
        sx={{mb: 2}}
        >
          About Chughtai Lab
        </Typography>
        <Typography>
          Chughtai Lab is one of the top and foremost pathology labs in Pakistan working for the past 35 years for the well-being of people. The founder of Chughtai Lab is Dr. A. S. Chughtai he started it with very limited resources but his passion to serve humanity brings him today as the CEO of the leading Laboratory nationwide. Chughtai Lab consists of three rooms when it was first established and today it is working in all the cities of Pakistan. There are more than 300 branches all over the country.
          Chughtai Lab has a core value to work with honesty, integrity, and responsibility. The mission of the Chughtai Lab is to work for the wellness of people by providing them quality services with ease.

          It is providing services in various domains including all lab tests, CT Scan, ECG, X-Ray, CBC, 25 Hydroxyvitamin D, Blood Glucose Random, HBsAg, Anti HCV, CBC, Cholesterol, Triglycerides, HDL Cholesterol, LDL Cholesterol, Non – HDL Cholesterol, Creatinine (Serum), PSA Total, Glucose, HbA1c, Microalbuminuria,  CRP (High Sensitivity), hemoglobin A1C, liver function test, kidney function test, urine function test, pregnancy test, Blood Test, Cholesterol Test, liver function test, kidney function test, Urine function test, Blood Sugar Test, Uric Acid, etc
        </Typography>
      </Grid>
      <Grid container item direction='column' sx={{ bgcolor: 'white',width: '90%', height: '5%', mb: '1%', p: 3 }} justifyContent='center' alignItems='center'>
        <Help />
      </Grid>
      <Grid container item direction='column' sx={{ bgcolor: 'white', width: '90%', height: '10%',mb: '1%', p: 3  }}>
        <Grid container item sx={{ width: '100%', height: '20%' }}>
        <Typography
        fontSize='1.4rem'
        fontWeight = 'bold'
        color='primary.main'
        fontFamily = 'Consolas'
        sx={{mb: 2}}
        >
          Other labs in Lahore
        </Typography>
        </Grid>
        <Grid container item sx={{ width: '100%', height: '79%', mt: '1%' }}>
          <Grid container item sx={{ width: '25%', height: '100%' }}>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore</Link>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore</Link>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore</Link>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore</Link>
          </Grid>
          <Grid container item sx={{ width: '25%', height: '100%' }}>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore</Link>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore Chughtai Lab in Lahore </Link>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore</Link>
          </Grid>
          <Grid container item sx={{ width: '25%', height: '100%' }}>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore Chughtai Lab in Lahore</Link>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore</Link>
          </Grid>
          <Grid container item sx={{ width: '25%', height: '100%' }}>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore</Link>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore</Link>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore</Link>
            <Link sx={{ mb: 1 }}>Chughtai Lab in Lahore</Link>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default BookLabTest
