import React, {useState} from 'react';

const Count = ({initial,stock}) => {
    
    let [counter,setCounter] = useState(initial)
    
    const increment = () => {
        if(counter < stock){
            setCounter(counter +1)
        }
    }

    const decrement = () => {
        if(counter >1){
            setCounter(counter -1)
        }

    }


    return (
        <div>
            <button onClick={()=>{increment()}}>Incrementar</button>
            <p>Contador: {counter}</p>
            <button onClick={()=>{decrement()}}>Decrementar</button>
        </div>
    );
};

export default Count;