import { Container, Box, Paper, Typography, Stack, TextField, Button } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <Container maxWidth="xl" disableGutters >
    <Box sx={{bgcolor: '#cfe8fc',height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Paper elevation={0} sx={{bgcolor:"#ffffff",px:4,py:2}} >
            <Typography variant='h4' sx={{textAlign:"center",mb:2,fontWeight:"600"}} >
                Login
            </Typography>
            <form>
                <Stack spacing={2} >
                    <TextField label="Email" type="email" size="small" />
                    <TextField label="Password" type="password" size="small" />
                    <Button variant="contained" disableElevation disableRipple  >
                        Login
                    </Button>
                </Stack>
            </form>
        </Paper>
    </Box>
</Container>
  )
}

export default Login