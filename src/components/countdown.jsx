import React from 'react';
import {millisToReadable} from './millisConverter.js'

function Countdown(props) {
    const {onBreak, countdownTime} = props.timer

    return (
        <div className='countdown'>
            <h1>{onBreak? 'Break' : 'Study'}</h1>
            <p>{millisToReadable(countdownTime)}</p>
        </div>
    );
}

export default Countdown;