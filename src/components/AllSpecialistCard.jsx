import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styled from 'styled-components'

const Image = styled.img`
    height: 70px;
    width: 70px;
    border-radius: 50%; 
`
export default function AllSpecialistCard() {
  return (
    <Card sx={{ maxWidth: 400, mr: 3, mb: 1, width: '100%' }}>
      <CardContent >
        <Grid container sx={{ width: '100%', height: '100%', p: 1 }}>
          <Grid container item sx={{ height: '100%', width: '24%' }} >
            <Image src="https://h7u5d3a4.stackpathcdn.com/assets/images/kiosk/70x70/dentist.jpg" />
          </Grid>
          <Grid container item direction='column' sx={{ height: '100%', width: '70%', pt: 1 }} justifyContent='center'>
            <Typography
              fontSize='1rem'
              fontWeight='bold'
              color='primary.main'
              fontFamily='Consolas'
            >
              Dentists
            </Typography>
            <Typography
              fontSize='0.8rem'
              fontWeight='bold'
              color='primary.main'
              fontFamily='Consolas'
            >
              402 Doctors Available
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
