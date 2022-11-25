import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cityLabTests, labTests } from '../../redux/actions/LabTests';

const labTestsName = [
  {name: 'Chughtai Lab', discount: 'up to 20%', param: 'chugtai lab'},
  {name: 'Dr. Essa’s Lab', discount: 'up to 15%', param: "Dr.Essa's Laboratory %26 Diagnostic center"},
  {name:'Citilab',  discount: 'up to 15%', param: 'citi lab and Research centre lahore'},
  {name: 'C Lab Diagnostics', discount: 'up to 20%', param: 'C lab diagnostics'},
  {name: 'Mughal Labs',discount: 'up to 20%', param: 'Mughal Labs'}
]
const PakistanLabs = [
  {name: 'Labs in Karachi', param: 'karachi'},
  {name: 'Labs in Islamabad', param: 'islamabad'},
  {name: 'Labs in Lahore', param: 'lahore'},
  {name: 'Labs in Sargodha', param: 'sargodha'},
  {name: 'Labs in Peshawar', param: 'peshawar'}
]
const LabTestDropDown = () => {
  const navigate = useNavigate()
  const [test, setTest] = React.useState('');
  const dispatch = useDispatch()
  const handleChange = (event, name) => {
      dispatch(cityLabTests(event))
      navigate(`/lab%20test/${event}`, { state: {name: 'Lab city', data: event, lab: name } })
  };

  const changeLabName = (event, name) => {
    console.log('event name is', event)
    dispatch(labTests(event))
    navigate(`/lab%20test/${event}`, { state: {name: 'Lab name', data: event, lab: name} })
};
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: "10vw" }}>
        <InputLabel id="demo-simple-select-standard-label">Lab Test</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value= {test}
          onChange={handleChange}
          label='Lab Test'
          disableUnderline = {true}
          sx={{border: "none"}}
        >
          <Grid container sx={{width: '100%', pt: '20px', pl: '10px', pr: '70px'}}>
              <Grid container item direction='column' sx={{width: '45%'}}>
                  <Typography
                  fontSize='1rem'
                  fontWeight = 'bold'
                  color='primary.main'
                  sx={{pl: '15px', mb: '15px'}}

                  >
                  Book Lab Tests
                  </Typography>
                  {labTestsName.map(data => {
                    return(
                      <MenuItem value={data} onClick={() => changeLabName(`${data.param}`, `${data.name}`)}>{data.name} - {data.discount}</MenuItem>
                    )
                  })}
              </Grid>
              <Grid container item direction='column' sx={{width: '45%', ml: '40px'}}>
                <Typography
                fontSize='1rem'
                fontWeight = 'bold'
                color='primary.main'
                sx={{pl: '15px', mb: '15px'}}

                >
                Labs in Pakistan
                </Typography>
                {PakistanLabs.map(data => {
                    return(
                      <MenuItem value={data} onClick={() => handleChange(`${data.param}`, `${data.name}`)}>{data.name}</MenuItem>
                    )
                  })}
              </Grid>
          </Grid>
        </Select>
      </FormControl>
    </div>
  )
}

export default LabTestDropDown
