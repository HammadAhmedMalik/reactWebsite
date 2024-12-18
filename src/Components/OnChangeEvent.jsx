import { useState } from "react";

function Eventt(){

    const [name, setValuee]=useState("Guest");
    const [quantity,setQuantity]=useState(0);
    const [comment,setComment]=useState("none");
    const [payment,setPayment]=useState("");
    const [shipping,setShipping]=useState("")

    function workWitkName(event){
        setValuee(event.target.value);
    }


    function workWithQuantity(event){
        setQuantity(event.target.value);
    }


    function workWithComment(event){
        setComment(event.target.value);
    }


    function workWithPayment(event){
        setPayment(event.target.value);
    }


    function workWithShipping(event){
        setShipping(event.target.value);
    }


    return(
        <div>
            <p>Name: {name}</p>
            <input value={name} onChange={workWitkName}></input>
            
            <p>Quantity: {quantity}</p>
            <input value={quantity} onChange={workWithQuantity} type="number"></input>

            <p>Comment: {comment}</p>
            <textarea value={comment} onChange={workWithComment} placeholder="Enter Delivery Instructions"></textarea>
            
            <p>Payment Method: {payment}</p>
            <select value={payment} onChange={workWithPayment}>
                <option value="">Select an Option</option>
                <option value="Easypaisa">Easypaisa</option>
                <option value="Jazzcash">Jazzcash</option>
                <option value="VisaCard">VisaCard</option>
                <option value="Mastercard">Mastercard</option>

            </select>
            <br></br>

            <p>Shipping: {shipping}</p>
            <label>
                <input value="Pick up" type="radio" 
                   onChange={workWithShipping}
                   checked = {shipping === "Pick up"}>
                </input>
                Pick up
            </label> <br></br>

            <label>
                <input value="Delivery" type="radio" 
                   onChange={workWithShipping}
                   checked = {shipping === "Delivery"}>
                </input>
                Delivery
            </label> <br></br>

            
           
            
        </div>
        
    );
}
export default Eventt