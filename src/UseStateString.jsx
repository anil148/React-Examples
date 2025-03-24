import { useState } from "react";

function UseStateString(){
    const [car, setCar] = useState({year:2025,make:"Ford",model:"Mustang"});
    function handleYearChange(event){
        // setCar(c=>({...c,year:2025}));
        setCar(c=>({...c,year:event.target.value}));
    }
    function handleModelChange(event){
        setCar(c=>({...c,model:event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c=>({...c,make:event.target.value}));
    }
    return (<div>
        <p>Your favoutite car is : {car.year} {car.model} {car.make}</p>
    <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
    <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
    <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
    </div>);


}
export default UseStateString;