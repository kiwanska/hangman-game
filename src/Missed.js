import React from 'react';

function Missed({ missed }){

    const missedLetters = missed.map((value, index) => {
        return <span key={index}>{value}</span>
        });

    return (
      <div className="missed">
        <p>you missed: </p>
        <p className="missed-letters">{missedLetters}</p>
      </div>
    );

}

export default Missed;
