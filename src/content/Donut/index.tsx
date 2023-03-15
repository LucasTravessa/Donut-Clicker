import "./styles.css";

import { useCount } from "../../contexts/Counter";

function Donut() {
  const { counter, addCounter } = useCount();

  return (
    <div className="Main">
      <span>Donuts por minuto</span>
      <div
        className="donut-container"
        onClick={() => {
          addCounter(counter + 1);
        }}
      ></div>
    </div>
  );
}

export default Donut;
