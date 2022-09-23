import React from "react";
import Header from "../components/Header";
import Grid from "@mui/material/Grid";
import { Divider } from "@material-ui/core";
import Footer from "../components/Footer";
// import Announcement from "../components/Announcement";

const Main = ({ children }) => {
  return (
    <Grid container direction="column" spacing={1} sx={{ bgcolor: '#eeeee4'}} >
      <Grid item flex={2} sx={{ height: "20%" }}>
        <Header />
      </Grid>
      <Grid item flex={8} sx={{ height: "60%", width: "100%" , bgcolor: 'white'}}>
        {children}
      </Grid>
      <Grid item flex={1} sx={{ height: '20%'}}>
        <Divider light={true} />
        <Footer />
      </Grid>
    </Grid>
  );
};
export default Main;