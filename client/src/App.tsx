import { Box, Container, FormControl, FormGroup, TextField } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'

function App() {

 return(
//   <h1>Hello world</h1>
<Container>
    <Box sx={{m:5}}>
        <form>
            <TextField label="Email" type="email" size="small" sx={{bgcolor:"success"}} />
            <br />
            <TextField label="Password" type="password" size="small"/>
        </form>
    </Box>
</Container>
 )
}

export default App
