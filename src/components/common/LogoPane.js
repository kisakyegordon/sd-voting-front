import React, { Component } from 'react';
import logo from '../../assets/images/logo192.png';
import '../styles.css';

class LogoPane extends Component {

    handleLogout = () => console.log('logged out');
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

export default LogoPane;