import "./App.css";
import AudioButton from "./content/AudioButton";
import Donut from "./content/Donut";
import Shop from "./content/Shop";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <div className="empty"></div>
          <div className="empty"></div>
          <span className="title">MyDonutFarm</span>
          <div className="empty"></div>
          <div className="audio">
            <AudioButton />
          </div>
        </div>
      </header>

      <div className="donut">
        <Donut />
      </div>

      <div className="shop">
        <Shop />
      </div>
    </div>
  );
}

export default App;
