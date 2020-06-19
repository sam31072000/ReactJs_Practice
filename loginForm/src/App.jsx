import React, { useState } from 'react';

const App = ()=>{
    const [show,chng] = useState({
        fname:"",
        lname:"",
        email:"",
        pnumber:"",
    });
    // const [show2,chng2] = useState();
    // const [fullName,chngName] = useState();
    // const [lastName,chngltName] = useState();
    const onSub = (event)=>{
        event.preventDefault();
        alert("Form Submitted");
        // chngName(show);
        // chngltName(show2)
        // chng("");
        // chng2("");
    }
    const action=(event)=>{
        // event.preventDefault() to prevent default behaviour
        // chng(event.target.value);
        const value = event.target.value;
        const name = event.target.name;
        chng((preValue)=>{        //preValue tells the revious state
           console.log(preValue);//contains previous whole data as a object
            return ({
                ...preValue,    //spead operator extends whole object here
                [name] : value,  //here name treat as a string without brackets and updates the value of object
            }
            )
            // if(name==="fname"){
            //     return({
            //         fname : value,
            //         lname : preValue.lname,
            //         email: preValue.email,
            //         pnumber : preValue.pnumber,
            //     })
            // }
            // else if(name==="email"){
            //     return({
            //         fname : preValue.fname ,
            //         lname : preValue.lname,
            //         email : value,
            //         pnumber : preValue.pnumber,
            //     })
            // }
            // else if(name==="pnumber"){
            //     return({
            //         fname : preValue.fname ,
            //         lname : preValue.lname,
            //         email : preValue.email,
            //         pnumber : value,
            //     })
            // }
            // else{
            //     return({
            //         fname : preValue.fname,
            //         lname : value,
            //         email: preValue.email,
            //         pnumber : preValue.pnumber,
            //     })
            // }

        })
        console.log(event.target.value);
    }
    // const action2=(event)=>{
    //     // event.preventDefault() to prevent default behaviour
    //     chng2(event.target.value);
    //     console.log(event.target.value);
    // }
    return(
    <>
    <div>
    <form onSubmit={onSub}>       
     <h1>Hello {show.fname} {show.lname} </h1>
     <h4> {show.email} </h4>
     <h5> {show.pnumber} </h5>
        <input type="text" name="fname" style={{backgroundColor:"white"}} placeholder="Enter Your Name" onChange={action} value={show.fname} /*value="" use defaultValue*/></input>
        <br/> <br/>
               
        <input type="text" name = "lname" style={{backgroundColor:"white"}} placeholder="Enter Your Last Name" onChange={action} value={show.lname} /*value={show2}*/ /*value="" use defaultValue*/></input>
        <br/> <br/>
        <input type="email" name="email" style={{backgroundColor:"white"}} placeholder="Enter Your Email" onChange={action} value={show.email} /*value="" use defaultValue*/></input>
        <br/><br/>
        
        <input type="number" name="pnumber" style={{backgroundColor:"white"}} placeholder="Enter Your MObile NUmber" onChange={action} value={show.pnumber} /*value="" use defaultValue*/></input>
        
        <br/>
        <button type="submit" >Click Me<span role="img">😉</span></button>
        </form>

    </div>
    </>);
};

export default App;
