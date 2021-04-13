import { useState } from 'react';
import './App.css';
import Countdown from './components/countdown.jsx'
import Form from './components/form.jsx'

function App() {
  const [timer, setTimer] = useState({ minutes: '0', seconds: '10' })
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  const changeMinutes = (e) => { setTimer({ ...timer, minutes: e.target.value }) }
  const changeSeconds = (e) => { setTimer({ ...timer, seconds: e.target.value }) }

  const startCountDown = () => {
    setIsTimerRunning(true)
    let countDownDate = new Date()
    countDownDate.setMinutes(countDownDate.getMinutes() + parseInt(timer.minutes))
    countDownDate.setSeconds(countDownDate.getSeconds() + parseInt(timer.seconds))

    const timerInterval = setInterval(() => {
      let now = new Date()

      let diff = countDownDate - now;
      let minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
      setTimer({ minutes: minutesLeft, seconds: secondsLeft })

      if (diff < 0) {
        clearInterval(timerInterval);
        setTimer({minutes: '0', seconds: '10'})
        setIsTimerRunning(false)
      }

    }, 1000);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro timer</h1>
        {isTimerRunning ?
          <Countdown timeLeft={timer} />
          :
          <Form timer={timer} changeMinutes={changeMinutes} changeSeconds={changeSeconds} startCountDown={startCountDown} />
        }
      </header>
    </div>
  );
}

export default App;
