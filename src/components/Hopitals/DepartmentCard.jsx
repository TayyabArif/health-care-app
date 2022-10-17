import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styled from 'styled-components'

const Image = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`
export default function DepartmenCard() {
  return (
    <Card sx={{ maxWidth: 270, mr: 3, mb: 1, width: '100%'}} alignItems = 'center'>
      <CardContent sx={{p: 1}} alignItems = 'center'>
        <Grid container direction = 'column' sx={{ width: '100%', height: '100%', p: 0}} alignItems = 'center' >
          <Grid container item sx={{ height: '30%', width: '98%',  }} justifyContent='center'>
            <Image src="https://static.marham.pk/assets/images/kiosk/70x70/oncologist.jpg" />
          </Grid>
          <Grid container item direction='column' sx={{ height: '68%', width: '98%', pt: 1 }}  justifyContent='center' alignItems='center'>
            <Typography
              fontSize='1rem'
              color='primary.main'
              fontFamily='Consolas'
            >
              Cancer Specialist / Oncologist
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
