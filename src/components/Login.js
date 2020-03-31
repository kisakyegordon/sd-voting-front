import React, { Component } from 'react';
import * as API from '../utils/api';
import { Redirect } from 'react-router-dom';
import logo from '../logo.svg';

const initialState = {
    email: '',
    password: '',
    inputError: ''
}

class Login extends Component {
    state = {
        toHome: false,
        email: '',
        password: '',
        inputError: ''
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })

    }

    validate = () => {
        let inputError = '';

        // validate input
        if (!this.state.email && !this.state.password) {
            inputError = "email and password are required (just input anything for now)";
        }

        if (inputError) {
            this.setState({
                inputError
            })
            return false;
        }
        return true;
    }

    handleSignIn = (e) => {
        e.preventDefault();

        let isValid = this.validate();
        if (isValid) {

            // authenticate user
            API.fakeAuth.authenticate(() => {
                this.setState(() => ({
                    toHome: true
                }))
            });

            this.setState(initialState);
        }

    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/elections'} }
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to={from} />
        }
        return (
            <div className='login'>
                <img src={logo} alt='logo' />
                <form onSubmit={this.handleSignIn}>
                    <input className='form-input' onChange={this.handleChange} name='email' type='text' placeholder='email'/>
                    <input className='form-input' onChange={this.handleChange} name='password' type='password' placeholder='password'/>

                    <button className='form-btn' type='submit'>Sign In</button>
                    <div style={{color:'red', fontSize: 12}}>
                        {this.state.inputError}
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;