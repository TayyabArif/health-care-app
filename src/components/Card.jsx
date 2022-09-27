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
    margin-left: 60px;
    border-radius: 50%; 
`
export default function DataCard() {
  return (
    <Card sx={{ maxWidth: 220, mr: 3 , width: '100%'}}>
      <CardContent >
        <Grid container item direction='column' sx={{ml: 10}} justifyContent='center' alignItems='center'>
        <svg xmlns="http://www.w3.org/2000/svg" width='38' height='38' viewBox='0 0 38 38'>
          <g id="Group_5294" data-name="Group 5294" transform="translate(-536 -441)" >
            <circle id="Ellipse_267" data-name="Ellipse 267" cx="19" cy="19" r="19" transform="translate(536 441)" fill="#02c782" />
            <text id="_20_OFF" data-name="20%
                  OFF" transform="translate(555 457)" fill="#fff" font-size="10" font-family="OpenSans-SemiBold, Open Sans" font-weight="600"><tspan x="-10.017" y="0">50%</tspan><tspan x="-9.258" y="14">OFF</tspan></text>
          </g>
        </svg>
        </Grid>
        <Grid container sx={{height: '100%', width: '100%'}} alignItems='center'>
        <Image src="https://static.marham.pk/assets/images/deal/dark-circle.png" />
        </Grid>
        <Grid container direction = 'column' sx={{height: '100%', width: '50%', pt: 1, ml: 7}} alignItems='center'>
          <Typography
          fontSize='1rem'
          fontWeight = 'bold'
          color='primary.main'
          fontFamily = 'Consolas'
          >
           Drak Circles Treatment
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
