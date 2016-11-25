import React from 'react';

function GameOver({ isOver, isWon }) {

    const message = (isWon) ? "you've won!" : "game over";

    function reload(){
        window.location.reload()
    };

    const gameOverElement = (isOver) && (
       <div className="game-over">
        <div className="wrapper">
            <p>{message}</p>
            <button onClick={reload}>new word</button>
        </div>
      </div> 
    );

    return gameOverElement;
}

export default GameOver;
