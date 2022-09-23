import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Grid, Stack } from '@mui/material';
import Advantages from './Advantages';
import { footerfirstdata } from '../footerfirst';
import { Divider } from "@material-ui/core";
import { footerpolicies } from '../footerpolicies';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © 2015-2022 health care Pvt. Ltd. - All Rights Reserved'}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (
    <Box component='div' sx={{ width: "100%", height: '100%', p: 0 }}>
      <Grid container direction="column" sx={{ backgroundColor: 'primary.light', width: "100%", height: "100%" }} justifyContent='center' alignItems='center'>
        <Grid container item sx={{ height: "23%", width: '100%', mt: '2%' }} alignItems='center'>
          {footerfirstdata.map(data => {
            return (
              <Advantages data={data} />
            )
          })}
        </Grid>
        <Grid container item sx={{ height: "25%", width: '100%' }}>
          <Divider />
        </Grid>
        <Grid container item sx={{ height: "25%", width: '100%' }}>
          {footerpolicies.map(data => {
            return(
              <Button variant="text" sx={{ color: 'white' }}>
                {data}
                </Button>
            )
          })}
        </Grid>
        <Grid constaineritem sx={{ height: "25%", width: '100%' }}>
          <Copyright />
        </Grid>
      </Grid>
    </Box>
  );
}



export default Footer;