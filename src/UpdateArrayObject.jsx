import { useState } from "react";

function UpdateArrayObject(){
    const [cars,setCar]=useState([]);
    const[year,setCarYear]=useState(new Date().getFullYear());
    const[make,setCarMake]=useState("");
    const[model,setCarModel]=useState("");

    function handleAddCar(){
        const newYear = year;
        const newMake = make;
        const newModel = model;
        const newCar ={
            year:newYear,
            make:newMake,
            model:newModel
        }
        setCar(c=>[...c,newCar]);

    }
    function handleRemoveCar(index){
        console.log(index);
        setCar(c=>c.filter((_,i) => i!==index));

    }
    function handleYearCar(event){
        setCarYear(event.target.value);
    }
    function handleModelCar(event){
        setCarModel(event.target.value);
    }
    function handleMakeCar(){
        setCarMake(event.target.value);
    }

    return (
    <div>
    <h2> Car Details</h2>
    <p>{cars.map((car,index) =><li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}</p>
    <input type="text" placeholder="Enter year" onChange={handleYearCar}/> <br/>
    <input type="text" placeholder="Enter Model" onChange={handleModelCar}/> <br/>
    <input type="text" placeholder="Enter Make"onChange={handleMakeCar}/> <br/>
    <button onClick={handleAddCar} > Add Car</button>
    </div>
   
    );

}
export default UpdateArrayObject;