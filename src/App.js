import { useState } from 'react';
import './App.css';
import Countdown from './components/countdown.jsx'
import Form from './components/form.jsx'

import useSound from 'use-sound';
import music from './assets/classical.mp3';

function App() {
  const [studyTime, setStudyTime] = useState({ minutes: '0', seconds: '6' })
  const [breakTime, setBreakTime] = useState({ minutes: '0', seconds: '3' })
  const [timer, setTimer] = useState(studyTime)
  const [todo, setTodo] = useState('Study')
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [play, {stop}] = useSound(music, { loop: true });

  const changeStudyMinutes = (e) => { 
    setStudyTime({ ...studyTime, minutes: e.target.value }) 
    setTimer({ ...studyTime, minutes: e.target.value }) 
  }
  const changeStudySeconds = (e) => { 
    setStudyTime({ ...studyTime, seconds: e.target.value }) 
    setTimer({ ...studyTime, seconds: e.target.value })
  }
  const changeBreakMinutes = (e) => { setBreakTime({ ...breakTime, minutes: e.target.value }) }
  const changeBreakSeconds = (e) => { setBreakTime({ ...breakTime, seconds: e.target.value }) }

  const startCountDown = () => {
    setIsTimerRunning(true)
    do {
      const countDownDate = getCountDownDate()
      countdown(countDownDate)
    }
    while (isTimerRunning)
  }

  const getCountDownDate = () => {
    let countDownDate = new Date()
    countDownDate.setMinutes(countDownDate.getMinutes() + parseInt(parseInt(todo === 'Study'? studyTime.minutes : breakTime.minutes)))
    countDownDate.setSeconds(countDownDate.getSeconds() + parseInt(parseInt(todo === 'Study'? studyTime.seconds : breakTime.seconds)))
    return countDownDate
  }

  const countdown = (countDownDate) => {
    todo === 'Study'? play() : stop()

      const interval = setInterval(() => {
        let now = new Date()
  
        let diff = countDownDate - now;
        let minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let secondsLeft = Math.floor(((diff % (1000 * 60)) / 1000) + 1);
        setTimer({ minutes: minutesLeft, seconds: secondsLeft })
  
        if (diff < 0) {
          clearInterval(interval);
          setTimer(todo === 'Study'? breakTime : studyTime)
          setTodo(todo === 'Study'? 'Break' : 'Study')
          return
        }
      }, 100);
  }

  const studyCountdown = () => {
    play()
    let countDownDate = new Date()
    countDownDate.setMinutes(countDownDate.getMinutes() + parseInt(parseInt(studyTime.minutes)))
    countDownDate.setSeconds(countDownDate.getSeconds() + parseInt(parseInt(studyTime.seconds)))

      const studyInterval = setInterval(() => {
        let now = new Date()
  
        let diff = countDownDate - now;
        let minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let secondsLeft = Math.floor(((diff % (1000 * 60)) / 1000) + 1);
        setTimer({ minutes: minutesLeft, seconds: secondsLeft })
  
        if (diff < 0) {
          stop()
          clearInterval(studyInterval);
          setTimer(breakTime)
          setTodo('Break')
          breakCountdown()
        }
  
      }, 1000);
  }

  const breakCountdown = () => {
    let countDownDate = new Date()
    countDownDate.setMinutes(countDownDate.getMinutes() + parseInt(parseInt(breakTime.minutes)))
    countDownDate.setSeconds(countDownDate.getSeconds() + parseInt(parseInt(breakTime.seconds)))

      const breakInterval = setInterval(() => {
        let now = new Date()
  
        let diff = countDownDate - now;
        let minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let secondsLeft = Math.floor(((diff % (1000 * 60)) / 1000) + 1);
        setTimer({ minutes: minutesLeft, seconds: secondsLeft })
  
        if (diff < 0) {
          clearInterval(breakInterval);
          setTimer(studyTime)
          setTodo('Study')
          studyCountdown()
        }
  
      }, 1000);
  }



  return (
    <div className="App">
      <main className="App-header">
        {isTimerRunning ?
          <Countdown timeLeft={timer} todo={todo} />
          :
          <Form 
            studyTime={studyTime} 
            changeStudyMinutes={changeStudyMinutes} 
            changeStudySeconds={changeStudySeconds} 
            breakTime={breakTime} 
            changeBreakMinutes={changeBreakMinutes} 
            changeBreakSeconds={changeBreakSeconds} 
            startCountDown={startCountDown} />
        }
      </main>
    </div>
  );
}

export default App;
