import React, { Component } from 'react';

class GameOver extends Component {

    newWord = () => {
            const { getWord } = this.props;
            getWord();
        };

    render() {

        const { isOver, isWon } = this.props;
        const message = (isWon) ? "you've won!" : "game over";

        

        const gameOverElement = (isOver) && (
           <div className="game-over">
            <div className="wrapper">
                <p>{message}</p>
                <button onClick={this.newWord}>new word</button>
            </div>
          </div> 
        );

        return gameOverElement;
    }

}

export default GameOver;
