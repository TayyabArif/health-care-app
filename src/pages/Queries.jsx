import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import QueriesCard from '../components/QueriesCard';
import QueriesDetails from '../components/QueriesDetails';
import DataCard from '../components/Card';

const Queries = () => {
    return (
        <Box component="div" sx={{ height: '100%', width: '100%', bgcolor: '#eeeee4' }}>
            <Grid container direction='column' sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent='space-between' >
                <Grid container item sx={{ width: '100%', height: '10%', bgcolor: 'white', mb: '0.5%', mt: 1, p: 1 }} alignItems='center'>
                    <Button variant="text" sx={{ color: 'black', fontSize: '0.8rem' }}>Home</Button>
                    <KeyboardArrowRightIcon sx={{ color: 'primary.main' }} />
                    <Typography
                        fontSize='0.9rem'
                    >
                       Help Me Marham
                    </Typography>
                </Grid>
                <Grid container item direction='column' sx={{ width: '100%', height: '20%', bgcolor: '#014e78', pt: 6, pb: 18, mb: '1%' }} alignItems="center" justifyContent='center'>
                    <Typography
                        fontSize='2rem'
                        fontWeight='bold'
                        color='#f8f8ff'
                        fontFamily='Consolas'
                    >
                        Help Me Health Care
                    </Typography>
                    <Typography
                        color='#f8f8ff'
                        sx={{ mt: '5px', mb: '20px' }}
                    >
                        All your health related queries solved at one place!

                    </Typography>
                </Grid>
                <Grid container item sx={{ width: '99%', height: '20%', mb: '1%', pl: 10, pt: 2, mt: '-85px' }} alignItems='center'>
                    <QueriesCard value='Ask Questions'/>
                    <QueriesCard value='Free Consultation'/>
                    <QueriesCard value='Video Consultation' />
                </Grid>
                <Grid container item sx={{ width: '98%', height: '50%', bgcolor: 'white', mb: '1%', p: 2 }}>
                   <QueriesDetails
                   heading= 'Book Consultation in Rs. 500'
                   desc='Book video consultation with specialist doctors in as low asRs. 500'
                   id={1}
                   text= 'Book Video Consultation in Rs. 500'
                   src='https://static.marham.pk/assets/images/help/ocinfivehunderd.png'/>
                   <QueriesDetails
                   heading= 'Find A Doctor In Your Area'
                   desc='Book an appointment or video consultation with doctors from 96+ specialities'
                   id={2}
                   text='View all Specialties'
                   src='https://static.marham.pk/assets/images/help/topspec.png'/>
                   <QueriesDetails
                   heading= 'Book Lab Tests'
                   desc='Book your lab tests and avail up to a 25% discount on top laboratories in Pakistan'
                   id={3}
                   text='View Lab Tests'
                   src='https://static.marham.pk/assets/images/help/lab.png'/>
                   <Grid container item direction='column' sx={{ width: '98%', height: '30%', bgcolor: 'white', mb: '1%', p: 2 }}>
                        <Typography>
                        Book Special Offers
                        </Typography>
                        <Grid container item sx={{ width: '98%', height: '80%', bgcolor: 'white', mb: '1%', p: 2 }}>
                        <DataCard title='Dark circles and Treatment' src='https://static.marham.pk/assets/images/deal/dark-circle.png'/>
                        <DataCard title = 'Hydra Facial Treatment' src='https://static.marham.pk/assets/images/deal/hydra-facial.jpg'/>
                        <DataCard title = 'Pigmentation Facial Treatment' src='https://static.marham.pk/assets/images/deal/pigmentation.jpg'/>
                        <DataCard title = 'Acne Scars Treatment' src = 'https://static.marham.pk/assets/images/deal/acne.png'/>
                        <DataCard title = 'PRP Hair Treatment' src = 'https://static.marham.pk/assets/images/deal/prp.jpg'/>
                        </Grid>
                   </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Queries
