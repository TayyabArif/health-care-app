import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { Doctors_Disease_List } from '../redux/actions/Doctors';
import { useNavigate } from 'react-router-dom';

const Image = styled.img`
    height: 70px;
    width: 70px;
    margin-left: 40px;
    border-radius: 50%;
`
export default function SpecialistCard({name, number, img}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSpecialityChange = (event) => {
    dispatch(Doctors_Disease_List(event))
    navigate(`/doctors/${event}`, { state: {name: 'Doctor by speciality', data: event, value: 'Speciality' } })
  };
  return (
    <Card sx={{ maxWidth: 200, mr: 4 , width: '100%'}} style={{cursor: 'pointer'}} onClick={()=> handleSpecialityChange(name)}>
      <CardContent >
        <Grid container sx={{height: '100%', width: '100%', ml: 0}} alignItems='center'>
        <Image src= {img} />
        </Grid>
        <Grid container direction = 'column' sx={{height: '100%', width: '100%', pt: 1}} alignItems='center' justifyContent='center'>
          <Typography
          fontSize='1rem'
          fontWeight = 'bold'
          color='primary.main'
          fontFamily = 'Consolas'
          >
           {name}
          </Typography>
          <Typography
          fontSize='0.8rem'
          fontWeight = 'bold'
          color='primary.main'
          fontFamily = 'Consolas'
          >
           {number} Doctors Available
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
