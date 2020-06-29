import React from 'react';
import { useHistory } from 'react-router-dom';
const Error404 = () =>{
    const history = useHistory();
return(
    <>
    <h1>Error 404</h1>
    <h2>OOPS‼ Page doesn't exist</h2>
    <button onClick={()=>history.push('/')}>Go to Homepage</button>
    {/* {We can use link tag too😅😅} */}
    </>
)
}
export default Error404;