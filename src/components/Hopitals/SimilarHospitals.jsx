import React from "react";
import { Link, Grid, Typography } from "@mui/material";

const hospitals = [
  "Health Avenue Hospital",
  "American Medical Complex Hospital",
  "Qanmos Institute Of Mental Health Services Hospital",
  "Hameed Latif Cosmetology Center",
  "Dr Huma Aslam Clinic",
  "Noor Gyne & Medical Center",
];
const SimilarHospitals = () => {
  return (
    <Grid
      container
      item
      sx={{ bgcolor: "white", width: "100%", height: "100%" }}
    >
      <Grid container item sx={{ width: "100%", height: "20%" }}>
        <Typography
          fontSize="1.4rem"
          fontWeight="bold"
          color="primary.main"
          fontFamily="Consolas"
          sx={{ mb: 2 }}
        >
          Similar Hospitals in Lahore
        </Typography>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "79%", mt: "1%" }}>
        {hospitals.map((data) => {
          return (
            <Grid container item sx={{ width: "25%", height: "100%" }}>
              <Link underline="none" href="#" sx={{ mb: 1 }}>
                {data}
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Link underline="none" href="#" sx={{ mb: 1, pl: '90%' }}>
                View All
      </Link>
    </Grid>
  );
};

export default SimilarHospitals;
