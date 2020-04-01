import React, { Component } from 'react';
import NavBar from './common/NavBar';
import LogoPane from './common/LogoPane';
import Card from './common/Card';
import {elections} from "./sampleData";


class Results extends Component {
    render() {
        return (
            <div>
                <LogoPane />
                <NavBar title="Available Elections"/>
                <div className='main-content'>
                    <div className='main-content'>
                    <div>
                    <ul>
                        {
                            elections[0].vote_options.map( 
                                (item, index) => 
                                <li key={index}>
                                    <h4>{index + 1}</h4>
                                    <Card candidate={item} />
                                    <h4>30 Votes</h4>
                                </li> )
                        }
                    </ul>
                     </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Results;