import { useState } from "react";

function OnChangeEventEx(){
 const[name,hNC] = useState("");
 const[quantity,hQC] = useState();
 const[comment,hC] = useState("");
 const[payment,pC] = useState("");
 const[shipping,sP] = useState("");
 function handleNameChange(event){
    hNC(event.target.value);
 }
 function handleQuantityChange(event){
    hQC(event.target.value);
 }
 function handleCommentChange(event){
    hC(event.target.value);
 }
 function handlePaymentChange(event){
   pC(event.target.value);
}
function handleShippingChange(event){
   sP(event.target.value);
}
    return (<div>

        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>
        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>
        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Delivery instructions"/>
        <p>Comment: {comment}</p>
        <select value={payment} onChange={handlePaymentChange}>
         <option value=""> select an option</option>
         <option value="Visa"> Visa</option>
         <option value="MasterCard"> MasterCard</option>
         <option value="GiftCard"> GiftCard</option>
         </select>
         <p>Payment:{payment}</p>
         <label>
            <input type="radio" value ="Pick Up" checked={shipping==="Pick Up"}
            onChange={handleShippingChange}/> Pick up
         </label>
         <label>
            <input type="radio" value ="Delivery" checked={shipping==="Delivery"}
            onChange={handleShippingChange}/> Delivery
         </label>
         <p>Shipping:{shipping}</p>
    </div>);
}
export default OnChangeEventEx;