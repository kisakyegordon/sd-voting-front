import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../logo.svg';

class Login extends Component {
    state = {
        toHome: false
    }

    handleSignIn (e) {
        e.preventDefault();

        // validate user

        // set authed user

        this.setState({
            toHome: true
        })
    }

    render() {
        if (this.state.toHome === true) {
            let redirectUrl = '/elections';
            return <Redirect to={redirectUrl} />
        }
        return (
            <div className='login'>
                <img src={logo} alt='logo' />
                <input className='form-input' type='text' placeholder='email'/>
                <input className='form-input' type='password' placeholder='password'/>
                <input className='form-btn' onClick={(e) => this.handleSignIn(e)} type='submit' value='Sign in' />
            </div>
        );
    }
}

export default Login;