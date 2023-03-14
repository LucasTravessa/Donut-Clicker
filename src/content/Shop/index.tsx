import './styles.css'

import { useCount } from "../../contexts/Counter";


export default function Shop(){

    const {counter, addCounter}= useCount();



    return(
        <div className='main'>
            <div className="donut-conter">Você possui {counter} Donuts</div>
            <div className="itens-list">
                <div className="item 1"
                onClick={()=>{
                    addCounter(counter+1)
                }}
                > Cursor</div>
                <div className="item 2"> Grand-ma</div>
                <div className="item 3"> Factory</div>
            </div>


        </div>
    );

}