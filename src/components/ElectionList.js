import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './common/NavBar';
import LogoPane from './common/LogoPane';
import {elections} from "./sampleData";

class ElectionList extends Component {

    handleElection = id => this.props.history.push(`/elections/`+id);

    render() {
        return (
            <div>
                <LogoPane />
                <NavBar title="Available Elections"/>
                <div className='main-content'>
                    <ul>
                        {
                            elections.map( (item, index) => <li key={index} className='election-list' onClick={() => this.handleElection(item.id)}>{item.title}</li> )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(ElectionList);