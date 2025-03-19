import React from "react";
import { useState } from "react";
export default function App2() {
    const [count, setCount] = useState(0); //Also can use React.useState(0) without importing useState
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div style={{backgroundColor:'black', color:"white", display:"flex", gap:"10px", justifyContent:"center", alignItems:"center"}}>
            <button style={{padding:"10px 20px", background:"red", color:"white", border:"none", cursor:"pointer"}} onClick={decrement}>-</button>
            {count}
            <button style={{padding:"10px 20px", background:"blue", color:"white", border:"none", cursor:"pointer"}} onClick={increment}>+</button>
            <button style={{padding:"10px 20px", background:"green", color:"white", border:"none", cursor:"pointer"}} onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}