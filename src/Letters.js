import React, { Component } from 'react';
import Letter from './Letter';

function Letters({ letters }) {

    const all = [...letters].map(({ val, isFound }) => {
        const found = (isFound) && val;
        return <Letter isFound={found} >{val}</Letter>
    })

    return (
      <div className="letters">
        {all}
      </div>
    );
}

export default Letters;
