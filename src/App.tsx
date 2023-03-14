import './App.css';
import AudioButton from './content/AudioButton';
import Donut from './content/Donut';
import Shop from './content/Shop';

function App() {

  return (
      <div className='App'>
        
        <header>
          <span className='title'>MyDonutFarm</span>
          <AudioButton/>
        </header>

        <div className="donut">
          <Donut/>
        </div>

        <div className="shop">
          <Shop/>
        </div>
      </div>
  );
}

export default App;
