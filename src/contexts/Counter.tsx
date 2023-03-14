import { createContext, useState, useContext } from "react";


interface CounterContextProps{
    counter: number;
    addCounter: (count:number)=>void;
}

interface CounterProviderProps{
    children: React.ReactNode
}

export const CounterContext = createContext({}  as CounterContextProps)

export const CounterProvider = ({children}: CounterProviderProps) =>{
    
    const [counter, setCounter]= useState<number>(0);

    function addCounter(count:number){
        setCounter(count)
    }

    return(
        <CounterContext.Provider value={{
            counter,
            addCounter,
        }}>{children}</CounterContext.Provider>
    );


};

export function useCount(){
    const context = useContext(CounterContext);
    return context;
}