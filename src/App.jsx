
import './App.css'
import { Box, ThemeProvider, createTheme } from '@mui/material'
import Landingpage from './mainfolder/pages/landingpage'
import { useState } from 'react'
const  App=()=> {
const [mode,setmode]=useState("light")
const darkTheme=createTheme({
  palette:{
    mode:mode
  }
})
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"}>
      <Landingpage mode={mode} setmode={setmode}/>
    </Box>
    </ThemeProvider>
  )
}

export default App
