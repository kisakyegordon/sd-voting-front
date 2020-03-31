import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import * as API from '../../utils/api';
import logo from '../../assets/images/logo192.png';
import '../styles.css';

class LogoPane extends Component {
    handleLogout = () => API.fakeAuth.signout(() => this.props.history.push('/'));
    render() {
        return (
            <div className='logo-container'>
                <img className='logo' src={logo} alt='logo' />
                <div className='button-container'>
                    <button onClick={this.handleLogout} className='log-out-button'>Log out</button>
                </div>
            </div>
        );
    }
}

export default withRouter(LogoPane);