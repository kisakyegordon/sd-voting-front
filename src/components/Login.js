import React, { Component } from 'react';
import * as API from '../utils/api';
import { Redirect } from 'react-router-dom';
import logo from '../logo.svg';

class Login extends Component {
    state = {
        toHome: false
    }

    handleSignIn (e) {
        e.preventDefault();

        // authenticate user
        API.fakeAuth.authenticate(() => {
            this.setState(() => ({
                toHome: true
            }))
        });

        // set authed user
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
                <input className='form-input' type='text' placeholder='email'/>
                <input className='form-input' type='password' placeholder='password'/>
                <input className='form-btn' onClick={(e) => this.handleSignIn(e)} type='submit' value='Sign in' />
            </div>
        );
    }
}

export default Login;