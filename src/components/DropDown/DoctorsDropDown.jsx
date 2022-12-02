  import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Doctors_Disease_List, Doctors_Speciality_List } from '../../redux/actions/Doctors';
import { useRef } from 'react';

const service = ['Open Heart Surgery', 'Braces', 'HydraFacial', 'Vitro Retinl (IVF)']
const speciality = ['Dermatologist', 'Gynecologist', 'Child Specialist', 'Gastroenterologist', 'Psychiatrist', 'Neurologist', 'General Physician']
const disease =['Coronavirus', 'Diabetes', 'Bawaseer', 'High Blood Pressure', 'Typhoid Fever', 'Bawaseer']
const useStyles = makeStyles({
  container: {
    left: '256px'
  }
})
const DoctorsDropDown = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const classes = useStyles();
  const ref = useRef()
  const [doctor, setDoctor] = React.useState('1');
  const handleSpecialityChange = (event) => {
    dispatch(Doctors_Speciality_List(event))
    navigate(`/doctors/${event}`, { state: {name: 'Doctor by speciality', data: event, value: 'Speciality' } })
    ref.current.close();
  };
  const handleDiseaseChange = (event) => {
    dispatch(Doctors_Disease_List(event))
    navigate(`/doctors/${event}`, { state: {name: 'Doctor by disease', data: event, value: 'Disease' } })
  };
  const handleServiceChange = (event) => {
    dispatch(Doctors_Disease_List(event))
    navigate(`/doctors/${event}`, { state: {name: 'Doctor by service', data: event, value: 'Service' } })
  };
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: "10vw" }}>
        <InputLabel id="demo-simple-select-standard-label" sx={{color: 'primary.main'}}>Doctors</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          ref={ref}
          label='Doctors'
          disableUnderline = {true}
          sx={{border: "none"}}
        >
          <Grid container className={classes.container} sx={{minWidth: '40vw', pt: '20px'}}>
              <Grid container item direction='column' sx={{width: '50%'}} alignContent='center'>
              <Typography
              fontSize='1rem'
              fontWeight = 'bold'
              color='primary.main'
              sx={{mb: '20px', pl: '15px' }}
              >
              Find doctor by speciality
              </Typography>
              {speciality.map(data => {
                return(
                  <MenuItem value={data} onClick={() => handleSpecialityChange(`${data}`)}>{data}</MenuItem>
                )
              })}
              <Button
                variant="outlined"
                sx={{ fontSize: "0.7rem", mt:'30px' }}
              >
                Are you Doctor?
              </Button>
              </Grid>
              <Grid container item direction='column' sx={{width: '47%', ml: '15px'}} alignContent='center'>
              <Typography
              fontSize='1rem'
              fontWeight = 'bold'
              color='primary.main'
              sx={{mb: '20px', pl: '15px'}}
              >
              Find doctor by disease
              </Typography>
              {disease.map(data => {
                return(
                  <MenuItem value={data} onClick={() => handleDiseaseChange(`${data}`)}>{data}</MenuItem>
                )
              })}
              <Typography
              fontSize='1.1rem'
              fontWeight = 'bold'
              color='primary.main'
              sx={{mb: '15px',mt: '10px', pl: '15px' }}
              >
              Find doctor by Services
              </Typography>
              {service.map(data => {
                return(
                  <MenuItem value={data} onClick={() => handleServiceChange(`${data}`)}>{data}</MenuItem>
                )
              })}
              </Grid>
          </Grid>
        </Select>
      </FormControl>
    </div>
  )
}

export default DoctorsDropDown
