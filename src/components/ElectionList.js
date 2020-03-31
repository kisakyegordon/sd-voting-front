import React, { Component } from 'react';
import NavBar from './common/NavBar';
import LogoPane from './common/LogoPane';

class ElectionList extends Component {
    render() {
        return (
            <div>
                <LogoPane />
                <NavBar title="Available Elections"/>
                <div className='main-content'>
                    Election List
                </div>
            </div>
        );
    }
}

export default ElectionList;