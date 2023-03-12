import {Fragment,useState} from "react";
export function IncreaseDecreaseCount(){
     const [count,setCount]= useState(0);
     function increaseCount(){
        setCount(count +1);
     }
     function decreaseCount(){
        setCount(count -1) 
     }

    return(
        <Fragment>
        <h1 style={{color:"red"}}> {count}</h1>
        <button onClick={increaseCount}> Increase Count</button> 
       
        <button onClick={decreaseCount} >Decrease Count</button>
        </Fragment>
    )
}