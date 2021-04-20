import { useEffect, useState } from 'react';
import './App.css';
import Countdown from './components/countdown.jsx'
import Form from './components/form.jsx'

import useSound from 'use-sound';
import music from './assets/classical.mp3';

function App() {
  const [timer, setTimer] = useState({
    studyTime: 6000,
    breakTime: 3000,
    countdownTime: 6000,
    onBreak: false,
    isRunning: false
  })
  const [play, { stop }] = useSound(music, { loop: true });

  useEffect(() => {
    if (timer.isRunning && !timer.onBreak) {play()} 
    else {stop()}
  }, [timer.isRunning, timer.onBreak])

  //If isRunning or countdownTime changes, setTimeout for 1 second and toggle break/study on 0
  useEffect(() => {

    if(timer.isRunning) {
      setTimeout(() => {

        if (timer.countdownTime <= 0 && timer.onBreak) {
          setTimer({...timer, countdownTime: timer.studyTime, onBreak: false})
          return
        }
        if (timer.countdownTime <= 0 && !timer.onBreak) {
          setTimer({...timer, countdownTime: timer.breakTime, onBreak: true})
          return
        }

        setTimer({...timer, countdownTime: timer.countdownTime - 1000})
      }, 1000)
    } 

  }, [timer.isRunning, timer.countdownTime])

  return (
    <div className="App">
      <main className="App-header">
        {timer.isRunning ?
          <Countdown timer={timer} />
          :
          <Form timer={timer} setTimer={setTimer}/>
        }
      </main>
    </div>
  );
}

export default App;
