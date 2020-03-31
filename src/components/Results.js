import React, { Component } from 'react';
import NavBar from './common/NavBar';
import LogoPane from './common/LogoPane';

class Results extends Component {
    render() {
        return (
            <div>
                <LogoPane />
                <NavBar title="Available Elections"/>
                <div className='main-content'>
                    Results Page
                </div>
            </div>
        );
    }
}

export default Results;