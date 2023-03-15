import "./styles.css";

import { useCount } from "../../contexts/Counter";
import { useState } from "react";

export default function Shop() {
  const { counter } = useCount();

  return (
    <div className="main">
      <span className="text">Você possui {counter} Donuts</span>
      <div className="itens-list">
        <Cursor />
        <GrandMa />
        <Factory />
      </div>
    </div>
  );
}

function Cursor() {
  const {counter, addCounter}= useCount();

  const [amount, setAmount] = useState(0);

  if(amount !== 0){
     setInterval(()=>{
      addCounter(counter+1)
    }, 2000/amount)
  }

  return (
    <div className="item">
      <div
        className="image cursor"
        onClick={() => {
          if(counter >= 10){
            setAmount(amount + 1);
            addCounter(counter-10);
          }
        }}
      ></div>
      <span className="text">Cursor: {amount}</span>
    </div>
  );
}

function GrandMa() {
  return <div>Grand-ma</div>;
}

function Factory() {
  return <div>Factory</div>;
}
