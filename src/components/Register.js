import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <div className='register'>
                    <h2>Register</h2>
                    <input className='form-input' type='text' placeholder='name'/>
                    <input className='form-input' type='email' placeholder='email'/>
                    <input className='form-input' type='password' placeholder='password'/>
                    <input className='form-btn' type='submit' value='Sign up' />
                </div>
            </div>
        );
    }
}

export default Register;