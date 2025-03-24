function Button_e(){
    // const handleClick = () => console.log("OUCH!");
    const handleClick3 = (e) => e.target.textContent = "OUCH!";
    // const handleClick3 = (e) => console.log(e);
    let count =0;
    const handleClick2 = (name) => {
        if(count<3){
            count++;
        console.log(`${name} you clicked me ${count} times`)
        }
        else{
           console.log(`${name} stop clicking me `); 
        }
    }
    
    return (
        // <button onClick= {handleClick} >Click Me</button>
    // <button onClick= {() =>handleClick2("Bro")} >Click Me</button>
    // <button onClick= {handleClick2("Bro")} >Click Me</button>
    <button onDoubleClick= {(e)=> handleClick3(e)} >Click Me</button>
   );
}
export default Button_e;