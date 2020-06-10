import React from 'react'

//same as component name heading.js
//first letter should be capital
function Heading(){
    return <h2>This is return by component in which import name is changed</h2>;
}         

function Myname(){
    let name="Sam Ag";
    return name;
}

export default Heading;  //we dont add aprenthses() otherwise they call here only
export {Myname};