import React from 'react';
import {msToHuman} from '../Utils'

function Countdown({clock}) {
    const {currentTime, onABreak} = clock

    return (
        <div className='countdown'>
            <h1>{onABreak ? 'Break time': 'Study time'}</h1>
            <p>{msToHuman(currentTime)}</p>
        </div>
    );
}

export default Countdown;