import React from "react";
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { margin } from "@mui/system";

const Login = () => {

    const paperStyle = { padding: 30, height: '55vh', width: 400, margin: "30px auto" }
    const avatarStyle = { backgroundColor: '#D80032',margin:10}
    const btnStyle = {margin:'20px 0', backgroundColor: '#0B114A'}


    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><FavoriteIcon /></Avatar>
                    <h1>Log In</h1>
                </Grid>
                <TextField margin="dense" label='Username' placeholder='Enter your username' fullWidth required />
                <TextField margin="dense" label='Password' placeholder='Enter your password' type='password' fullWidth required />
                <Button type='submit' style={btnStyle} size="large" variant="contained" fullWidth>Log In</Button>
                <Typography> Do you have an account?
                    <Link href="#">
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login