import { useState } from "react";

function colorPicker(){

    const [color,setColor]= useState("nonne");

    function workWithColor(event){
        setColor(event.target.value);
    }
    return(
        <div>
            <h1>Color Picker</h1>
            <div >
                <label>
                    Selected Color: {color};
                    <input value={color} type="color" onChange={workWithColor}></input>
                </label>

            </div>

        </div>
        
        
    );
}
export default colorPicker