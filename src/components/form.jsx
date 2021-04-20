import React, { useEffect, useState } from 'react';
import {millisToObject, objectToMillis} from './millisConverter.js'

function Form(props) {
  const timer = props.timer
  const {studyTime, breakTime} = timer

  const [studyInput, setStudyInput] = useState({
    minutes: millisToObject(studyTime).minutes,
    seconds: millisToObject(studyTime).seconds,
  })

  const [breakInput, setBreakInput] = useState({
    minutes: millisToObject(breakTime).minutes,
    seconds: millisToObject(breakTime).seconds
  })

  useEffect(() => {
    props.setTimer({
      ...props.timer,
      studyTime: objectToMillis(studyInput),
      breakTime: objectToMillis(breakInput),
      countdownTime: objectToMillis(studyInput)
    })
  }, [studyInput, breakInput]);

    return (
        <form className='set-timer-form'>
          <h2>Work time</h2>
          <div className='input-row'>
            <div className='label-input-wrapper'>
              <label htmlFor='minutes'>Minutes</label>
              <input type='number' name='minutes' min='0' max='99' value={studyInput.minutes} onChange={event => setStudyInput({...studyInput, minutes: event.target.value})}/> 
            </div>
            <p className='colon'>:</p>
            <div className='label-input-wrapper'>
              <label htmlFor='seconds'>Seconds</label>
              <input type='number' name='seconds' min='0' max='99' value={studyInput.seconds} onChange={event => setStudyInput({...studyInput, seconds: event.target.value})}/>
            </div>
          </div>
          <h2>Break time</h2>
          <div className='input-row'>
            <div className='label-input-wrapper'>
              <label htmlFor='minutes'>Minutes</label>
              <input type='number' name='minutes' min='0' max='99' value={breakInput.minutes} onChange={event => setBreakInput({...breakInput, minutes: event.target.value})}/> 
            </div>
            <p className='colon'>:</p>
            <div className='label-input-wrapper'>
              <label htmlFor='seconds'>Seconds</label>
              <input type='number' name='seconds' min='0' max='99' value={breakInput.seconds} onChange={event => setBreakInput({...breakInput, seconds: event.target.value})}/>
            </div>
          </div>
          <button type='button' className='timer-button' onClick={() => props.setTimer({...props.timer, isRunning: true})}>Start</button>
        </form>
    );
}

export default Form;