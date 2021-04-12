import React from 'react';

function Form(props) {
    return (
        <form className='set-timer-form'>
          <div className='input-row'>
            <div className='label-input-wrapper'>
              <label htmlFor='minutes'>Minutes</label>
              <input type='number' name='minutes' min='0' defaultValue={props.timer.minutes} onChange={(e) => props.changeMinutes(e)}/> 
            </div>
            <p className='colon'>:</p>
            <div className='label-input-wrapper'>
              <label htmlFor='seconds'>Seconds</label>
              <input type='number' name='seconds' min='1' defaultValue={props.timer.seconds} onChange={(e) => props.changeSeconds(e)}/>
            </div>
          </div>
          <button type='button' className='timer-button' onClick={props.startCountDown}>Start</button>
        </form>
    );
}

export default Form;