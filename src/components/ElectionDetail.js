import React, { Component } from 'react';
import NavBar from './common/NavBar';
import LogoPane from './common/LogoPane';

class ElectionDetail extends Component {
    render() {
        return (
            <div>
                <LogoPane />
                <NavBar title="Available Elections"/>
                <div className='main-content'>
                    Election Detail Page
                </div>
            </div>
        );
    }
}

export default ElectionDetail;