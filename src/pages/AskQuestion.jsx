import React from 'react'
import { Box, Grid, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import OffersDetailsCard from '../components/OffersDetailsCard';
import AllOffers from '../components/AllOffers';
import Help from '../components/Help';
import FAQ from '../components/FAQ';
import { useRef } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import { useDispatch, useSelector } from 'react-redux';
import { askQestion } from '../redux/actions/Questions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AskQuestions = () => {
  const form = useRef();
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const isAsked = useSelector(state => state.ask_Question.isAsked)
  const [asking, setAsking] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [location, setLocation] = useState("")
  const [problem, setProblem] = useState("")
  const [description, setDescription] = useState("")
  const [checked, setChecked] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (asking === "" && gender === "") {
      setHelperText('Please select an option.');
      setError(true);
    }
    else{
    let askValue = asking.concat(",",gender)
    askValue = askValue.concat(" ", age)
    const myForm={
      title: problem,
      patientAbout: askValue,
      location,
      question: description
    }
    dispatch(askQestion(myForm))
    form.current.reset();
    }
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleAskingChange = (event) => {
    setAsking(event.target.value)
    setHelperText(' ');
    setError(false);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value)
    setHelperText(' ');
    setError(false);
  };
  useEffect(() => {
    if( isAsked )
    {
      navigate('/forum')
    }
  }, [isAsked])
  return (
    <Box component="div" sx={{ height: '100%', width: '100%', bgcolor: '#eeeee4'}}>
      <Grid container direction='column' sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent='space-between' >
        <Grid container item direction='column' sx={{ width: '65%', height: '40%', bgcolor: 'white', mb: '1%', mt: 1, p: 2, pb:1 }} >
          <Typography
            fontSize='1.2rem'
            sx={{pl:2.5}}>
              Post A Question
          </Typography>
          <Grid container item sx={{ width: '100%', height: '70%', bgcolor: 'white', p: 1 }} alignItems='center'>
            <Button variant="text" sx={{ color: 'danger.main',  fontSize: '0.8rem' }}>Home</Button>
            <Typography
            fontSize='0.5rem'>
              /
            </Typography>
            <Button variant="text" sx={{ color: 'danger.main', fontSize: '0.8rem' }}>Forum</Button>
            <Typography
            fontSize='0.5rem'>
              /
            </Typography>
            <Typography
            fontSize='0.8rem'
            sx={{ml: '10px', color:'lightGray'}}>
              Post A Question
            </Typography>
          </Grid>
        </Grid>
        <Grid container item direction='column' sx={{ width: '65%', height: '50%', bgcolor: 'white', p: 3, mb: '1%', mt:'1%' }}>
          <Typography
           sx={{ mt: 1, mb: 1 }}
           fontSize='1.3rem'
           fontWeight = 'bold'
           color='primary.main'

          >
            Post Your Case
          </Typography>
          <Box component="form" ref={form} onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Typography
            sx={{ mt: 1,}}
            fontSize='0.9rem'
            fontWeight = '500'
            color='gray'
            >
            Asking For
            </Typography>
            <Grid container item sx={{width: '100%', bgcolor: '#eeeee4', p: 1, borderRadius: '10px'}} justifyContent='space-between' alignItems='center'>
            <FormControl error={error}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={asking}
                onChange={handleAskingChange}
              >
                <FormControlLabel value="Self" control={<Radio />} label="Self" />
                <FormControlLabel value="Some one Else" control={<Radio />} label="Some one Else" />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl error={error}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={gender}
                onChange={handleGenderChange}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <TextField
              margin="normal"
              required
              sx={{minWidth: '220px'}}
              id="age"
              label="Age"
              name={age}
              autoComplete="nunmber"
              type="number"
              onChange={(e) => setAge(e.target.value)}
            >
            </TextField>
            </Grid>
            <Typography
              sx={{ mt: 1,}}
              fontSize='0.9rem'
              fontWeight = '500'
              color='gray'
              >
              Location
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name={location}
              label="Location"
              type="text"
              id="location"
              autoComplete="location"
              onChange={(e) => setLocation(e.target.value)}
            />
            <Typography
              sx={{ mt: 1,}}
              fontSize='0.9rem'
              fontWeight = '500'
              color='gray'
              >
              Problem Type
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name={problem}
              label="Problem"
              type="text"
              id="problem"
              autoComplete="Problem"
              onChange={(e) => setProblem(e.target.value)}
            />
            <Typography
              sx={{ mt: 1,}}
              fontSize='0.9rem'
              fontWeight = '500'
              color='gray'
              >
              Problem Description
            </Typography>
            <TextareaAutosize
            aria-label="minimum height"
            required
            minRows={10}
            placeholder="Description"
            style={{
              width: "99%",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Grid container item sx={{width: '100%'}} >
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
           <Typography
              sx={{ mt: 1}}
              fontSize='0.9rem'
              fontWeight = '500'
              color='primary.light'
              >
             I agree with Marham Terms & Conditions
            </Typography>
          </Grid>
          {checked &&
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 4, py: 1, bgcolor: 'danger.main' }}
          >
            Submit
          </Button>
          }
         </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AskQuestions
