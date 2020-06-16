import React, { useState } from 'react';

const obj ={
    display: "block",
    position:" fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    width: "200px",
    height: "100px",
    margin: "auto",
}

const App=() =>{
    let curr_time = new Date().toLocaleTimeString();
    const [time,setCount] = useState(curr_time);


const GetTime=()=>{
    let curr_time = new Date().toLocaleTimeString();
    setCount(curr_time);
}
setInterval(GetTime,1000);
    return(
        <>
        <div style={obj} >
            <h1>{time}</h1>
        </div>
        </>
    );
};
export default App;
