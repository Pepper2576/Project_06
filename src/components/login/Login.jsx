import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='login-container tw-h-96 tw-w-96 tw-mt-11 tw-flex tw-flex-col '>
      <div className='header-container tw-mt-10 tw-ml-10'>
        <h1>Login</h1>
      </div>
      <div className='input-container tw-m-10'>
        <label htmlFor='email'>Enter email</label>
        <br></br>
        <input
          type='text'
          className='tw-bg-slate-200 tw-border-black tw-rounded'
        />
        <br></br>
        <label htmlFor='password'>Enter password</label>
        <br></br>
        <input
          type={showPassword ? 'text' : 'password'}
          className='tw-bg-slate-200 tw-rounded'
        />
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={() => setShowPassword(!showPassword)}
          id='hide-btn'
        >
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
      </div>
      <div className='btn-container tw-flex tw-flex-row tw-justify-center tw-mt-2'>
        <button type='button' class='btn btn-primary m-1'>
          Login
        </button>
        <button type='button' class='btn btn-primary m-1'>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
