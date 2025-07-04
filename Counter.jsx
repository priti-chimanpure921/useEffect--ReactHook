import { useState, useEffect } from 'react';

function Counter()
{
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    let increaseCount = ()=>{
        setCount((currentCount)=>{
            return currentCount + 1;
        } 
        );
    };

    let increaseCount2 = ()=>{
        setCount2((currentCount)=>{
            return currentCount + 1;
        } 
        );
    };

    useEffect(function printSomething(){
        console.log("This is a side effect.");
    },[count2]);

    // useEffect(function printSomething(){
    //     console.log("This is a side effect.");
    // },[count]);

    // useEffect(function printSomething(){
    //     console.log("This is a side effect.");
    // },[]);// on first rerender

    return(
        <div>
            <h4>Counter = {count}</h4>
            <button onClick={increaseCount}>+1</button>
            <h4>Counter2 = {count2}</h4>
            <button onClick={increaseCount2}>+1</button>
        </div>
    )

}
export default Counter;