import React, { Component } from 'react';

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
            <div>
                <div className='register'>
                    <h2>Register</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input className='form-input' onChange={this.handleChange} name='name' value={this.state.name} placeholder='name'/>
                        <div style={{color:'red', fontSize: 12}}>
                            {this.state.nameError}
                        </div>

                        <input className='form-input' onChange={this.handleChange} name='email' value={this.state.email} placeholder='email'/>
                        <div style={{color:'red', fontSize: 12}}>
                            {this.state.emailError}
                        </div>

                        <input className='form-input' onChange={this.handleChange} name='password' value={this.state.password} type='password' placeholder='password'/>
                        <div style={{color:'red', fontSize: 12}}>
                            {this.state.passwordError}
                        </div>

                        <button className='form-btn' type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;