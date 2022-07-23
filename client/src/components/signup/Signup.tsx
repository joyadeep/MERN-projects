import { Box, Button, Container, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
   <Container maxWidth="xl" disableGutters >
    <Box sx={{bgcolor: '#cfe8fc',height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Paper elevation={0} sx={{bgcolor:"#ffffff",px:4,py:2}} >
        <Typography variant='h4' sx={{textAlign:"center",mb:2,fontWeight:"600"}} >
                Register
        </Typography>
        <form>
            <Stack spacing={2}>
                <TextField label="FullName" type="text" size="small" />
                <TextField label="Email" type="email" size="small" />
                <TextField label="Password" type="password" size="small"/>
                <TextField label="Confirm password" type="password" size="small" />
                <Button variant="contained" disableElevation disableRipple >Register</Button>
            </Stack>
        </form>
        </Paper>
    </Box>

   </Container>
  )
}

export default Signup