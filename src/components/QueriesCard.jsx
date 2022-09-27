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
    height: 150px;
    width: 350px;
    border-radius: 10%; 
`
export default function QueriesCard() {
  return (
    <Card sx={{ maxWidth: 370, mr: 3 , width: '100%'}}>
      <CardContent >
        <Grid container sx={{height: '70%', width: '100%', ml: 0, p: 0}}>
        <Image src="https://static.marham.pk/assets/images/help/first.png" />
        </Grid>
        <Grid container direction = 'column' sx={{height: '100%', width: '100%', pt: 1}} alignItems='center' justifyContent='center'>
          <Typography
          fontSize='1rem'
          fontWeight = 'bold'
          color='primary.main'
          fontFamily = 'Consolas'
          >
           Ask Questions
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
