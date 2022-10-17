import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import DoctorInfoCard from "./DoctorInfoCard";

const Image = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
`;
const DoctorlInfo = () => {
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
            <Image src="https://staticconnect.marham.pk/assets/doctors/2899/asst-prof-dr-salman-javed-gastroenterologist-lahore-37_170X170.JPG" />
          </Grid>
          <Grid container item direction="column" sx={{ width: "60%", ml: 3 }}>
            <Link href="#">Asst. Prof. Dr. Salman Javed</Link>
            <Typography
              fontSize="1rem"
              fontFamily="Consolas"
              sx={{ width: "90%", pt: 1 }}
            >
              Gastroenterologist
            </Typography>
            <Typography
              fontSize="0.8rem"
              fontFamily="Consolas"
              sx={{ width: "90%", pt: 1 }}
            >
              MBBS , FRCP (LONDON) , (Pb) , MD (USA) , MACP (USA) , FCPS
              (Gastro) Endoscopy, Peg Tube Placement{" "}
              <Link underline="none" href="#">
                +11 more
              </Link>
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
                  fontFamily="Consolas"
                  sx={{ width: "90%" }}
                >
                  Reviews
                </Typography>
                <Typography
                  fontSize="0.9rem"
                  fontFamily="Consolas"
                  fontWeight="bold"
                  sx={{ width: "90%" }}
                >
                  1964+
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
                  fontFamily="Consolas"
                  sx={{ width: "90%" }}
                >
                  Experience
                </Typography>
                <Typography
                  fontSize="0.9rem"
                  fontFamily="Consolas"
                  fontWeight="bold"
                  sx={{ width: "90%" }}
                >
                  17 years
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
                  fontFamily="Consolas"
                  sx={{ width: "90%" }}
                >
                  Satisfaction
                </Typography>
                <Typography
                  fontSize="0.9rem"
                  fontFamily="Consolas"
                  fontWeight="bold"
                  sx={{ width: "90%" }}
                >
                  94%
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
          <Button
            variant="contained"
            sx={{ mt: 2, color: "white", backgroundColor: "primary.main" }}
          >
            Book A ppointment
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        sx={{ width: "67%", height: "15%", bgcolor: "white", bgcolor: '#eff7ff' }}
      >
        <Typography
          fontSize="0.9rem"
          fontFamily="Consolas"
          sx={{ width: "90%", p:1 }}
        >
          Asst. Prof. Dr. Salman Javed - Gastroenterologist, Lahore -
          Appointment DetailsAsst. Prof. Dr. Salman Javed is a qualified Gastroenterologist
          in Lahore with over 17 years in gastroenterology... <Link underline="none" href="#">
          Read More
          </Link>
        </Typography>
      </Grid>
      <Grid
        container
        item
        sx={{ width: "99%", height: "15%", bgcolor: "white", bgcolor: 'white', pt: 2, flexWrap: 'wrap' }}>
          <DoctorInfoCard />
          <DoctorInfoCard />
          <DoctorInfoCard />
      </Grid>
    </Grid>
  );
};

export default DoctorlInfo;
