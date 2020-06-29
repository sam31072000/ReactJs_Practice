import React, { useState } from 'react';
// import axios from 'axios';  
//it is used for api calling mean hrrps req nd done by async js function
//use effect is used
const ComA = (props) => {
    // const [num,setnum] = useState();
return (
    
    <> 
    <h1>HEllo tell me about urself {props.name}     <br/> I am conponent method of return props </h1>
    {/* <h1>Pokemon</h1>
    <select value={num} onChange={(event) =>{
        setnum(event.target.value);
    }}>
        <option value='None'>None</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
    </select> */}
    </>
)
}
export default ComA;