import { useState } from 'react';
import './App.css';
import Form from './components/form.jsx'

function App() {
  const [timer, serTimer] = useState({minutes: 0, seconds: 10})

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro timer</h1>
        <Form timer={timer}/>
      </header>
    </div>
  );
}

export default App;
