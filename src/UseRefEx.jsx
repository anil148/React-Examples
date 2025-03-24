import { useState,useEffect, useRef} from "react";

function UseRefEx(){

    // let [number,setNumber] = useState(0);\
    const ref = useRef(0);
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    console.log(ref);
    useEffect(()=>{
        console.log("COMPONENT RENDERED");
    })
    function handleClick(){
        // ref.current = ref.current + 1;
        ref.current++;
        // setNumber(n=>n+1);
        console.log(ref.current)
    }
    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor ="yellow";
        inputRef2.current.style.backgroundColor ="";
        inputRef3.current.style.backgroundColor ="";

    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor ="";
        inputRef2.current.style.backgroundColor ="yellow";
        inputRef3.current.style.backgroundColor ="";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor ="";
        inputRef2.current.style.backgroundColor ="";
        inputRef3.current.style.backgroundColor ="yellow";
    }
    return (
        <div>
    {/* <button onClick={handleClick}>Click Me!</button>
    <input ref={inputRef} /> <br/> */}
    <button onClick={handleClick1}>Click Me1!</button><br/>
    <input ref={inputRef1} /> <br/>
    <button onClick={handleClick2}>Click Me2!</button> <br/>
    <input ref={inputRef2} /><br/>
    <button onClick={handleClick3}>Click Me3!</button><br/>
    <input ref={inputRef3} />
    </div>
    );

}
export default UseRefEx;