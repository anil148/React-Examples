import { useEffect, useState } from "react";

function UseEffectEx(){
    const [count,setCount] =useState(0);
    const[color,setColor]=useState("green");
    function changeColor(){
        setColor(c=>c==='green' ? 'red' : 'green');
       
    }
function addCount(){
    setCount(c=>c+1);
   
}
function deducCount(){
    setCount(c=>c-1);
   
}
useEffect(()=>{
    document.title = `count: ${count} color: ${color}`;
    
},[count,color])
    return (<>
    <p style={{color:color}}>count : {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={deducCount}>Subtract</button> <br/>
    <button onClick={changeColor}> Change Color</button>

    </>);

}
export default UseEffectEx;