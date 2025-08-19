import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Counter(){
    const navigate=useNavigate();
    const [num,setnum]=useState(0);

    function increment(){
        setnum(num+1);
    }
    function decrement(){
        setnum(num-1);
    }
    var increment1=()=>{
        setnum(num+1);
    }
    var decrement1=()=>{
        setnum(num-1);
    }

    return(
        <div>
            <h1>Counter</h1>
            <h2>{num}</h2>
            <button onClick={()=>{setnum(num+1)}}>Increment</button>
            <button onClick={()=>{setnum(num-1)}}>Decrement</button><br/>
            <button onClick={increment}>Increment1</button>
            <button onClick={decrement}>Decrement1</button><br/>
            <button onClick={increment1}>Increment2</button>
            <button onClick={decrement1}>Decrement2</button><br/>
            
            <button onClick={()=>{navigate("/images")}}>Navigate to images</button>
            <button onClick={()=>{navigate("/classcompent")}}>Navigate to classcomponent</button>
        </div>
    );
}
export default Counter;



/*
React ----->HOOKS ----->INBUILT FUNCTIONS------->SPECIFIC ACTIONS

USESTATE------>REACT HOOK ------>INBUILT---->DISPLAY,UPDATE,STORE---->DATA

syntax:

const[num,setnum]=usestate(0)
console.log(num)//0
setnum(1);
console.log(num)//1
*/