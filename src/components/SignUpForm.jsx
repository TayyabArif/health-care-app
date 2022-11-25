import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Signup } from '../redux/actions/Authentication/index.js';

export default function SignUpForm() {
  const form = useRef();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null);
  const user = useSelector(state => state.user_data.user)
  const loading = useSelector(state => state.user_data.loading)
  const handleChange = (event) => {
    setType(event.target.value);
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleEmailChange = event => {
    !isValidEmail(event.target.value) ?
      setErrors('Email is invalid') : setErrors(null)
    setEmail(event.target.value)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = {
      email: email,
      name: name,
      type: type,
      degree: degree,
      speciality: speciality,
      phoneNumber: phoneNumber,
      password: password
    }
    dispatch(Signup(myForm))
    form.current.reset();
  };
  useEffect(() => {
    const myUser = localStorage.getItem('Type')
    if(myUser){
      navigate('/login')
    }
  }, [user]);

  return (
    <Container component="main" maxWidth="xs" sx={{ ml: '0px', mr: '0px'}}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          boxShadow: 5,
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          bgcolor: "rgba(255,255,255, 0.8)",
          borderRadius: "10px",
          borderColor: "primary.light",
          width: '45vw',
          mb: 2,
          mt: 4

        }}
      >
         <Typography component="h1" variant="h5"  fontSize="1.2rem"
          fontWeight="120px"
          fontFamily="Fantasy"
          sx={{mb: 2}}>
          Welcome to Health Care
        </Typography>
        <Typography component="h1" variant="h5" sx={{width: "50%"}} fontWeight='bold'
        color='primary.main'
        fontSize="1.8rem"
        >
          Lets Register your self Quickly
        </Typography>
        <Box component="form" ref={form} onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name={email}
            autoComplete="email"
            type="email"
            focused
            error={errors == null ? false : true}
            helperText={errors == null ? ' ' : 'Email is not valid'}
            autoFocus
            onChange={(e) => {
              handleEmailChange(e)
            }
            }
          >
          </TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name={email}
            autoComplete="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <FormControl sx={{ m: 1, minWidth: 220 }} required>
            <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={type}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value='Doctor'>Doctor</MenuItem>
              <MenuItem value='Patient'>Patient</MenuItem>
            </Select>
          </FormControl>
          {type === 'Doctor' &&
          <TextField
            required
            margin="normal"
            fullWidth
            id="degree"
            label="Your Degree"
            name={degree}
            autoComplete="degree"
            type="text"
            onChange={(e) => setDegree(e.target.value)}
          />
          }
          {type === 'Doctor' &&
          <TextField
            required
            margin="normal"
            fullWidth
            id="speciality"
            label="Speciality"
            name={speciality}
            autoComplete="Speciality"
            type="text"
            onChange={(e) => setSpeciality(e.target.value)}
          />
          }
          <TextField
            required
            margin="normal"
            fullWidth
            id="number"
            label="Phone Number"
            name={phoneNumber}
            autoComplete="Phone Number"
            type="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name={password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
