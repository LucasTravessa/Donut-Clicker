import './App.css';
import sound from './assets/Sound.wav';
import {useState} from 'react';

function App() {
  const [play, setPlay]= useState(0);

  function Play(){
    new Audio(sound).play()
  }

  return (
      <div className='App'>
        <header>
          <span className='Title'></span>
          <div className='Mute' onClick={Play}>{}</div>
        </header>
      </div>
  );
}

export default App;
