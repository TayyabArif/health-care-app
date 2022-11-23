import React from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Help from '../components/Help';
import Avatar from "@mui/material/Avatar";
import VideoConsultationBox from './VideoConsultationBox';
import { useLocation } from 'react-router-dom';

const Question = () => {
  const {state} = useLocation();
  const { data} = state;
  console.log('data is', data)
  return (
    <Box component="div" sx={{ height: '100%', width: '100%', bgcolor: '#eeeee4'}}>
        <Grid container direction='column' sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent='space-between' >
          <Grid container item  sx={{ width: '95%', height: '15%', mb: '1%', mt: '0.5%'}}>
            <VideoConsultationBox marginTop = "0px" marginBottom = "0px" />
          </Grid>
          <Grid item container direction='column' sx={{ width: '75%', height: '50%', bgcolor: 'white', mb: '1%' }}>
            <Typography
              sx={{ mt: 1, mb: 1, p: 2, pb: 0 }}
              fontSize='1.3rem'
              fontWeight = 'bold'
              color='primary.main'

              >
                Talk to Gynecologist on Want To {data.title}
            </Typography>
            <Grid container item sx={{ width: '100%', height: '70%', bgcolor: 'white', p: 1 }} alignItems='center'>
              <Button variant="text" sx={{ color: 'danger.main',  fontSize: '0.8rem' }}>Home</Button>
              <Typography
              fontSize='0.5rem'>
                /
              </Typography>
              <Button variant="text" sx={{ color: 'danger.main', fontSize: '0.8rem' }}>Forum</Button>
              <Typography
              fontSize='0.5rem'>
                /
              </Typography>
              <Typography
              fontSize='0.8rem'
              sx={{ml: '10px', color:'lightGray'}}>
                {data.title}
              </Typography>
            </Grid>
            <Grid container item sx={{width: '100%', p: '20px'}}>
              <Avatar
                sx={{ bgcolor: "#EBFAFF", color: "#202124" }}
                aria-label="recipe"
              >
              </Avatar>
              <Typography
                sx={{ mt: 1, pl: '20px'}}
                fontSize='1.3rem'
                >
                 {data.patientAbout}
              </Typography>
            </Grid>
            <Grid container item sx={{width: '100%', p: '15px'}}>
              <Typography
                sx={{ pb: '30px', pl: '10px', color: 'gray'}}
                fontSize='1.1rem'
                >
                 {data.question}
              </Typography>
            </Grid>
            <Grid container item sx={{width: '100%', p: '15px', pb: 0}}>
              <Typography
                sx={{ pl: '10px', color: 'danger.main'}}
                fontSize='1.3rem'
                fontWeight= 'bold'
                >
                Answers
              </Typography>
            </Grid>
            {data.answers?
            data.answers.map(answer => {
              return(
              <Grid container item direction= 'column' sx={{width: '100%', p: '15px'}}>
              <Grid container item sx={{width: '100%', p: '20px'}}>
                <Avatar
                  sx={{ bgcolor: "#EBFAFF", color: "#202124" }}
                  aria-label="recipe"
                >
                </Avatar>
                <Grid container item direction='column' sx={{width: '50%'}}>
                  <Typography
                    sx={{ mt: 1, pl: '20px'}}
                    fontSize='1.1rem'
                    >
                   {answer.docName}
                  </Typography>
                  <Typography
                    sx={{ mt: 1, pl: '20px'}}
                    fontSize='0.7rem'
                    >
                    {answer.docDeg}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item sx={{pb: '10px'}}>
                <Typography
                  sx={{ mt: 1, pl: '30px'}}
                  fontSize='1.1rem'
                  >
                  {answer.ans}
                </Typography>
              </Grid>
              <Divider light />
            </Grid>
              )
            })
            :
            <Grid container item justifyContent='center'>
              <Typography
                  sx={{ mt: 1, pl: '30px'}}
                  fontSize='1.3rem'
                  >
                 No Answer Yet
                </Typography>
            </Grid>
            }
            <Grid sx={{p: '20px'}}>
              <Button
              variant='contained'>
                Post a Comment
              </Button>
            </Grid>
          </Grid>
          <Grid container item direction='column' sx={{ width: '95%', height: '15%', bgcolor: 'white', p: 2 , mb: '1%'}} justifyContent='center' alignItems='center'>
            <Help />
          </Grid>
        </Grid>
      </Box>
  )
}

export default Question
