import React from "react";
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const SignUp=()=>{
    const paperStyle = {padding: '30px 20px', width:400, margin:"30px auto"}
    const headerStyle = {margin: 0}
    const avatarStyle = {backgroundColor: '#D80032', margin:10}
    const btnStyle = {margin:'20px 0', backgroundColor: '#0B114A'}

    return(
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <FavoriteBorderIcon/>
                    </Avatar>
                    <h1 style={headerStyle}>Sign Up</h1>
                    <Typography variant="caption">Please fill this form to create an account</Typography>
                </Grid>
                <form>
                    <TextField fullWidth margin="dense" label="Name" placeholder='Enter your name' required/>
                    <TextField fullWidth margin="dense" label="Username" placeholder='Enter your username' required/>
                    <TextField fullWidth margin="dense" label="Email" placeholder='example@outlook.com' required/>
                    <TextField fullWidth margin="dense" label="Password" placeholder='Enter your password' required/>
                    <TextField fullWidth margin="dense" label="Confirm Password" placeholder='Confirm your password' required/>
                    <Button type="submit" style={btnStyle} size="large" variant="contained" fullWidth>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp;