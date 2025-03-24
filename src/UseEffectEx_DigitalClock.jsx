import { useState,useEffect } from "react";

function UseEffectEx_DigitalClock(){

    const [time,setTime]= useState(new Date());
    useEffect(()=>{
        const intervalId =setInterval(()=>{
        setTime(new Date());
    },1000);

    return () => {
        clearInterval(intervalId);
    }
    },[]); 
    function formatTime(){
        let hours = time.getHours();
        let mins = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(mins)}:${padZero(seconds)} ${meridiem}`
    }
    function padZero(number){
        return (number < 10 ? "0":"")+number;
    }
    return (<>
    <div className="clock-container">
        <div className="clock">
            <span> {formatTime()}</span>
        </div>
    </div>
    </>);

}
export default UseEffectEx_DigitalClock;