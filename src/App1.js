import React from 'react';
export default function App1(props) {
    return (
        <div style={{backgroundColor:'pink'}}>
            <h1 style={{textAlign:"center"}}>{props.name}, {props.age}</h1>
            <p style={{textAlign:"center"}}>This is a simple React app.</p>
        </div>
    );
}