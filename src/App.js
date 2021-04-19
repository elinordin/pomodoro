import { useState, useEffect } from 'react';
import './App.css';
import Countdown from './components/countdown.jsx'
import Form from './components/form.jsx'

function App() {
  const [clock, setClock] = useState({onABreak: false, currentTime: 6000, studyTime: 6000, breakTime: 3000, isRunning: false})

  const startClock = () => {
    setClock({...clock, isRunning: true})
  }

  useEffect(() => {
    let interval
    if(clock.isRunning) {
      setTimeout(() => {
        if (clock.currentTime <= 0 && !clock.onABreak) {
          console.log('time for a break')
          setClock({...clock, currentTime: clock.breakTime, onABreak: true})
          return
        }
        if (clock.currentTime <= 0 && clock.onABreak) {
          console.log('time for work')
          setClock({...clock, currentTime: clock.studyTime, onABreak: false})
          return
        }  
        setClock({...clock, currentTime: clock.currentTime - 1000})
      }, 1000);
    } else clearTimeout(interval)
    
    return() => clearTimeout(interval)
  }, [clock.currentTime, clock.isRunning])


  return (
    <div className="App">
      <main className="App-header">
        {clock.isRunning ?
          <Countdown clock={clock} />
          :
          <Form 
            startClock={startClock}
            studyTime={clock.studyTime} 
            breakTime={clock.breakTime} 
           />
        }
      </main>
    </div>
  );
}

export default App;
