import React from 'react'
import { Avatar, Grid, Paper,TextField,Typography,Button } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';


const Signup=()=>{
    const paperStyle={padding:20 ,width:300, margin:"0 auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:'green'}
const formStyle={margin:10}
     return(
       <Grid>
           <Paper  style={paperStyle}>
               <Grid align='center'>
                   <Avatar style={avatarStyle}>
                    <AddCircleOutlinedIcon/>
                   </Avatar>
                   <h2 style={headerStyle}>Sign Up</h2>
                   <Typography variant='caption'>PLease fill this form to create an account !</Typography>
               </Grid>

              <form style={formStyle}>
                  <TextField fullWidth label='Name' placeholder='Enter your name' mt-10 />
                  
                  <TextField fullWidth label='Email' placeholder='Enter you email' mt-10 />

                  <FormControl style={{marginTop:'5'}}>
      <FormLabel id="demo-customized-radios">Gender</FormLabel>
      <RadioGroup
       
        aria-label="gender"
        name="gender" style={{display:'initial'}}>
      
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
                  
                  <TextField fullWidth label='Phone Number' mt-10/>
                  
                  <TextField fullWidth label='Password' mt-10 />
                
                  <TextField fullWidth label='Confirm Password' mt-10 />
                  <FormGroup>
      <FormControlLabel control={<Checkbox name="checkedA"/>}label="I accept the terms and conditions." />
      
    </FormGroup>
                
                  <Button type='submit' variant='contained' color='primary' mt-10>SIGN UP</Button>
                
              </form>
           </Paper>
       </Grid>
     )

}

export default Signup;