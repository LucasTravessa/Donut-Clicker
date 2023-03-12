import './App.css';
import AudioButton from './content/AudioButton';
import Donut from './content/Donut';

function App() {

  return (
      <div className='App'>
        
        <header>
          <span className='title'>MyDonutFarm</span>
          <AudioButton/>
        </header>

        <Donut/>
      </div>
  );
}

export default App;
