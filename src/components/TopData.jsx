import React from 'react'
import { Grid, Link, Typography } from '@mui/material'
const TopData = ({ name, data }) => {
    return (
        <Grid container direction='column' sx={{pt: 3}}>
            <Typography
            fontWeight='bold'
            fontSize = '1.3rem'
            fontFamily = 'Consolas'
            sx={{color: 'white'}}
            >
                {name}
            </Typography>
            {data.map(data => {
                return (
                    <Link underline="none" href= '#' sx={{color: 'white', p: 1, width: '200px'}}
                    fontSize = '1rem'
                    fontFamily = 'Consolas'
                    >{data}</Link>
                )
            })}
        </Grid>
    )
}

export default TopData
