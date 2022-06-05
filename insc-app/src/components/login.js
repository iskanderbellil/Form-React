import React from 'react'
import { Avatar, Button, Grid,Paper, TextField, Typography,Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const Login=({handleChange})=>{
    const paperStyle={padding :20 , height:'75vh' ,width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'green'}
    const btnstyle={margin:'8px 0'}
    const passWord={margin:'10px 0'}
    return(
     <Grid>
         <Paper  style={paperStyle}>
            <Grid align="center">
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign In</h2>
            </Grid>
            <TextField label='Username' placeholder='Enter Username' fullWidth required/>
            <TextField label='Password' placeholder='Enter Password' type='password'style={passWord} fullWidth required/>
            
                <FormControlLabel 
                control={
                <Checkbox 
                name="checkedB"
                color="primary"
                fullWidth />
            } 
                label="Remember me" 
                />
                       
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign In</Button>  

        <Typography>
      <Link href="#">Forgot Password</Link>
      </Typography>
      <Typography> Do you have an account ?
      <Link href="#" onClick={()=>handleChange("event",1)}>
          Sign Up</Link>
      </Typography>
         </Paper>
     </Grid>

        
    )
}

export default Login;