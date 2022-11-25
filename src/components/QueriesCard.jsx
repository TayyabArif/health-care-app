import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Image = styled.img`
    height: 150px;
    width: 350px;
    border-radius: 10%;
`
export default function QueriesCard({value}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSpecialityChange = (event) => {
    if(event === 'Ask Questions'){
      navigate('/forum')
    }
    else if(event === 'Free Consultation'){
      navigate('/online-consultation')
    }
    else if(event === 'Video Consultation'){
      navigate('/online-consultation')
    }
  };
  return (
    <Card sx={{ maxWidth: 370, mr: 3 , width: '100%'}} style={{cursor: 'pointer'}} onClick={()=> handleSpecialityChange(value)}>
      <CardContent >
        <Grid container sx={{height: '70%', width: '100%', ml: 0, p: 0}}>
        {value === "Ask Questions" &&
          <Image src="https://static.marham.pk/assets/images/help/first.png" />
        }
        {value === "Free Consultation" &&
          <Image src="https://static.marham.pk/assets/images/help/oc-update.png" />
        }
        {value === "Video Consultation" &&
          <Image src="https://static.marham.pk/assets/images/help/ocone-latest.png" />
        }
        </Grid>
        <Grid container direction = 'column' sx={{height: '100%', width: '100%', pt: 1}} alignItems='center' justifyContent='center'>
          <Typography
          fontSize='1rem'
          fontWeight = 'bold'
          color='primary.main'
          fontFamily = 'Consolas'
          >
          {value}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
