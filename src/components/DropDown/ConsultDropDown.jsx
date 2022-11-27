import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Grid, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ConsultDropDown = () => {
  const navigate = useNavigate()
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: "10vw" }}>
        <InputLabel id="demo-simple-select-standard-label" sx={{color: 'primary.main'}}>Consult Online</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value='Consult Online'
          onChange={handleChange}
          label='Consult Online'
          disableUnderline = {true}
          sx={{border: "none"}}
        >
          <Grid container sx={{width: '20vw', pt: '20px'}}>
              <Grid container item direction='column' sx={{width: '100%'}}>
              <Typography
              fontSize='1rem'
              fontWeight = 'bold'
              color='primary.main'
              sx={{pl: '15px', mb: '15px'}}

              >
              Online Services
              </Typography>
              <MenuItem value={10} sx={{pb:'10px'}} onClick={() => navigate('/online-consultation')}>All Online Doctors</MenuItem>
              <MenuItem value={20} sx={{pb:'10px'}} onClick={() => navigate('/forum')}>Ask Doctor - Q/A</MenuItem>
              <MenuItem value={30} sx={{pb:'10px'}} onClick={() => navigate('/help-me')}>Help me Health Care</MenuItem>
              </Grid>
          </Grid>
        </Select>
      </FormControl>
    </div>
  )
}

export default ConsultDropDown
