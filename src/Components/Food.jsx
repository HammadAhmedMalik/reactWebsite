import { useState } from "react"

function Food(){
    const [foods,setFoods]=useState(["Apple", "Orange", "Banana"])

    function workForAddingFood(){
        const addFood = document.getElementById("foodlist").value;
        document.getElementById("foodlist").value = "";
        setFoods(f => [...f, addFood])

    }
    function workForRemovingFood(index){

        setFoods(foods.filter((__dirname,i) => i !== index))
    }
    return(
    <div>
        <h2>Foods List</h2>
        <ul>
            {foods.map((food,index) => 
            <li key={index} onClick={()=> workForRemovingFood(index)} >{food}</li>)}
        </ul>
        <input type = "text" placeholder="Enter your food" id="foodlist" ></input><br></br>
        <button onClick={workForAddingFood}>Add Food</button>
    </div>)
}
export default Food