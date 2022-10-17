import React from "react";
import { Link, Grid, Typography } from "@mui/material";

const diseases = [
  "Creutzfeldt-Jakob Disease",
  "Bacillus Anthracis",
  "Blastomycosis  ",
  "Babesiosis",
  "Vaginal Infection",
  "Botulism",
  "Pollinosis",
  "Genital Herpes",
  "Nosebleed",
  "Seborrheic Dermatitis And Crib Cap",
  "Body Lice",
];
const Diseases = () => {
  return (
    <Grid
      container
      item
      sx={{ bgcolor: "white", width: "100%", height: "100%" }}
    >
      <Grid container item sx={{ width: "100%", height: "20%" }}>
        <Typography
          fontSize="1rem"
          fontWeight="bold"
          color="primary.main"
          fontFamily="Consolas"
        >
          Common diseases in Pakistan
        </Typography>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "79%" }}>
        {diseases.map((data) => {
          return (
            <Grid container item sx={{ width: "25%", height: "100%" }}>
              <Link underline="none" href="#" sx={{ pb: 3, fontSize: '0.9rem'  }}>
                {data}
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Diseases;
