import { useState } from "react";

function ColorPicker(){

    const [color,setColor]= useState("nonne");

    function workWithColor(event){
        setColor(event.target.value);
    }
    return(
        <div className="heading">
            <h1>Color Picker</h1>
            <div className="heading2" style={{backgroundColor:color}} >
                <p>Selected Color: {color}</p>
            </div>
            <label>
                    Selected Color
                    <input value={color} type="color" onChange={workWithColor}></input>
                </label>


        </div>
        
        
    );
}
export default ColorPicker