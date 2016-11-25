import React from 'react';
import Letter from './Letter';

function Letters({ letters }) {

    const all = [...letters].map(({ val, isFound }, index) => {
        const found = (isFound) && val;
        return <Letter key={index} isFound={found} >{val}</Letter>
    })

    return (
      <div className="letters">
        {all}
      </div>
    );
}

export default Letters;
