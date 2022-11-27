import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import DoctorInfoCard from "./DoctorInfoCard";
import AppointmentModal from "../../AppointmentModal";

const Image = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
`;
const DoctorlInfo = ({data}) => {
  return (
    <Grid
      container
      item
      direction="column"
      sx={{ width: "100%", height: "100%", bgcolor: "white", pt: 1, pl: 5, mt: 1 }}
    >
      <Grid
        container
        item
        sx={{ width: "98%", height: "60%", bgcolor: "white", pt: 1 }}
        justifyContent="space-between"
      >
        <Grid container item sx={{ width: "65%" }}>
          <Grid
            item
            sx={{ width: "15%", m: 1 }}
            justifyContent="center"
            alignItems="center"
          >
            <Image src={data.image} />
          </Grid>
          <Grid container item direction="column" sx={{ width: "60%", ml: 3 }}>
            <Link href="#">{data.name}</Link>
            <Typography
              fontSize="1rem"

              sx={{ width: "90%", pt: 1 }}
            >
              {data.speciality}
            </Typography>
            <Typography
              fontSize="0.8rem"
              sx={{ width: "90%", pt: 1 }}
            >
              {data.degree}
            </Typography>
            <Grid container item sx={{ width: "90%", mb: 2, mt: 1 }}>
              <Grid
                container
                item
                direction="column"
                sx={{ width: "30%" }}
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  fontSize="0.9rem"
                  sx={{ width: "90%" }}
                >
                  Reviews
                </Typography>
                <Typography
                  fontSize="0.9rem"
                  fontWeight="bold"
                  sx={{ width: "90%" }}
                >
                  {data.review}+
                </Typography>
              </Grid>
              <Divider
                orientation="vertical"
                sx={{ color: "black", height: "90%" }}
                flexItem
              />
              <Grid
                container
                item
                direction="column"
                sx={{ width: "30%", pl: 1 }}
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  fontSize="0.9rem"
                  sx={{ width: "90%" }}
                >
                  Experience
                </Typography>
                <Typography
                  fontSize="0.9rem"
                  fontWeight="bold"
                  sx={{ width: "90%" }}
                >
                  {data.waitingTime}years
                </Typography>
              </Grid>
              <Divider
                orientation="vertical"
                sx={{ color: "black", height: "90%" }}
                flexItem
              />
              <Grid
                container
                item
                direction="column"
                sx={{ width: "30%", pl: 1 }}
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  fontSize="0.9rem"
                  sx={{ width: "90%" }}
                >
                  Satisfaction
                </Typography>
                <Typography
                  fontSize="0.9rem"

                  fontWeight="bold"
                  sx={{ width: "90%" }}
                >
                  {data.patientSatisfy}%
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="column"
          sx={{ width: "35%", pl: 15, pr: 2 }}
        >
          <Button
            variant="contained"
            sx={{ mt: 2, color: "white", backgroundColor: "danger.main" }}
          >
            Video Consultation
          </Button>
          {/* <Button
            variant="contained"
            sx={{ mt: 2, color: "white", backgroundColor: "primary.main" }}
          >
            Book A ppointment
          </Button> */}
          <AppointmentModal />
        </Grid>
      </Grid>
      <Grid
        container
        item
        sx={{ width: "67%", height: "15%", bgcolor: "white", bgcolor: '#eff7ff' }}
      >
        <Typography
          fontSize="0.9rem"
          sx={{ width: "90%", p:1 }}
        >
          {data.name} - {data.speciality}, Lahore -
          Appointment Detail{data.name} is a {data.desig}... <Link underline="none" href="#">
          Read More
          </Link>
        </Typography>
      </Grid>
      <Grid
        container
        item
        sx={{ width: "99%", height: "15%", bgcolor: "white", bgcolor: 'white', pt: 2, flexWrap: 'wrap' }}>
          <DoctorInfoCard title={data.hospital[0]?.name} available='Today' timing={data.hospital[0]?.timing} price= {data.hospital[0]?.price} id={1}/>
          {data.hospital[1] &&
          <DoctorInfoCard title= {data.hospital[1]?.name} available={data.hospital[1]?.wDays} timing={data.hospital[1]?.timing} price={data.hospital[1]?.price} id={2}/>
          }
          {data.hospital[2] &&
           <DoctorInfoCard title= {data.hospital[2]?.name} available={data.hospital[2]?.wDays} timing={data.hospital[2]?.timing} price={data.hospital[2]?.price} id={3}/>
          }
      </Grid>
    </Grid>
  );
};

export default DoctorlInfo;
