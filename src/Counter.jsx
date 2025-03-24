import React,{ useState } from "react";

function Counter(){

const[counter,setCount] = useState(0);


const incrementCounter = () =>{
    setCount(counter+1);
    // setCount(c=> c+1);
    // setCount(c=> c+1);
    // setCount(c=> c+1);
    
}
const decrementCounter = () =>{
    setCount(counter-1);
    // setCount(c=> c-1);
    // setCount(c=> c-1);
    // setCount(c=> c-1);
}
const reSet = () =>{
    setCount(0);
}
    return(<>
    <div className="counter-container">
    <p className="count-display">{counter}</p>
    <button className="count-button" onClick={incrementCounter}>Incremetn</button>
    <button className="count-button" onClick={decrementCounter}>Decremetn</button>
    <button className="count-button" onClick={reSet}>Reset</button>
    </div>
    </>);
}
export default Counter;