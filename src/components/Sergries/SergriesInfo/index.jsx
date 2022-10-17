import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "styled-components";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import SpatialAudioOffOutlinedIcon from "@mui/icons-material/SpatialAudioOffOutlined";
import InfoIcon from "@mui/icons-material/Info";
import SergriesCard from "../SergriesCard";

const Image = styled.img`
  height: 160px;
  width: 170px;
  border-radius: 10%;
`;
const SergrieslInfo = () => {
  return (
    <Grid
      container
      item
      direction="column"
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "white",
        pt: 1,
        pl: 5,
        mt: 1,
        mb: 1
      }}
    >
      <Grid
        container
        item
        sx={{ width: "98%", height: "60%", bgcolor: "white", pt: 1 }}
        justifyContent="space-between"
      >
        <Grid container item sx={{ width: "65%" }}>
          <Grid
            container
            item
            direction="column"
            sx={{ width: "25%" }}
            justifyContent="center"
            alignItems="center"
          >
            <Image src="https://www.marham.pk/assets/images/surgery-default.png" />
          </Grid>
          <Grid container item direction="column" sx={{ width: "60%", ml: 3 }}>
            <Link href="#">Stem Cell Treatment</Link>
            <Grid container item sx={{ mb: 1, width: "100%", pt: 1 }}>
              <PeopleAltOutlinedIcon
                sx={{ color: "gray", fontSize: "1rem", pt: 0.5 }}
              />
              <Typography
                fontSize="1rem"
                fontFamily="Consolas"
                color="primary.light"
                sx={{ pl: 1 }}
              >
                1 Doctors Available
              </Typography>
            </Grid>
            <Grid container item justifyContent="space-between">
              <Grid
                container
                item
                direction="column"
                sx={{ width: "40%", pt: 2 }}
              >
                <Grid container item sx={{ mb: 1, width: "100%" }}>
                  <ThumbUpOutlinedIcon
                    sx={{ color: "gray", fontSize: "1rem", pt: 0.5 }}
                  />
                  <Typography
                    fontSize="1rem"
                    fontWeight="bold"
                    fontFamily="Consolas"
                    sx={{ pl: 1 }}
                  >
                    PMC Verified
                  </Typography>
                </Grid>
                <Typography
                  sx={{ ml: 3 }}
                  fontSize="1rem"
                  fontFamily="Consolas"
                >
                  Surgeons
                </Typography>
              </Grid>
              <Grid
                container
                item
                direction="column"
                sx={{ width: "40%", pt: 2 }}
              >
                <Grid container item sx={{ mb: 1, width: "100%" }}>
                  <SpatialAudioOffOutlinedIcon
                    sx={{ color: "gray", fontSize: "1rem", pt: 0.5 }}
                  />
                  <Typography
                    fontSize="1rem"
                    fontWeight="bold"
                    fontFamily="Consolas"
                    sx={{ pl: 1 }}
                  >
                    Experienced
                  </Typography>
                </Grid>
                <Typography
                  sx={{ ml: 3 }}
                  fontSize="1rem"
                  fontFamily="Consolas"
                >
                  Doctors
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
            variant="outlined"
            sx={{ mt: 2, color: "danger.main", borderColor: "danger.main" }}
          >
            <InfoIcon sx={{ fontSize: "1rem" }} />
            Get More Info
          </Button>
          <Button
            variant="contained"
            sx={{ mt: 2, color: "white", backgroundColor: "danger.main" }}
          >
            View Surgeons
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="column"
        sx={{
          width: "99%",
          height: "15%",
          bgcolor: "white",
          bgcolor: "white",
          pt: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography
          fontSize="1.3rem"
          fontWeight="bold"
          fontFamily="Consolas"
          color="primary.main"
          sx={{ pl: 1, pb: 4 }}
        >
          Available Surgeons
        </Typography>
        <Grid container item >
        <SergriesCard />
        <SergriesCard />
        <SergriesCard />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SergrieslInfo;
