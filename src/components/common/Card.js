import React, { Component } from 'react';
import '../styles.css';

class Card extends Component {

    render() {
        return (
            <div className='card-container'>
                <img className='card-img' src={this.props.candidate.avatar} alt='avatar' />
                <div className='card-desc'>
                    <h3>Name:  </h3>
                    <h4>{this.props.candidate.first_name}</h4>
                    <h4>{this.props.candidate.last_name}</h4>
                </div>
            </div>
        );
    }
}

export default Card;