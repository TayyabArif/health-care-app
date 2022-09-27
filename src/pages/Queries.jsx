import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SpecialistCard from '../components/SpecialistCard';
import FAQ from '../components/FAQ';
import AllSpecialistCard from '../components/AllSpecialistCard';
import ConsultationDetailCard from '../components/ConsultationDetailCard';
import QueriesCard from '../components/QueriesCard';
import QueriesDetails from '../components/QueriesDetails';

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
                    <QueriesCard />
                    <QueriesCard />
                    <QueriesCard />
                </Grid>
                <Grid container item sx={{ width: '98%', height: '50%', bgcolor: 'white', mb: '1%', p: 2 }}>
                   <QueriesDetails />
                   <QueriesDetails />
                   <QueriesDetails />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Queries 

