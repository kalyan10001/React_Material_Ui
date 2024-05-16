import { Stack } from '@mui/material'
import React from 'react'
import Firstcard from './Firstcard'
import Secondcard from './Secondcard'
import Thirdcard from './Thirdcard'

const Carddisplay = () => {
  return (
    <Stack direction='row' gap={3} m={4}>
    <Firstcard/>
    <Secondcard/>
    <Thirdcard/>
    </Stack>
  )
}

export default Carddisplay
