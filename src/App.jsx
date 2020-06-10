import React from 'react'
import Netflix_list from './Netflix_list';

const nm="Shaksham Agarwal";

function App(){
    //we can use javascript code too in jsx file
return(
    <>
    <Netflix_list/>
    </>
);
}
function add(a,b){
    let result = a+b;
    return result;
}

export default App;
export {nm,add};  //we can pass any number of variables in this
//only one export default needed
//we can export as much as needed beside of default using{} in which function name is passed