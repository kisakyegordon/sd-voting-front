import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import NavBar from '../common/NavBar';
import LogoPane from '../common/LogoPane';
import {elections} from "../sampleData";

class AdminElectionList extends Component {

    state = {
        delete: false
    }

    handleEdit = id => this.props.history.push(`/edit/`+id);

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
                                <div className='election-li'>
                                    <div onClick={() => this.handleElection(item.id)}>{item.title}</div>
                                    <div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<CreateIcon />}
                                        onClick={() => this.handleEdit(item.id)}
                                    >
                                       Edit
                                    </Button>
                                        <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => this.handleDelete(item.id)}
                                    >
                                        Delete
                                    </Button>
                                    </div>
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