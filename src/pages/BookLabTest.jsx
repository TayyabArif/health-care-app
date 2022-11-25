import React from 'react'
import { Box, Grid, Link, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import AllOffers from '../components/AllOffers';
import CircularProgress from '@mui/material/CircularProgress';
import DropDown from '../components/DropDown';
import Help from '../components/Help';
import styled from 'styled-components'
import FAQ from '../components/FAQ';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { cityLabTests, labTests } from '../redux/actions/LabTests';
import AddTest from '../components/AddTest';
import LabTest from '../components/LabTest';
const Image = styled.img`
    width: 100%;
    height: 100%;
    width: inherit;
`
const BookLabTest = ({ route, navigation }) => {
  const labTest = useSelector(state => state.lab_Tests.labTests)
  const loading = useSelector(state => state.lab_Tests.loading)
  const isCityLab = useSelector(state => state.lab_Tests.isCityLab)
  console.log('lab test incdcdvdvdvdvvvfv', labTest)
  const {state} = useLocation();
  const { name, data , lab} = state;
  console.log('dddfdfdfdfdfdfdfdfdfdfdfd', name, data, lab)
  let labData
  if(labTest){
     labData= labTest[0]
  }
  console.log('lab data issssssssss', labData)
  const dispatch = useDispatch();
  useEffect(() => {
    if(name === 'Lab city'){
      dispatch(cityLabTests(data))
    }
    else if(name === 'Lab name'){
      dispatch(labTests(data))
    }
  }, [])
  return (
    <Grid container>
      {
        (loading) ?
          <Box sx={{ display: 'flex', height: '100vh', width: '100%', }} justifyContent='center' alignItems="center">
              <CircularProgress />
          </Box>:
        <Grid container item direction='column' sx={{ width: '100%', height: '100%', bgcolor: '#eeeee4' }} alignItems="center" justifyContent='space-between'>
          <Grid item sx={{ height: '10%', width: '100%' }}>
            <Image src="https://static.marham.pk/assets/labs/2/banner.jpg" onerror="this.onerror=null; this.src='https://static.marham.pk/assets/images/labs/banner.jpg'" alt="Chughtai Lab's Picture" />
          </Grid>
          <Grid container item sx={{ width: '90%', height: '4%', bgcolor: 'white', mb: '1%',  mt: 1, p: 1 }} alignItems='center'>
            <Button variant="text" sx={{ color: 'black', fontSize: '0.8rem' }}>Home</Button>
            <KeyboardArrowRightIcon />
            <Button variant="text" sx={{ color: 'black', fontSize: '0.8rem' }}>Labs in Pakistan</Button>
            <KeyboardArrowRightIcon />
            <Button variant="text" sx={{ color: 'black', fontSize: '0.8rem' }}>{name === 'Lab city' ? lab : 'Labs in Lahore'}</Button>
            {name === 'Lab name' &&<KeyboardArrowRightIcon />}
            {name === 'Lab name' &&
            <Typography
            fontSize = '0.8rem'>
              {lab}
            </Typography>
            }
          </Grid>
          {(labData && !isCityLab)&&
          <Grid container item sx={{ bgcolor: 'white', width: '90%', height: '10%' }}>
          <LabTest data={labData}/>
          </Grid>
          }
          {isCityLab && labTest.map(data => {
            return (
              <Grid container item sx={{ bgcolor: 'white', width: '90%', height: '10%' }}>
              <LabTest data={data}/>
              </Grid>
            )
          })}
          <Grid sx={{bgcolor: 'white', height: '15%', width: '90%', mb: '1%',  mt: 1, p: 1 }}>
            <AddTest />
          </Grid>
          {isCityLab &&
          <Grid container item direction='column' sx={{ bgcolor: 'white', height: '15%',width: '90%',p: 3, mb: '1%' }}>
            <FAQ data={labTest[0].questions}/>
          </Grid>
          }
          {labData &&
          <Grid container item direction='column' sx={{ bgcolor: 'white',width: '90%', height: '10%', p: 3, mb: '1%' }}>
            <Typography
            fontSize='1.4rem'
            fontWeight = 'bold'
            color='primary.main'
            fontFamily = 'Consolas'
            sx={{mb: 2}}
            >
              About {labData.name}
            </Typography>
            <Typography>
              {labData.about}
            </Typography>
          </Grid>
          }
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
      }
    </Grid>
  )
}

export default BookLabTest
