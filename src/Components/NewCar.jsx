import { useState } from "react";

function NewCar(){
    const [car,setCar] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");

    function workForAddingCar(){
        const newCar = {Year: carYear, Make: carMake, Model: carModel}
        setCar(c =>[...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function workForRemovingCar(index){
        setCar(c => c.filter((_,i) => i !== index));
        
    }

    function workForCarYear(event){
        setCarYear(event.target.value);        
    }

    function workForCarMake(event){
        setCarMake(event.target.value);  
    }

    
    function workForCarModel(event){
        setCarModel(event.target.value);  
    }

    return(
        <div>
            <h2> Car Objects</h2>
            <ul>
                {car.map((car,index)=><li key={index} onClick={()=> workForRemovingCar(index)}>{car.Year}{car.Make} {car.Model}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={workForCarYear}></input><br></br>
            <input type="text" value={carMake} onChange={workForCarMake} placeholder="Enter your car make"></input><br></br>
            <input type="text" value={carModel} onChange={workForCarModel} placeholder="Enter your car model"></input><br></br>
            <button onClick={workForAddingCar}>Add New Car</button>
        </div>
    );
}
export default NewCar