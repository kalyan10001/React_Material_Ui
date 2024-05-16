import { Box, Typography } from '@mui/material'
import React from 'react'
import Herodivider from './Herodivider'

const Herotext = () => {
  return (
     <Box sx={{
        display:'flex',
        justifyContent:'center',
        width:'100%',
        alignItems:'center',
        height:{xs:"100%",sm:"100%"},
        marginTop:{xs:"20px",sm:"20px"}
     }}>
      <Box>
         <Herodivider/>
      </Box>
     </Box>
  )
}

export default Herotext
