import { Stack } from '@mui/material'
import React from 'react'
import Firstchart from './Firstchart'
import Secondchart from './Secondchart'

const Maingraph = () => {
  return (
    <Stack direction='row'>
      <Firstchart/>
      <Secondchart/>
    </Stack>
  )
}

export default Maingraph
