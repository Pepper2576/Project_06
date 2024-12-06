import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './login.css';

function Login() {
  return (
    <div className='login-container tw-h-96 tw-w-96 tw-mt-11'>
      <div className='btn-container tw-flex tw-flex-row tw-justify-center'>
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
