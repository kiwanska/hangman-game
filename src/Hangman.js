import React, { Component } from 'react';

class Hangman extends Component {

    state = {
        elements: [
            'gallows',
            'head',
            'neck',
            'body',
            'right-arm',
            'left-arm',
            'right-hand',
            'left-hand',
            'right-leg',
            'left-leg',
            'right-foot',
            'left-foot'
        ]
    }
    render() {

        const { count } = this.props;
        const { elements } = this.state;

        const hangman = elements.filter((value, index) => index <= count)
                                .map((value, index) => <div key={index} className={value} />);

        return (
          <div className="hangman">
            <p>hangman state: {count}</p>
            {hangman}
          </div>
        );
    }
    
}

export default Hangman;
