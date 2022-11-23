import React from "react";
import { Box, Grid, Link, TextField, Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const AddTest = () => {
  const [prescription, setPrescription] = useState(null);
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const form = useRef();
  const onImageChange = (e) => {
    setPrescription(e.target.files[0]);
  };
  const handleChange = (e) => {
    e.preventDefault();
    console.log('name is', name)
    console.log('name is', age)

    debugger
    const formData = new FormData();
    // formData.append("user[name]", name)
    // formData.append("user[surname]", surname)
    // formData.append("user[email]", email)
    // formData.append("user[password]", password)
    // formData.append("user[avatar]", avatar)
    // dispatch(signup(formData))
    form.current.reset();
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
            Enter Your Title:
          </Typography>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={6}
            placeholder="Minimum 3 rows"
            sx={{ mx: "20px", my: "10px" }}
            style={{
              width: "90%",
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid
          container
          direction="column"
          item
          sx={{ width: "100%", height: "20%" }}
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
