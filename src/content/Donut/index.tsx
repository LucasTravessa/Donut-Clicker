import "./styles.css"
import {useState} from 'react';

function Donut() {
    const [count, setCount] = useState(0);
    return (
        <div className="Main">
            <span className="counter">Quantos Donuts {count}</span>
            <div className="donut-container"
            onClick={()=>setCount(count+1)}
            >
            </div>
        </div>
    )
  }

export default Donut;