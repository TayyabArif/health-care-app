import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styled from 'styled-components'

const Image = styled.img`
    height: 70px;
    width: 70px;
    margin-left: 40px;
    border-radius: 50%;
`
export default function SpecialistCard() {
  return (
    <Card sx={{ maxWidth: 170, mr: 4 , width: '100%'}}>
      <CardContent >
        <Grid container sx={{height: '100%', width: '100%', ml: 0}} alignItems='center'>
        <Image src="https://h7u5d3a4.stackpathcdn.com/assets/images/kiosk/70x70/dentist.jpg" />
        </Grid>
        <Grid container direction = 'column' sx={{height: '100%', width: '100%', pt: 1}} alignItems='center' justifyContent='center'>
          <Typography
          fontSize='1rem'
          fontWeight = 'bold'
          color='primary.main'
          fontFamily = 'Consolas'
          >
           Dentists
          </Typography>
          <Typography
          fontSize='0.8rem'
          fontWeight = 'bold'
          color='primary.main'
          fontFamily = 'Consolas'
          >
           402 Doctors Available
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
