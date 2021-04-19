import React from 'react';

function Countdown(props) {
    return (
        <div className='countdown'>
            <h1>Pomodoro timer</h1>
            <p>{props.timeLeft.minutes < 10 && '0'}{props.timeLeft.minutes} : {props.timeLeft.seconds < 10 && '0'}{props.timeLeft.seconds}</p>
        </div>
    );
}

export default Countdown;