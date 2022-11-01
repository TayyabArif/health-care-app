import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Link } from '@mui/material';
import styled from 'styled-components'

const Image = styled.img`
    height: 90%;
    width: 90%;
    border-radius: 50%;
`
export default function SergriesCard() {
  return (
    <Card sx={{ maxWidth: 310, mr: 3, mb: 1, width: '100%'}} alignItems = 'center'>
      <CardContent sx={{p: 1}} alignItems = 'center'>
        <Grid container sx={{ width: '100%', height: '100%', p: 0}}>
          <Grid container item sx={{width: '15%', height: '100%', p: 0}} >
            <Image src="https://staticconnect.marham.pk/assets/doctors/7132/asst-prof-dr-shysta-shaukat-gynecologist-lahore-91_170X170.jpg" />
          </Grid>
          <Grid container item direction ='column' sx={{width: '78%', height: '100%', p: 0}}>
          <Link href="#" sx={{p: 1, fontSize: '0.9rem'}}>Asst. Prof. Dr. Shysta Shaukat</Link>
          <Typography
                    fontSize="0.9rem"
                    fontWeight="bold"
                    fontFamily="Consolas"
                    sx={{pl: 1, pt: 1}}
                  >
                    Gynecologist
                  </Typography>
                  <Typography
                    fontSize="1.1rem"
                    color = 'primary.main'
                    fontFamily="Consolas"
                    sx={{pl: 1, pt: 1}}
                  >
                    22+ years experience
                  </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
