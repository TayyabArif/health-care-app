import React from "react";
import { Box, Grid, Link, TextField, Typography } from "@mui/material";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from "react-redux";
import { addTest } from "../redux/actions/LabTests";
import Alert from '@mui/material/Alert';

const Form = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const AddTest = ({data}) => {
  const [prescription, setPrescription] = useState(null);
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("0");
  const [name, setName] = useState("");
  const [rate, setRate] =useState("0")
  const [discountrate, setDiscountrate] =useState("0")
  const [age, setAge] = useState(0);
  const [branch, setBranch] =useState("")
  const form = useRef();
  const dispatch = useDispatch();
  const type = localStorage.getItem('Type')
  const [value,setValue]= useState("")
  const [loginType, setLoginType] = useState("")

  const onImageChange = (e) => {
    setPrescription(e.target.files[0]);
  };
  const handleChange = (e) => {
    e.preventDefault();
    if(!type){
      setValue('null')
    }
    else if(type === 'Doctor')
    {
      setLoginType('Doctor')
    }
    else{
      const form =JSON.stringify({
        name: name,
        title: title,
        rate: rate,
        discountrate: discountrate,
        contactnumber: phoneNumber,
        branche: branch,
        location: location,
        document: prescription.name,
        age: age
      })
      dispatch(addTest(form))
      setBranch("");
      setRate("");
      setDiscountrate("");
      setTitle("");
      // form.current.reset();
    }
  };
  const handleTestChange = (title, rate, drate) => {
    setTitle(title)
    setRate(rate);
    setDiscountrate(drate)
  };
  const handleBranchChange = (name) => {
    setBranch(name)
  };
  return (
    <Form ref={form} onSubmit={handleChange}>
      <Grid container direction="column" sx={{ width: "100%", height: "100%" }} id='add-test'>
        <Grid container item sx={{ width: "100%", height: "10%" }}>
          <Typography
            fontSize="1rem"
            fontWeight="bold"
            color="primary.main"
            sx={{ pl: "15px", mb: "15px" }}
          >
            Enter Your Details
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          item
          sx={{ width: "100%", height: "20%" }}
        >
          <Typography fontSize="0.7rem" fontWeight="400" sx={{ pl: "20px" }}>
            Enter Your Location:
          </Typography>
          <TextField
            id="outlined-basic"
            label="Add"
            variant="outlined"
            required
            sx={{ mx: "20px", my: "10px" }}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid
          container
          direction="column"
          item
          sx={{ width: "100%", height: "20%" }}
        >
          <Typography fontSize="0.7rem" fontWeight="400" sx={{ pl: "20px" }}>
            Select Your Test:
          </Typography>
          <Grid container item sx={{width: '100%', pl: "20px"}} alignItems='center'>
          <FormControl sx={{minWidth: '40%'}}>
            <InputLabel id="demo-simple-select-label">Title</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={title}
              label="Title"
            >
              {data.testall?.map(data => {
                return(
                  <MenuItem value={data.title} onClick={() => handleTestChange(`${data.title}`, `${data.rate}`, `${data.discountrate}`)}>{data.title}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Rate"
            variant="outlined"
            value={rate}
            sx={{ mx: "20px", my: "10px", minWidth: '20%' }}
            disabled
          />
          <TextField
            id="outlined-basic2"
            label="Discount Rate"
            variant="outlined"
            value={discountrate}
            sx={{ mx: "20px", my: "10px", minWidth: '20%' }}
            disabled
          />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          item
          sx={{ width: "100%", height: "10%" ,pl: "20px"}}
        >
          <Typography
          fontSize="1rem"
          fontWeight="400"
          color="gray"
          sx={{ }}
        >
          Select Branch
        </Typography>
        <FormControl sx={{maxWidth: '40%', my: '10px'}}>
            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
            <Select
              labelId="demo-simple-select-label2"
              id="demo-simple-select2"
              value={branch}
              label="Branch"
            >
              {data.branches?.map(data => {
                return(
                  <MenuItem value={data.name} onClick={() => handleBranchChange(`${data.name}`,)}>{data.name}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          container
          direction="column"
          item
          sx={{ width: "100%", height: "10%" }}
        >
          <Typography
            fontSize="1rem"
            fontWeight="400"
            color="gray"
            sx={{ pl: "20px" }}
          >
            Attach Prescription (Optional)
          </Typography>
          <Grid sx={{ pl: "20px", my: "10px" }}>
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={onImageChange}
            />
          </Grid>
        </Grid>
        <Grid container item sx={{ width: "100%", height: "30%" }}>
          <Grid container item direction="column" sx={{ width: "30%" }}>
            <Typography
              fontSize="1rem"
              fontWeight="400"
              color="gray"
              sx={{ pl: "20px" }}
            >
              Add Phone No*
            </Typography>
            <TextField
              id="outlined-basic"
              label="phone number"
              variant="outlined"
              type="number"
              required
              sx={{ mx: "20px", my: "10px" }}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Grid>
          <Grid container item direction="column" sx={{ width: "30%" }}>
            <Typography
              fontSize="1rem"
              fontWeight="400"
              color="gray"
              sx={{ pl: "20px" }}
            >
              Name
            </Typography>
            <TextField
              id="outlined-basic"
              label="Add Full Name"
              variant="outlined"
              sx={{ mx: "20px", my: "10px" }}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid container item direction="column" sx={{ width: "30%" }}>
            <Typography
              fontSize="1rem"
              fontWeight="400"
              color="gray"
              sx={{ pl: "20px" }}
            >
              Age
            </Typography>
            <TextField
           id="outlined-basic"
           label="Enter your age"
           variant="outlined"
           type="number"
           sx={{ mx: "20px", my: "10px" }}
           onChange={(e) => setAge(e.target.value)}
         />
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="column"
          sx={{ width: "100%", mb: "20px" }}
          alignItems="center"
        >
          {value === 'null' && <Alert severity="error">Please login first to Book Test</Alert>}
           {loginType === 'Doctor' && <Alert severity="error">Doctors are not allowed to Book Test</Alert>}
          <Button
            variant="contained"
            sx={{
              mt: 2,
              color: "white",
              backgroundColor: "danger.main",
              borderRadius: "7px",
            }}
            type="submit"
          >
            Book Lab Test
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default AddTest;
