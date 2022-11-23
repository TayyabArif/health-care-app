import React from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Help from '../components/Help';
import { useNavigate } from 'react-router-dom';
import VideoConsultationBox from '../components/VideoConsultationBox';
import QuestionCard from '../components/QuestionCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../redux/actions/Questions';
import CircularProgress from '@mui/material/CircularProgress';

const Questions = () => {
  const allQuestions = useSelector(state => state.all_Questions.allQuestions)
  const loading = useSelector(state => state.all_Questions.loading)
  console.log('vvvvvvvfffffffvvvvvvv', allQuestions)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getQuestions())
  }, [])
  const navigate = useNavigate()
  return (
    <Grid container>
      {loading ?
        <Box sx={{ display: 'flex', height: '100vh', width: '100%', }} justifyContent='center' alignItems="center">
            <CircularProgress />
        </Box> :
      <Box component="div" sx={{ height: '100%', width: '100%', bgcolor: '#eeeee4'}}>
        <Grid container direction='column' sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent='space-between' >
          <Grid container item direction='column' sx={{ width: '95%', height: '11%', bgcolor: 'white', p: 3, mb: '1%', mt:'1%' }}>
            <Typography
            sx={{ mt: 1, mb: 1 }}
            fontSize='1.3rem'
            fontWeight = 'bold'
            color='primary.main'

            >
              Ask Questions From Qualifed Doctors And Get Authentic Answers
            </Typography>
            <Button variant="contained" sx={{width: '15%', mt: 2, bgcolor: 'danger.main', p: 1, borderRadius: '10px' }} onClick={() => navigate('/forum/post-a-question')}>Post Question</Button>
          </Grid>
          <Grid container item  sx={{ width: '95%', height: '15%', mb: '1%'}}>
            <VideoConsultationBox marginTop="0px" marginBottom = "0px"/>
          </Grid>
          <Grid item container direction='column' sx={{ width: '95%', height: '10%', mb: '1%' }}>
          <input type="text" class="" name="q" style={{width: "95%", padding: "10px", borderRadius: "5px"}} id="forum-search-bar" placeholder="Search" />
          <Grid container item alignItems='center'>
            <Typography
            sx={{pl: 2}}
            fontSize='2rem'
            fontWeight = 'bold'
            color='primary.main'
            >  .
            </Typography>
          <Typography
          sx={{ mt: 1, pl: 1}}
          fontSize='1.3rem'
          fontWeight = 'bold'
          color='primary.main'
          >
            Ask Questions From Qualifed Doctors And Get Authentic Answers
          </Typography>
          </Grid>
          </Grid>
          <Grid item container direction='column' sx={{ width: '75%', height: '14%', bgcolor: 'white', mb: '1%' }}>
            {allQuestions.map(question => {
              return(
                <div>
                  <QuestionCard question={question} />
                  <Divider light/>
                </div>
              )
            })}
          </Grid>
          <Grid container item direction='column' sx={{ width: '95%', height: '15%', bgcolor: 'white', p: 2 , mb: '1%'}} justifyContent='center' alignItems='center'>
            <Help />
          </Grid>
        </Grid>
      </Box>
      }
    </Grid>
  )
}

export default Questions
