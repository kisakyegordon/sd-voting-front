import React, { Component } from 'react';
import login from '../assets/images/user.svg';


const initialState = {
    name: '',
    email: '',
    password: '',
    nameError: '',
    emailError: '',
    passwordError: ''
}

class Register extends Component {
    state = initialState;

    handleChange = e => {
        e.preventDefault();
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate = () => {
        let nameError = '';
        let emailError = '';
        let passwordError = '';

        // validate name
        if (!this.state.name) {
            nameError = "Name field is required";
        }

        // validate email
        let emailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;
        if (!this.state.email.match(emailFormat)) {
            emailError = "invalid email";
        }
        
        // validate password
        if (!this.state.password.match(/[-!@#$%^&*()_+|~=`{}\]:";'<>?,.]/) && !this.state.password.length < 6) {
            passwordError = "password must contain at least 6 characters with symbols";
        }

        if (nameError || emailError || passwordError) {
            this.setState({
                emailError,
                nameError,
                passwordError
            })
            return false;
        }
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState)
        }
        
    }

    render() {
        return (
            <div className='auth-container'>
            <div className='auth-img'>
                <img className='login-img' src={login} alt='login-img' />
            </div>
            <div className='login-container'>
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <h4>Register</h4>
                    <input className='form-input' onChange={this.handleChange}  name='name' value={this.state.name} placeholder='name'/>
                    <div className='error-thin'>
                        {this.state.nameError}
                    </div>

                    <input className='form-input' onChange={this.handleChange} name='email' value={this.state.email} placeholder='email'/>
                        <div className='error-thin'>
                            {this.state.emailError}
                        </div>

                        <input className='form-input' onChange={this.handleChange} name='password' value={this.state.password} type='password' placeholder='password'/>
                        <div className='error-thin'>
                            {this.state.passwordError}
                        </div>

                    <button className='form-btn' type='submit'>Sign In</button>
                    <div className='error'>
                        {this.state.inputError}
                    </div>
                </form>
            </div>
        </div>
    </div>
        );
    }
}

export default Register;