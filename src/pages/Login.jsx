import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import LoginForm from '../components/LoginForm'
import logo from '../assests/launch_screen.svg'
import styled from 'styled-components'
const Image = styled.img`
    height: 470px;
    width: 470px;

`
const Login = () => {
  return (
   <Box component="div" sx={{ height: '100%', width:'100%'}}>
    <Grid container sx={{ height: '100%', width:'100%' }} alignItems="center"  justifyContent='space-between' >
      <Grid container item sx={{ height: '100%', width:'50%' }} alignItems="center" justifyContent="center">
        <Image src= {logo} />
      </Grid>
      <Grid container item sx={{ height: '100%', width:'50%'}}>
          <LoginForm />
      </Grid>
    </Grid>
   </Box>
  )
}
export default Login
