import React from 'react';

function Message({ show }){

    const showMessage = (show) ? <p>try another!</p> : '' ;

    return (
      <div className="message">
        {showMessage}
      </div>
    );

}

export default Message;
