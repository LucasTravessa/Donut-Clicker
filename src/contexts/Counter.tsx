import { createContext, useState, useContext } from "react";

interface CounterContextProps {
  counter: number;
  addCounter: (count: number) => void;
  Upgrade: (value: number, increment: number, time: number) => void;
}

interface CounterProviderProps {
  children: React.ReactNode;
}

const CounterContext = createContext({} as CounterContextProps);

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [counter, setCounter] = useState<number>(0);

  function addCounter(counter: number) {
    setCounter(counter);
  }

  function Upgrade (value: number, increment: number, time: number){
    if(counter >= value){
      setCounter( c => c - value );
      setInterval(()=>{
        setCounter( c => c + increment )
        console.log('att')
      },time);
    }
  }
    

  return (
    <CounterContext.Provider
      value={{
        counter,
        addCounter,
        Upgrade
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export function useCount() {
  const context = useContext(CounterContext);
  return context;
}