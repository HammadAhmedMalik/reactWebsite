import { useState } from "react";

function Car(){
    const [car,setCar]=useState({year:2024,
                                 model:"honda",
                                 make:"Grandi"
    })

    function workWithYear(event){
        setCar(c=>({...c,year:event.target.value}))
    }


    function workWithModel(event){
        setCar(c=>({...c,model:event.target.value}))
        
    }


    function workWithMake(event){
        setCar(c=>({...c,make:event.target.value}))
        
    }
    return(
        <div>
            <p>
                Set your car: {car.year} {car.model} {car.make};
            </p>
            <input type="number" value={car.year} onChange={workWithYear}></input>
            <input type="string" value={car.model} onChange={workWithModel}></input>
            <input type="string" value={car.make} onChange={workWithMake}></input>
        </div>

    );
}
export default Car