import React, { Component } from 'react';

function Hangman({ count }){

    return (
      <div className="hangman">
        <p>hangman state: {count}</p>
      </div>
    );
}


export default Hangman;
