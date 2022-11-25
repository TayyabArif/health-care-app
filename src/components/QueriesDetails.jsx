import { Typography, Grid, Box, Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { labTests } from '../redux/actions/LabTests'

const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10%;
`
const QueriesDetails = ({heading,desc,id,text,src}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (event, name) => {
        dispatch(labTests(event))
        navigate(`/lab%20test/${event}`, { state: {name: 'Lab name', data: event, lab: name} })
    };
    return (
        <Box component="div" sx={{ height: '99%', width: '100%', bgcolor: 'white', mb: 2,  boxShadow: 1 , borderRadius: '5px', p: 1 }}>
            <Grid container sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent='space-between' >
                <Grid container item sx={{height: '100%', width: '29%', mr: 1}}>
                    <Image src = {src} />
                </Grid>
                <Grid container item direction='column' sx={{height: '100%', width: '70%'}} justifyContent='space-between'>
                    <Grid container item  direction='column'>
                        <Typography
                         fontWeight='bold'
                         fontSize = '1.5rem'
                         fontFamily = 'Consolas'
                         >
                            {heading}
                        </Typography>
                        <Typography
                         fontSize = '1rem'
                         fontFamily = 'Consolas'>
                            {desc}
                        </Typography>
                    </Grid>
                    {id === 1 &&
                      <Button variant="contained" sx={{width: '40%', mt: 2 ,color: 'white', backgroundColor: 'primary.main', mt: '12%'}}
                      onClick={() => navigate('/online-consultation')}>{text}</Button>
                    }
                    {id === 2 &&
                      <Button variant="contained" sx={{width: '40%', mt: 2 ,color: 'white', backgroundColor: 'primary.main', mt: '12%'}}
                      onClick={() => navigate('/online-consultation')}>{text}</Button>
                    }
                    {id === 3 &&
                      <Button variant="contained" sx={{width: '40%', mt: 2 ,color: 'white', backgroundColor: 'primary.main', mt: '12%'}}
                      onClick={() => handleChange('chugtai lab', 'Chughtai Lab')}>{text}</Button>
                    }
                    </Grid>

            </Grid>

        </Box>

    )
}

export default QueriesDetails
