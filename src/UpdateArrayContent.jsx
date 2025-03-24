import { useState } from "react";

function UpdateArrayContent(){
    const [foods,setFood]=useState(["Apple","Banana","Grape"]);
    
        function handleAddFoodItem(){
            const newItem = document.getElementById("foodItem").value;
            document.getElementById("foodItem").value='';
            setFood(f=>[...f,newItem]);
        }
        function removeItem(index){
            setFood(foods.filter((_,i)=>i !== index));
        
        
        }
    
    return (<div>
        <h2>List foods</h2>
        <ul>{foods.map((food,index)=><li key={index} onClick={()=>removeItem(index)}>{food}</li>)}</ul>
        <input type="text" id="foodItem" />
        <button onClick={handleAddFoodItem}>AddFoodItem</button>
    </div>);

}
export default UpdateArrayContent;