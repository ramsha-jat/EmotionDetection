import React from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'


const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })


  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    } 

    axios.post("http://127.0.0.1:3002/signin", actualData,
      {
          headers: {
              'Content-Type': 'application/json',
          }
      }
  ).then((res) => {
      console.log(res);
      if(res.data.success){
          console.log(actualData);
          document.getElementById('login-form').reset()
          setError({ status: true, msg: "Login Success", type: 'success' })
          navigate('/dashboard')
      }


  }).catch((err) => {
      console.log(err);
      alert("Wrong Email or Password! ")
  })
   
  }
  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
      </Box>
      <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
      {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
    </Box>
   </>;
};

export default UserLogin;