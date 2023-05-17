import React from 'react';
import {TextField, FormControlLabel, Checkbox, Button, Box} from '@mui/material';
import axios from "axios";

const Registration = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log('-------------------------------------');
        console.log(data.get('name'));

        axios.post("http://10.102.168.193:3002/signup", {
            name:data.get('name'),
            email:data.get('email'),
            password:data.get('password')
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })


        // setError({status: true, msg: "All Fields are Required", type: 'error'})
        // console.log('all fields are required');

    }
    return <>
        <Box component='form' noValidate sx={{mt: 1}} id='registration-form'  onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id='name' name='name' label='Name'/>
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address'/>
            <TextField margin='normal' required fullWidth id='password' name='password' label='Password'
                       type='password'/>
            <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation'
                       label='Confirm Password' type='password'/>
            <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc"/>}
                              label="I agree to term and condition."/>
            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{mt: 3, mb: 2, px: 5}}>Join</Button>
            </Box>
        </Box>
    </>;
};

export default Registration;