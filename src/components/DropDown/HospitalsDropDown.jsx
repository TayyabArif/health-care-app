import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const lahoreHospital = ['Hameed Latif Hospital', 'Doctors Hospital', 'National Hospital']
const karachiHospital = ['Agha Khan Hospital', 'National Hospital', 'Medicare Hospital']
const PakistanHospital = ['Hospitals in Islamabad', 'Hospitals in Multan', 'Hospitals in Rawalpindi', 'Hospitals in Faisalabad', 'Hospitals in Gujranwala', 'Hospitals in Sargodha', 'Hospitals in Peshawar', 'Hospitals in Sialkot']
const HospitalsDropDown = () => {
  const navigate = useNavigate()
  const [hospital, setHospital] = useState('')
  const handleChange = (event) => {
    navigate(`/hospital/${event}`)
  };
  return (
    <Grid >
      <FormControl variant="standard" sx={{ m: 1, minWidth: "10vw" }}>
        <InputLabel id="demo-simple-select-standard-label" sx={{color: 'primary.main'}}>Hospitals</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value= {hospital}
          onChange={handleChange}
          disableUnderline = {true}
          sx={{border: "none"}}
        >
          <Grid container sx={{width: '100%', pl: '10px', pr: '90px'}}>
              <Grid container item direction='column' sx={{width: '45%'}}>
              <Typography
              fontSize='1rem'
              fontWeight = 'bold'
              color='primary.main'
              sx={{pl: '15px', mb: '15px'}}
              >
              Hospitals in Lahore
              </Typography>
              {lahoreHospital.map(data => {
                return(
                  <MenuItem value={data} onClick={() => handleChange(`${data}`)}>{data}</MenuItem>
                )
              })}
              <Typography
              fontSize='1rem'
              fontWeight = 'bold'
              color='primary.main'
              sx={{pl: '15px', mb: '15px', mt: '15px'}}

              >
              Hospitals in Karachi
              </Typography>
              {karachiHospital.map(data => {
                return(
                  <MenuItem value={data} onClick={() => handleChange(`${data}`)}>{data}</MenuItem>
                )
              })}
              </Grid>
              <Grid container item direction='column' sx={{width: '45%', ml: '30px'}}>
              <Typography
              fontSize='1rem'
              fontWeight = 'bold'
              color='primary.main'
              sx={{pl: '15px', mb: '15px'}}

              >
              Hospitals in Pakistan
              </Typography>
              {PakistanHospital.map(data => {
                return(
                  <MenuItem value={data} onClick={() => handleChange(`${data}`)}>{data}</MenuItem>
                )
              })}
              </Grid>
          </Grid>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default HospitalsDropDown
