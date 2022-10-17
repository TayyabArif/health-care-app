import React from "react";
import { Link, Grid, Typography } from "@mui/material";

const hospitals = [
  "Whitening Injections",
  "Microneedling",
  "Acne Scar Treatment",
  "Infertility Treatment",
  "Hydrafacial",
  "Teeth Whitening",
  "Chemical Peeling",
  "Removal Of Moles & Warts",
  "Diagnostic Laparoscopy",
  "Laparoscopy",
  "Braces",
];
const Services = () => {
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
        {hospitals.map((data) => {
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

export default  Services;
