import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Doctors_Disease_List } from '../redux/actions/Doctors';
import { useNavigate } from 'react-router-dom';

const Image = styled.img`
    height: 70px;
    width: 70px;
    border-radius: 50%;
`
export default function AllSpecialistCard({speciality}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSpecialityChange = (event) => {
    dispatch(Doctors_Disease_List(event))
    navigate(`/doctors/${event}`, { state: {name: 'Doctor by speciality', data: event, value: 'Speciality' } })
  };
  return (
    <Card sx={{ maxWidth: 350, mr: 3, mb: 1, width: '100%', ml: 3 }} style={{cursor: 'pointer'}} onClick={()=> handleSpecialityChange(speciality.name)}>
      <CardContent >
        <Grid container sx={{ width: '100%', height: '100%', p: 1 }}>
          <Grid container item sx={{ height: '100%', width: '24%' }} >
            <Image src='https://static.marham.pk/assets/images/kiosk/70x70/urologist.jpg' />
          </Grid>
          <Grid container item direction='column' sx={{ height: '100%', width: '70%', pt: 1 }} justifyContent='center'>
            <Typography
              fontSize='1rem'
              fontWeight='bold'
              color='primary.main'
              fontFamily='Consolas'
            >
              {speciality.name}
            </Typography>
            <Typography
              fontSize='0.8rem'
              fontWeight='bold'
              color='primary.main'
              fontFamily='Consolas'
            >
              {speciality.noOfDoctors}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
