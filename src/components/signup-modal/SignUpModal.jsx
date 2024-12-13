import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './sign-up-modal.css';

function SignUpModal({ showModal, closeModal }) {
  if (!showModal) return null;
  return (
    <div className='modal-container'>
      <div className='header-container tw-flex tw-flex-row'>
        <h1 cla>Sign Up</h1>
      </div>
      <div className='form-container'>
        <div className='mb-3'>
          <label for='formGroupExampleInput' className='form-label'>
            First Name
          </label>
          <input
            type='text'
            className='form-control'
            id='formGroupExampleInput'
            placeholder='First Name'
          />
        </div>
        <div className='mb-3'>
          <label for='formGroupExampleInput' className='form-label'>
            Last Name
          </label>
          <input
            type='text'
            className='form-control'
            id='formGroupExampleInput'
            placeholder='Last Name'
          />
        </div>
        <div className='mb-3'>
          <label for='formGroupExampleInput2' className='form-label'>
            Email
          </label>
          <input
            type='text'
            className='form-control'
            id='formGroupExampleInput2'
            placeholder='Email'
          />
        </div>
        <div className='mb-3'>
          <label for='formGroupExampleInput2' className='form-label'>
            Password
          </label>
          <input
            type='text'
            className='form-control'
            id='formGroupExampleInput2'
            placeholder='Password'
          />
        </div>
        <div className='mb-3'>
          <label for='formGroupExampleInput2' className='form-label'>
            Confirm Password
          </label>
          <input
            type='text'
            className='form-control'
            id='formGroupExampleInput2'
            placeholder='Confirm Password'
          />
        </div>
      </div>
      <div className='btn-container'>
        <button type='button' className='btn btn-success m-1'>
          Sign Up
        </button>
        <button type='button' className='btn btn-dark m1' onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SignUpModal;
