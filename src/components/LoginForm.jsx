import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Login } from '../redux/actions/Authentication';

export default function LoginForm() {
  const form = useRef();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(state => state.user_data.user)
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState(null);
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
      password: password
    }
    dispatch(Login(myForm))
    form.current.reset();
  };

  useEffect(() => {
    const myUser = localStorage.getItem('Type')
    if(myUser){
      navigate('/')
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
          Log in to your account
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
            Log In
          </Button>
          <Grid container item justifyContent='center'>
            <Grid item direction='column'>
              <Typography>
                Don't have Account?
              </Typography>
              <Grid sx={{pl: '40px'}}>
              <Link to='/signup' >Sign Up</Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
