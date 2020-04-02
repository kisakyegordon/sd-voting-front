import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
        console.log("Booyah", props.match.params.id);
        if(props.match.params.id) {
            const content = this.receiveEditElection(props.match.params.id);
            this.state = content[0];
        }
    }

    state = {
        title: '',
        description: '',
        candidates: [{id: Math.random(), name:''}]
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

        this.state.candidates.forEach((candidate) => {
            if (!candidate.name) {
                console.log(candidate.name);
                candidateError = "Candidate field is required";
            }
        })

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
        } else {
            this.setState({ [e.target.name]: e.target.value })
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

    receiveEditElection = id => elections.filter(item => item.id == id);


    handleEditSubmit = (e) => {
        e.preventDefault();
        const { title, description, candidates } = this.state
        let isValid = this.validation();

        if (isValid) {
            let data = {
                title,
                description,
                candidates
            }
            console.log("Current Edited Data: ", data);
            this.props.history.push("/manage-elections")
        }
    }

    render() {
        const { title, description, candidates } = this.state;

        if(!this.props.match.params.id) {
            return(

                <div>
                    <form className='new-election'>
                        <h2>Create Election</h2>
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
                                            onChange={(e) => this.handleChange(e, candidate.id)} 
                                            value={candidates.name} 
                                            placeholder={'Candidate #'.concat(index+1)}
                                            autoComplete='off' />
                                        <button onClick={(e) => this.removeCandidate(e, candidate.id)} style={{color:'red'}}>Remove</button>
                                    </div>
                                    
                                )
                            })
                        }
                        <div style={{color:'red', fontSize: 12}}>
                            {this.state.candidateError}
                        </div>
                        <button className='form-btn' onClick={(e) => this.addCandidate(e)}>Add Candidate</button>
                        <button className='form-btn' onClick={this.handleSubmit} type='submit'>Save</button>
                    </form>
                </div>
            );
        } else {
            return(

                <div>
                    <form className='new-election'>
                        <h2>Edit Election</h2>
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
                                            onChange={(e) => this.handleChange(e, candidate.id)} 
                                            value={candidate.name} 
                                            placeholder={'Candidate #'.concat(index+1)}
                                            autoComplete='off' />
                                        <button onClick={(e) => this.removeCandidate(e, candidate.id)} style={{color:'red'}}>Remove</button>
                                    </div>
                                    
                                )
                            })
                        }
                        <div style={{color:'red', fontSize: 12}}>
                            {this.state.candidateError}
                        </div>
                        <button className='form-btn' onClick={this.handleEditSubmit} type='submit'>Save</button>
                    </form>
                </div>
            );
        }

    }
}

export default withRouter(NewElection);