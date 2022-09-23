import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
   <Box component="div" sx={{ height: '100%', width:'100%'}}>
    <Grid container sx={{ height: '100%', width:'100%' }} alignItems="center"  justifyContent='space-between' >
      <Grid container item sx={{ height: '100%', width:'50%' }} alignItems="center" justifyContent="center">
        <Typography>
           (Logo)
        </Typography>
        <Typography
        variant='h3'
        color= 'primary.main'
        fontFamily= 'Fantasy'
        >
           Health Care
        </Typography>
      </Grid>
      <Grid container item sx={{ height: '100%', width:'50%'}}>
          <LoginForm />
      </Grid>
    </Grid>
   </Box>
  )
}
export default Login
