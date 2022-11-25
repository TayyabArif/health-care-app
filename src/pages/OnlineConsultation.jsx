import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SpecialistCard from '../components/SpecialistCard';
import FAQ from '../components/FAQ';
import AllSpecialistCard from '../components/AllSpecialistCard';
import ConsultationDetailCard from '../components/ConsultationDetailCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { topSearched, allSpecialities } from '../redux/actions/online-consultation';
import CircularProgress from '@mui/material/CircularProgress';


const OnlineConsultation = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.top_Searched_Doctors.loading)
    const topSpecialistDoctor = useSelector(state => state.top_Searched_Doctors.topSearchedDoctor)
    const allSpecialists = useSelector(state => state.all_Specialists.allSpecialists)
    console.log('top searched data issssssssss', allSpecialists)
    useEffect(() => {
          dispatch(topSearched())
          dispatch(allSpecialities())
      }, [])
    return (
        <Grid container>
          {loading ?
        <Box sx={{ display: 'flex', height: '100vh', width: '100%', }} justifyContent='center' alignItems="center">
            <CircularProgress />
        </Box> :
          <Box component="div" sx={{ height: '100%', width: '100%', bgcolor: '#eeeee4' }}>
              <Grid container direction='column' sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent='space-between' >
                  <Grid container item sx={{ width: '100%', height: '10%', bgcolor: 'white', mb: '0.5%', mt: 1, p: 1 }} alignItems='center'>
                      <Button variant="text" sx={{ color: 'black', fontSize: '0.8rem' }}>Home</Button>
                      <KeyboardArrowRightIcon sx={{ color: 'primary.main' }} />
                      <Typography
                          fontSize='0.9rem'
                      >
                          Online Consultation
                      </Typography>
                  </Grid>
                  <Grid container item direction='column' sx={{ width: '100%', height: '15%', bgcolor: '#014e78', pt: 5, pb: 5, mb: '1%' }} alignItems="center" justifyContent='center'>
                      <Typography
                          fontSize='2rem'
                          fontWeight='bold'
                          color='#f8f8ff'
                          fontFamily='Consolas'
                      >
                          Consult A Specialist Online
                      </Typography>
                      <Typography
                          color='#f8f8ff'
                          sx={{ mt: '5px', mb: '20px' }}
                      >
                          Online Prescription | Send Reports

                      </Typography>
                      <FormControl sx={{ m: 1, minWidth: '700px', bgcolor: 'white', borderRadius: '10px' }}>
                          {/* <InputLabel htmlFor="outlined-adornment-amount">Select your City</InputLabel> */}
                          <OutlinedInput
                              id="outlined-adornment-amount"
                              value=''
                              startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                              label="Select your City"
                          />
                      </FormControl>
                  </Grid>
                  <Grid container item sx={{ width: '99%', height: '15%', bgcolor: 'white', mb: '1%', pl: 10, pt: 2 }} alignItems='center'>
                      <ConsultationDetailCard />
                      <ConsultationDetailCard />
                      <ConsultationDetailCard />
                  </Grid>
                  <Grid container item sx={{ width: '98%', height: '10%', bgcolor: 'white', mb: '1%', p: 2 }}>
                      <Grid container item >
                          <Typography
                              fontSize='1.2rem'
                              fontWeight='bold'
                              color='primary.main'
                              fontFamily='Consolas'
                              sx={{mb: 2}}
                          >
                              Top Viewed Specialities
                          </Typography>
                      </Grid>
                      <Grid container item sx={{ width: '100%', height: '25%', mt: 1, mb: 1, pl: 1 }} justifyContent='center'>
                        {topSpecialistDoctor.map((data,index) => {
                          if(index == 0){
                            return(
                              <SpecialistCard name={data.name} number={data.noOfDoctors} img = {'https://static.marham.pk/assets/images/kiosk/70x70/urologist.jpg'}/>
                            )
                          }if(index == 1){
                            return(
                              <SpecialistCard name={data.name} number={data.noOfDoctors} img = {'https://static.marham.pk/assets/images/kiosk/70x70/dermatologist.jpg'}/>
                            )
                          }
                          if(index == 2){
                            return(
                              <SpecialistCard name={data.name} number={data.noOfDoctors} img = {'https://static.marham.pk/assets/images/kiosk/70x70/general-physician.jpg'}/>
                            )
                          }
                          if(index == 3){
                            return(
                              <SpecialistCard name={data.name} number={data.noOfDoctors} img = {'https://static.marham.pk/assets/images/kiosk/70x70/homeopath.jpg'}/>
                            )
                          }
                          if(index == 4){
                            return(
                              <SpecialistCard name={data.name} number={data.noOfDoctors} img = {'https://static.marham.pk/assets/images/kiosk/70x70/ent-specialist.jpg'}/>
                            )
                          }
                        })}
                      </Grid>
                  </Grid>
                  <Grid container item sx={{ width: '99%', height: '35%', bgcolor: 'white', mb: '1%', p: 2 }} >
                      <Grid container item sx={{ width: '99%', height: '10%' }}>
                          <Typography
                              fontSize='1.2rem'
                              fontWeight='bold'
                              color='primary.main'
                              fontFamily='Consolas'
                          >
                              All Specialities
                          </Typography>
                      </Grid>
                      <Grid container item sx={{ width: '100%', height: '89%', mt: 1, mb: 1 }}>
                        {allSpecialists &&
                          <Grid container item sx={{ width: '100%', height: '100%' }}>
                            {allSpecialists?.map(speciality => {
                                return (
                                    <AllSpecialistCard speciality={speciality}/>
                                )
                            })}
                          </Grid>
                        }
                      </Grid>
                  </Grid>
                  <Grid container item direction='column' sx={{ width: '95%', height: '15%', bgcolor: 'white', p: 2, mb: '1%' }} justifyContent='center' >
                      <FAQ />
                  </Grid>
              </Grid>
          </Box>
        }
        </Grid>
    )
}

export default OnlineConsultation
