import React from "react";
export default function App6() {
    const [hobby,setHobby] = React.useState([]);
    const [text,setText] = React.useState("");
    const handleSubmit = () => {
        setHobby([...hobby,text]);
        setText("");
    }
    return(
        <div>
            <div style={{textAlign:"center"}}>
                <input type="text" placeholder="Enter your hobby" value={text} onChange={(event) => setText(event.target.value)} />
                <button onClick={handleSubmit} style={{backgroundColor:"green", color:"white", margin:"5px", padding:"8px", border:"none", borderRadius:"10px"}}>ADD</button>
            </div>
            <hr></hr>
            <h2 style={{textAlign:"center"}}>My Hobbies</h2>
            <ul>
                {hobby.map((h,index) => (
                    <li key={index}>{h}</li>
                ))}
            </ul>
            {hobby.length === 0 && <p style={{textAlign:"center"}}>No hobbies added</p>}
            {hobby.length >0 && (
                <button onClick={() => setHobby([])} style={{backgroundColor:"red", color:"white", margin:"5px", padding:"8px", border:"none", borderRadius:"10px"}}>Clear All</button>
            )}
        </div>
    )
}