import React from "react";

export default function App5() {
    const [count, setCount] = React.useState(0); //Also can use React.useState(0) without importing useState
        const increment = () => {
            setCount(count + 1);
        }
    return(
        <div align="center" padding="10px">
            <h2>Counter</h2>
            <p style={{fontSize:"30px"}}>{count}</p>
            <button onClick={increment} style={{backgroundColor:"green", color:"white", margin:"10px", padding:"10px", border:"none", borderRadius:"10px"}}>Increment</button>
            <button onClick={() => setCount(0)} style={{backgroundColor:"red", color:"white", margin:"10px", padding:"10px", border:"none", borderRadius:"10px"}}>Reset</button>
        </div>
    );
}