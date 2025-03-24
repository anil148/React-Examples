import React,{useState} from 'react';
function Mycomponent(){
    const [name,setName] =useState("Guest");
    const [age,setAge] =useState(0);
    const [isEmployed,setStatus] =useState(false);
    const updateName = () =>{
    //   name ="Anil";
    //   console.log(name);
    setName("Anil");
    }
    const incrementAge = () =>{
        setAge(age+1);
    }
    const employeeStatus = () =>{
        setStatus(!isEmployed);
    }
    return(<>
    <div>
<p>Name:{name}</p>
<button onClick={updateName}>Set Name</button>
<p>Age:{age}</p>
<button onClick={incrementAge}>IncrementAge Age</button>
<p>Status:{isEmployed?"YES":"NO"}</p>
<button onClick={employeeStatus}>Employee Status </button>
    </div>
    </>);
}
export default Mycomponent;