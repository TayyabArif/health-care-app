import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid, Stack } from '@mui/material';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
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
    <Box component='div' sx={{ mt: 3 ,width: "100%"}}>
      <Grid container direction="column" justifyContent="space-between" alignItems="center" sx={{ backgroundColor: 'primary.light', py: 6 , width: "100%", height: "80%"}}>
          <Grid container item justifyContent="space-arround" alignItems="center">
            <Grid item sx={{width: "25%"}}>
              POPULAR Features
              <Stack spacing={2}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  color="text.secondary"
                  component="p"
                >
                  Consinement Clearance
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="left"
                  color="text.secondary"
                  component="p"
                >
                  Custom Checking
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="left"
                  color="text.secondary"
                  component="p"
                >
                  Easy to manage
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="left"
                  color="text.secondary"
                  component="p"
                >
                  Clear Duties
                </Typography>
              </Stack>
            </Grid>
            <Grid item sx={{width: "50%"}} >
            <Typography
                  variant="subtitle1"
                  align="left"
                  color="text.secondary"
                  component="p"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Distinctio omnis quo fuga aliquid tempore, incidunt assumenda 
                  maxime odio reprehenderit debitis commodi aperiam. Dolorem totam 
                  eaque qui neque officiis expedita accusamus?
                </Typography>
            </Grid>
            <Grid item sx={{width: "25%"}} alignSelf= "center" >
              <Stack direction='row' spacing={2}>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
              </Stack>
            </Grid>
          </Grid>
          <Grid item sx={{height: "20%"}}>
            <Copyright />
          </Grid>
      </Grid>
    </Box>
  );
}



export default Footer;