import React, { Component } from 'react';

class Letter extends Component {

    render() {

        const { children, isFound } = this.props;
        const letter = (isFound) && children;
        const letterClass = (isFound) ? 'letter found' : 'letter not-found';

        return (
            <div className={letterClass} >
                <p>{letter}</p>
            </div>
        );

    }
    
}

export default Letter;
