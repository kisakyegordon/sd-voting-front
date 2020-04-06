import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {elections} from "../sampleData";

const initialState = {
    title: '',
    description: '',
    candidates: [{id: Math.random(), name:''}],
    titleError: '',
    descriptionError: '',
    candidateError: ''
}

class NewElection extends Component {
    constructor(props){
        super();
        if(props.match.params.id) {
            const content = this.receiveEditElection(props.match.params.id);
            
            if (!content[0]) {
                this.state = initialState
            } else {
                this.state = content[0];
            }
            
        }
    }

    state = {
        title: '',
        description: '',
        candidates: [{id: Math.random(), name:''}],
        titleError: '',
        descriptionError: '',
        candidateError: ''
    }

    validation = () => {
        let titleError = '';
        let descriptionError = '';
        let candidateError = '';

        if (!this.state.title) {
            titleError = "Title field is required";
        }

        if (!this.state.description) {
            descriptionError = "Description field is required";
        }

        if (this.state.candidates.length > 1) {
            this.state.candidates.forEach((candidate) => {
                if (!candidate.name) {
                    console.log(candidate.name);
                    candidateError = "Candidate field is required";
                }
            })
        } else {
            candidateError = "There must be at least two candidates";
        }

        if (titleError || descriptionError || candidateError) {
            this.setState({
                titleError,
                descriptionError,
                candidateError
            })
            return false;
        }
        return true;
    }

    handleChange = (e) => {
        if (['candidate'].includes(e.target.name)) {
            let candidates = [...this.state.candidates]
            candidates[e.target.dataset.id]['name'] = e.target.value;
            this.setState({ [e.target.name]: e.target.value })
        } else {
            this.setState({ [e.target.name]: e.target.value })
            console.log(e.target.name);
        }
    }

    addCandidate = (e) => {
        e.preventDefault();

        this.setState((prevState) => ({
            candidates: [...prevState.candidates, { id: Math.random(), name: '' }],
        }));
    }

    removeCandidate = (e, id) => {
        e.preventDefault();

        this.setState({
            candidates: this.state.candidates.filter(r => id !== r.id)
        })
    }

    // eslint-disable-next-line
    receiveEditElection = id => elections.filter(item => item.id == id);


    handleSubmit = (e) => {
        e.preventDefault();
        const { title, description, candidates } = this.state
        let isValid = this.validation();

        if (isValid) {
            let data = {
                title,
                description,
                candidates
            }
            this.setState(initialState);
            console.log("Current Data: ", data);
            this.props.history.push("/manage-elections")
        }
    }

    render() {
        const { id } = this.props.match.params;
        const { title, description, candidates } = this.state;
        console.log(title);
        console.log(description);
        console.log(candidates);
        return(
            <div>
                <form className='new-election'>
                    <h2>{!id ? 'Create Election' : 'Edit Election'}</h2>
                    <input className='form-input' type='text' name='title' onChange={(e) => this.handleChange(e)} value={title} placeholder='Title' autoComplete='off' />
                    <div style={{color:'red', fontSize: 12}}>
                        {this.state.titleError}
                    </div>
                    <textarea className='form-input' type='textarea' name='description'  onChange={(e) => this.handleChange(e)} value={description} placeholder='Description' />
                    <div style={{color:'red', fontSize: 12}}>
                        {this.state.descriptionError}
                    </div>
                    {   
                        candidates.map((candidate, index) => {
                            return(
                                <div key={candidate.id}>
                                    <input 
                                        style={{width:'80%'}} 
                                        className='form-input' 
                                        type='text' 
                                        name='candidate' 
                                        data-id={index} 
                                        id={index}
                                        onChange={(e) => this.handleChange(e)} 
                                        value={candidate.name}
                                        placeholder={'Candidate #'.concat(index+1)}
                                        autoComplete='off' />
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                        onClick={(e) => this.removeCandidate(e, candidate.id)}
                                    >
                                        Remove
                                    </Button>
                                    {/* <button onClick={(e) => this.removeCandidate(e, candidate.id)} style={{color:'red'}}>Remove</button> */}
                                </div>
                            )
                        })
                    }
                    <div style={{color:'red', fontSize: 12}}>
                        {this.state.candidateError}
                    </div>
                    <div className='button-section'>
                        <button className='form-btn' onClick={(e) => this.addCandidate(e)}>Add Candidate</button>
                        <button className='form-btn' onClick={this.handleSubmit} type='submit'>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(NewElection);