import { useState } from "react"

function Counter(){
    const [Countt, Value]= useState(0);
    const incrementValue = () => {
        Value(Countt +1);
    }
    const decrementValue = () => {
        Value(Countt -1);
    }
    const resetValue = () => {
        Value(0);
    }
    return(
        
        <div>
            <p className="Text">Counter: {Countt}</p>
            <button className="IncButton" onClick={incrementValue}>Increase Value</button>

            {/* <p>Counter: {Countt}</p> */}
            <button className="DecButton" onClick={decrementValue}>Decrease Value</button>

            {/* <p>Counter: {Countt}</p> */}
            <button className="ResButton" onClick={resetValue}>Reset</button>
        </div>
    );

}
export default Counter