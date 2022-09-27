import { Typography, Grid, Box, Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10%; 
`
const QueriesDetails = () => {
    return (
        <Box component="div" sx={{ height: '99%', width: '100%', bgcolor: 'white', mb: 2,  boxShadow: 1 , borderRadius: '5px', p: 1 }}>
            <Grid container sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent='space-between' >
                <Grid container item sx={{height: '100%', width: '29%', mr: 1}}>
                    <Image src="https://static.marham.pk/assets/images/help/topspec.png" />
                </Grid>
                <Grid container item direction='column' sx={{height: '100%', width: '70%'}} justifyContent='space-between'>
                    <Grid container item  direction='column'>
                        <Typography
                         fontWeight='bold'
                         fontSize = '1.5rem'
                         fontFamily = 'Consolas'
                         >
                            Find A Doctor In Your Area
                        </Typography>
                        <Typography
                         fontSize = '1rem'
                         fontFamily = 'Consolas'>
                            Book an appointment or video consultation with doctors from 96+ specialities
                        </Typography>
                    </Grid>
                    <Button variant="contained" sx={{width: '40%', mt: 2 ,color: 'white', backgroundColor: 'primary.main', mt: '12%'}}>View all Specialists</Button>
                </Grid>

            </Grid>

        </Box>

    )
}

export default QueriesDetails
