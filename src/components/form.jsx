import React from 'react';

function Form(props) {

    return (
        <form className='set-timer-form'>
          <h2>Work time</h2>
          <div className='input-row'>
            <div className='label-input-wrapper'>
              <label htmlFor='minutes'>Minutes</label>
              <input type='number' name='minutes' min='0' max='99' defaultValue={props.studyTime.minutes} onChange={(e) => props.changeStudyMinutes(e)}/> 
            </div>
            <p className='colon'>:</p>
            <div className='label-input-wrapper'>
              <label htmlFor='seconds'>Seconds</label>
              <input type='number' name='seconds' min='0' max='99' defaultValue={props.studyTime.seconds} onChange={(e) => props.changeStudySeconds(e)}/>
            </div>
          </div>
          <h2>Break time</h2>
          <div className='input-row'>
            <div className='label-input-wrapper'>
              <label htmlFor='minutes'>Minutes</label>
              <input type='number' name='minutes' min='0' max='99' defaultValue={props.breakTime.minutes} onChange={(e) => props.changeBreakMinutes(e)}/> 
            </div>
            <p className='colon'>:</p>
            <div className='label-input-wrapper'>
              <label htmlFor='seconds'>Seconds</label>
              <input type='number' name='seconds' min='0' max='99' defaultValue={props.breakTime.seconds} onChange={(e) => props.changeBreakSeconds(e)}/>
            </div>
          </div>
          <button type='button' className='timer-button' onClick={props.startClock}>Start</button>
        </form>
    );
}

export default Form;