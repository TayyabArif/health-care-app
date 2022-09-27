import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function OffersDetailsCard() {
    return (
        <Card sx={{ minWidth: 400, mr: 2 }}>
            <CardContent>
                <Typography
                 fontSize='1.3rem'
                 fontWeight = 'bold'
                 color='primary.main'>
                LASIK Microkeratome
                </Typography>
                <Grid container direction='column'>
                <Grid container item sx={{mt: 1, mb: 1}} justifyContent='space-between'>
                    <Typography> Fee</Typography>
                    <Typography> 85,000</Typography>
                </Grid>
                <Grid container item sx={{mt: 1, mb: 1}} justifyContent='space-between'>
                <Typography> CLinic</Typography>
                    <Typography> National Eye Center</Typography>
                </Grid>
                <Grid container item sx={{mt: 1, mb: 1}} justifyContent='space-between'>
                <Typography> Location</Typography>
                    <Typography> Sanda Road</Typography>
                </Grid>
                </Grid>
            </CardContent>
            <CardActions>
            <Button variant="outlined" sx={{mt: 2, width: '100%', color: 'danger.main', borderColor: 'danger.main'}}>Book Now</Button>
            </CardActions>
        </Card>
    );
}
