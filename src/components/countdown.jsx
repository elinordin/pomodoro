import React from 'react';

function Countdown(props) {
    return (
        <div>
            <div className='input-row'>
            <p className='label-input-wrapper'>{props.timeLeft.minutes}</p>
            <p className='colon'>:</p>
            <p className='label-input-wrapper'>{props.timeLeft.seconds}</p>
          </div>
        </div>
    );
}

export default Countdown;