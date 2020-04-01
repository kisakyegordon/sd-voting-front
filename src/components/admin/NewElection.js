import React, { Component } from 'react';

const initialState = {
    title: '',
    description: '',
    candidates: [{id: Math.random(), name:''}],
    titleError: '',
    descriptionError: '',
    candidateError: ''
}

class NewElection extends Component {
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
            console.log(data);
            this.setState(initialState)
        }
    }

    render() {
        const { title, description, candidates } = this.state;
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
    }
}

export default NewElection;