import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './common/NavBar';
import LogoPane from './common/LogoPane';
import Card from './common/Card';
import { elections } from './sampleData';

class ElectionDetail extends Component {

    state = {
        checked: null
    }

    handleSelect = id => {
        this.setState({ checked: id})
    }

    handleVote = () => {
        console.log("Voted: ", this.state.checked);
        this.props.history.push('/results');
    } 

    render() {
        const electionDetail = elections.filter(item => item.id == this.props.match.params.id);
        return (
            <div>
                <LogoPane />
                <NavBar title="Available Elections"/>
                <div className='main-content'>
                    <div>
                    <ul>
                        {
                            electionDetail[0].vote_options.map( 
                                (item, index) => 
                                <li key={index}>
                                    <Card candidate={item} />
                                    <input style={{width: "40px"}} checked={this.state.checked === item.id} type='checkbox' onChange={() => this.handleSelect(item.id)} />
                                </li> )
                        }
                    </ul>
                    <div className='vote-button'> 
                        <button onClick={this.handleVote} className='log-out-button'>Vote</button>
                     </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ElectionDetail);