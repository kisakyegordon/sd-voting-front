import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className='nav-container'>
                {this.props.title}
            </div>
        );
    }
}

export default NavBar;