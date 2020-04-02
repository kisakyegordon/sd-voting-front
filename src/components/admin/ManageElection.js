import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../common/NavBar';
import LogoPane from '../common/LogoPane';
import {elections} from "../sampleData";

class AdminElectionList extends Component {

    state = {
        delete: false
    }

    handleEdit = id => this.props.history.push(`/add/`+id);

    handleDelete = id => {
        console.log("Delete this election: ", id);
        this.setState({delete: true});
    }

    handleElection = id => this.props.history.push(`/elections/`+id);

    render() {
        console.log("An update has occured");
        return (
            <div>
                <LogoPane />
                <NavBar title="Manage Elections"/>
                <div className='main-content'>
                    <ul>
                        {
                            elections.map( (item, index) => 
                            <li key={index} className='election-list'>
                                <div onClick={() => this.handleElection(item.id)}>{item.title}</div>
                                <div>
                                    <button onClick={() => this.handleEdit(item.id)}>Edit</button>
                                    <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                                </div>
                            </li> )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(AdminElectionList);