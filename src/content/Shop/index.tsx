import "./styles.css";

import { useCount } from "../../contexts/Counter";
// import { useState } from "react";

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
  const { Upgrade }= useCount();

  return (
    <div className="item">
      <div
        className="image cursor"
        onClick={() => {
          Upgrade?.(10, 1, 1000);
        }}
      ></div>
      <span className="text">Cursor: {}</span>
    </div>
  );
}

function GrandMa() {
  return <div>Grand-ma</div>;
}

function Factory() {
  return <div>Factory</div>;
}
