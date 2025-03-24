import { useEffect, useState } from "react";

function UseEffectEx2(){
    const[width,setWidth] = useState(window.innerWidth);
    const[height,setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER ADDED");
        return () =>{
            window.addEventListener("resize",handleResize);
            console.log("EVENT LISTENER RMOVED");
        }
    },[]);
  
  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
    return(<>
    <p>Window width:{width}px</p>
    <p>Window height:{height}px</p>
    </>)
}

export default UseEffectEx2;