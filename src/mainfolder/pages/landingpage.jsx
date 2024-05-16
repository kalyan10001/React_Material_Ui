import { Accordion, Box, Container } from '@mui/material'
import React from 'react'
import Navbar from '../components/navsection/navbar'
import Herosection from '../components/Hero/Herosection'
import Accordionsection from '../components/Accordionsection'
import Carddisplay from '../components/cardsection/Carddisplay'
import Maintab from '../components/tabsection/Maintab'
import Maingraph from '../components/graphsection/Maingraph'
const Landingpage = ({mode,setmode}) => {
  return (
    <Container>
    <Box>
        <Navbar mode={mode} setmode={setmode}/>
        <Herosection/>
        <Accordionsection/>
        <Carddisplay/>
        <Maintab/>
        <Maingraph/>
    </Box>
    </Container>
  )
}

export default Landingpage
