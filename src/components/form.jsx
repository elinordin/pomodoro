import React from 'react';

function Form(props) {
    return (
        <form className='set-timer-form'>
          <div className='input-row'>
            <div className='label-input-wrapper'>
              <label htmlFor='minutes'>Minutes</label>
              <input type='number' name='minutes' defaultValue={props.timer.minutes}/> 
            </div>
            <p className='colon'>:</p>
            <div className='label-input-wrapper'>
              <label htmlFor='seconds'>Seconds</label>
              <input type='number' name='seconds' defaultValue={props.timer.seconds}/>
            </div>
          </div>
          <button type='button' className='timer-button'>Start</button>
        </form>
    );
}

export default Form;