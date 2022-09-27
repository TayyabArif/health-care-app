import { Typography } from '@mui/material'
import React from 'react'
import TransitionsModal from './Modal'

const Help = () => {
  return (
    <div>
      <Typography
      sx={{pb: 1}}>
        Do you need help?
      </Typography>
      <TransitionsModal name={'Call Helpline'} />
    </div>
  )
}

export default Help
