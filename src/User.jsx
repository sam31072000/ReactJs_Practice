import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const User = () => {
    const {fname,lname} = useParams();  //fname lname should be same
    const location = useLocation();
    const history = useHistory();        
    console.log(history); //it used to go back go forward push to anotherpage and so on..
    //it is mututable and return object nd also contain location but not recomended to use bcoz it is mutuable
    console.log(location); //gives an object of details of an pafe ex.key hash pathname etc.
return(
    <>
        <h1>Hello {fname} {lname} I am useParam</h1>
        <h2>My location Name is {location.pathname}</h2>
        {location.pathname === `/User/Sam/Agarwal` ? <h1>You Are VIP my BOY</h1>:null};
        <button onClick={()=> {history.push('/')
        }}>HOMEPAGE</button>
    </>
)
};

export default User;