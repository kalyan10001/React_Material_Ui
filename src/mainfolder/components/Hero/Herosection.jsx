import { Box, Stack } from '@mui/material'
import React from 'react'
import Heroimage from './Heroimage'
import Herotext from './Herotext'

const Herosection = () => {
  return (
      <Stack direction="row" spacing={2} justifyContent='space-between'
      sx={{display:{xs:"block",sm:"block",md:"flex"}}}
      >
        <Box sx={{flex:'2'}}>
          <Herotext/>
        </Box>
        <Box sx={{flex:'1'}}>
          <Heroimage/>
        </Box>
      </Stack>
  )
}

export default Herosection
