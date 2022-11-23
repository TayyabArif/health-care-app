import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QuestionCard = ({question}) => {
  const navigate = useNavigate()
  return (
    <Grid container item sx={{ width: '95%', height: '30%', bgcolor: 'white', mt: 1 }} justifyContent='space-between'>
      <Grid container item sx={{width: "100%", pl: '30px', pr: '50px', mt: '10px'}} justifyContent= 'space-between'>
        <Typography
          fontSize = '1.3rem'
          fontFamily = 'Consolas'
          >
         {question.title}
        </Typography>
        <Typography
          fontSize = '1.5rem'
          fontFamily = 'Consolas'
          >
          {question.location}
        </Typography>
      </Grid>
      <Grid container item sx={{width: "100%", pl: '30px', pr: '50px', mt: '20px'}} >
      <Typography
          fontSize = '1rem'
          fontFamily = 'Consolas'
          >
         {question.question}
        </Typography>
      </Grid>
      <Grid container item sx={{width: "100%", pl: '30px', pr: '50px', my: '20px'}} justifyContent= 'space-between'>
        <Typography
          fontSize = '1rem'
          fontWeight="bold"
          color="danger.main"
          >
          {question.answers?.length} Answer
        </Typography>
        <Typography
          fontSize = '1rem'
          fontFamily = 'Consolas'
          >
          6 hours ago
        </Typography>
      </Grid>
      <Grid  container item sx={{width: "100%", pb: '10px'}} justifyContent= 'center'>
        <Button
        variant = 'contained'
        sx={{bgcolor: 'danger.main'}}
        onClick={() => navigate('/forum/answer', { state: { data: question } })}
        >
          View Details
        </Button>
      </Grid>
    </Grid>

  )
}

export default QuestionCard
