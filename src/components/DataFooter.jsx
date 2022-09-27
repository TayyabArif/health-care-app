import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import TopData from './TopData'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
const labtests = ['Labs in Lahore', 'Labs in Karachi', 'Labs in Islamabad', 'Labs in Pakistan']
const topcities = [
    'Lahore',
    'Karachi',
    'Islamabad',
    'Rawalpindi',
    'Faislabad',
    'Peshawar',
    'Multan',
    'Queeta',
    'Gujranwala',
    'Sargodha',
    'Hydrabad',
    'Bahawlpur',
    'Sialkot',
    'Rahim Yar Khan'
]
const tophospitals = [
    'City International Hospital',
    'Doctors Hospital',
    'Hameed Latif Hospital',
    'Akram Hospital',
    'Chughtai Medical Center',
    'Iqra Medical Complex Hospital',
    'Surgimed Hospital',
    'Omar Hospital & Cardiac Centre',
    'Hilal-E-Ahmar House Hospital',
    'Health Icon Medical & Diagnostic Centre',
    'Khan Medical City Hospital',
    'Faisal Hospital',
    'Saleem Medical Complex Hospital',
    'Kanan Clinic',
]
const topspecialities = [
    'Dermatologist',
    'Neurologist',
    'Gynecologist',
    'Urologist',
    'Gastroenterologist',
    'Pulmonologist / Lung Specialist',
    'Orthopedic Surgeon',
    'Pediatrician',
    'General Physician',
    'Nephrologist',
    'Sexologist',
    'Ent Specialist',
    'Eye Surgeon',
    'Neuro Surgeon'
]
const DataFooter = () => {
    return (
        <Grid container sx={{ bgcolor: '#014e78' , height: '100%', width: '100%', pl: 15 }} >
            <Grid container item sx={{ width: '25%', height: '100%' , mt: 5}}>
                <Grid container item sx={{width: '70%', height: '30%', pt: 5}} justifyContent= 'space-evenly'>
                   <Button  variant = 'contained' sx={{width: '5px',height: '30px' ,p: 0, backgroundColor: "rgba(255,255,255, 0.6)", }}>
                   <FacebookIcon sx={{width: '100%', height: '100%', color: 'white', fontSize: '2rem'}}/>
                   </Button>
                   <Button  variant = 'contained' sx={{width: '5px',height: '30px' ,p: 0,  backgroundColor: "rgba(255,255,255, 0.6)"}}>
                   <InstagramIcon sx={{width: '100%', height: '100%', color: 'white', fontSize: '2rem'}}/>
                   </Button>
                   <Button  variant = 'contained' sx={{width: '5px',height: '30px' ,p: 0,  backgroundColor: "rgba(255,255,255, 0.6)"}}>
                   <TwitterIcon sx={{width: '100%', height: '100%', color: 'white', fontSize: '2rem'}}/>
                   </Button>
                   <Button  variant = 'contained' sx={{width: '5px',height: '30px' ,p: 0, mt: 1,  backgroundColor: "rgba(255,255,255, 0.6)"}}>
                   <SmartDisplayRoundedIcon sx={{width: '100%', height: '100%', color: 'white', fontSize: '2rem',}}/>
                   </Button>
                </Grid>
                <TopData name='Lab Tests' data={labtests} />
            </Grid>
            <Grid container item sx={{ width: '25%', height: '100%' }}>
                <TopData name='Top Cities' data={topcities} />
            </Grid>
            <Grid container item direction='column' sx={{ width: '25%', height: '100%' }}>
                <TopData name='Top Hospitals' data={tophospitals} />
            </Grid>
            <Grid container item direction='column' sx={{ width: '25%', height: '100%' }}>
                <TopData name='Top Specialities' data={topspecialities} />
            </Grid>
        </Grid>
    )
}

export default DataFooter
