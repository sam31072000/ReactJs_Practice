// import React from 'react'
// import Netflix_list from './Netflix_list';

// const nm="Shaksham Agarwal";

// function App(){
//     //we can use javascript code too in jsx file
// return(
//     <>
//     <Netflix_list/>
//     </>
// );
// }
// function add(a,b){
//     let result = a+b;
//     return result;
// }

// export default App;
// export {nm,add};  //we can pass any number of variables in this
// //only one export default needed
// //we can export as much as needed beside of default using{} in which function name is passed

////////SLOT MACHINNE GAME/////////////
// import React from 'react';

// const AppMchn = (props) => {
//     // let x = '❤',y = '❤',z = '😉';

//     if((props.x===props.y) && (props.x===props.z)){
//         return (
//             <>
//                 <div className="slot_inner">
//                     <h1>
//                         {props.x}{props.y}{props.z}
//                     </h1>
//                     <h1>This is matching</h1>
//                 </div>
//             </>
//         )
//     }
//     else{
//         return (
//             <>
//                 <div className="slot_inner">
//                     <h1>
//                         {props.x}{props.y}{props.z}
//                     </h1>
//                     <h1>This is not matching</h1>
//                 </div>
//             </>
//         )
//     }
// }

// const App = () =>{

//     return (
//         <>
//             <h1 className="heading_style">🖥Welcome(*^_^*) <span styel={{fontWeight:"bold"}}>To Slot Machine Game</span>🖥</h1>
//             <div className="Slottable">
//             <AppMchn x="😀" y="😀" z="😀" />
//             <AppMchn x="🍔" y="🍕" z="🍟" />
//             <AppMchn x="😉" y="😉" z="😉" />
//             <AppMchn x="🎆" y="✨" z="🎇" />
//             </div>
//         </>
//     )
// };
///////////////////RectJs Hooks//////////
// import React, { useState } from 'react';
// let obj ={
//     textAlign:'center' ,
//     marginTop:'20px',
//     marginBottom:'auto',
//     marginLeft:'auto',
//     marginRight:'auto',

// };
// // const state = useState();
// // console.log(state)//gives error becoz state always be put into function
// // //we cannot inc value of count directly so we use state i.e hooks
// // let count=1;
// // const IncNum=()=>{
// //     console.log("clicked")
// //     console.log(count++)
// // }
// const App=() =>{
//     // let count=1;
//     const state = useState();
//     const [count,setCount] = useState(0); //0 is the initial value and destructuring of array is used
// // count is the current value and setCount is the updated value nd afterwards it become current value when we click button
//     // console.log(count,setCount)
// console.log(state) //it creates an array
// //we cannot inc value of count directly so we use state i.e hooks

// const IncNum=()=>{
//     setCount(count+1);
//     console.log("clicked")
//     // console.log(count++)
// }
//     return(
//         <>
//             <h1 style={obj}>{count}</h1>
//             <button className="btn" onClick={IncNum}>Click Me</button>
//         </>
//     );
// };

// import React, { useState } from 'react';

// const obj ={
//     // textAlign:"center",
//     // display:"flex",
//     // flexDirection:"column",
//     // justifyContent:"center",
//     // alignItems:"center",
//     // position:"absolute",
//     // marginRight:"auto",
//     // marginLeft:"auto",
//     // marginTop:"0",
//     // marginBottom:"0",
//     // width:"60%",
//     // height:"200px",
//     // margin:"0 auto",
    // display: "block",
    // position:" fixed",
    // top: "0",
    // bottom: "0",
    // left: "0",
    // right: "0",
    // width: "200px",
    // height: "100px",
    // margin: "auto",
// }
// // const btn = {
// //     padding:"12px 20px",
// //     cursor:"pointer",
// //     fontVariant:"small-caps",
// //     textAlign:"center",
// // }

// const App=() =>{
//     // let count=1;
//     // const state = useState();
//     let curr_time = new Date().toLocaleTimeString();
//     const [time,setCount] = useState(curr_time);
// // console.log(state) //it creates an array

// const GetTime=()=>{
//     let curr_time = new Date().toLocaleTimeString();
//     setCount(curr_time);
//     console.log("clicked")
//     // console.log(count++)
// }
// setInterval(GetTime,1000);
//     return(
//         <>
//         <div style={obj} >
//             <h1>{time}</h1>
//         </div>
//         </>
//     );
// };
// export default App;

///////////Events///////
// import React, { useState } from 'react';

// const App = () =>{
//     const[bg,setbg] = useState('red');    //setbg is a function nd always useed in functional component
//     const[name,setname] = useState('Click me');
//     const bgChng=()=>{
//         setbg("blue");
//         setname("You clicked.Double Click to change");
//         console.log("Clicked");
//     }
//     const reChng=()=>{
//         setbg('red');
//         setname("Click Me")
//         console.log("Clicked");
//     }

//     return(<>
//         <div style={{backgroundColor:bg,}}>
//             <button onClick={bgChng} onDoubleClick={reChng}>{name}</button>
//         </div>
//     </>);
// };

// export default App;

///////////////////FORMS/////////////////

// import React, { useState } from 'react';
// import AddIcon from '@material-ui/icons/Add';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));

// const App = ()=>{
//     const classes = useStyles();
//     const [show,chng] = useState({
//         fname:"",
//         lname:"",
//         email:"",
//         pnumber:"",
//     });
//     const [num,chngnum] = useState(0);
//     // const [show2,chng2] = useState();
//     // const [fullName,chngName] = useState();
//     // const [lastName,chngltName] = useState();

//     const incdec = (event) => {
//         const name = event.target.name;
//         // console.log("Hello");
//         chngnum((preValue)=>{     //prevValue ki  jgah kuch be naam delo nd chngnum state hai
//             console.log(preValue);
//             if(name==='inc')
//             return preValue + 1;  //we can use num here also bcoz it is also a variable
//             else{
//                 if(preValue===0){
//                 alert("sorry min limit exceed");
//                 return 0;}
//                 else
//                 return num-1;
//             }
//         })
//     }

//     const onSub = (event)=>{
//         event.preventDefault();
//         alert("Form Submitted");
//         // chngName(show);
//         // chngltName(show2)
//         // chng("");
//         // chng2("");
//     }
//     const action=(event)=>{
//         // event.preventDefault() to prevent default behaviour
//         // chng(event.target.value);
//         const value = event.target.value;
//         const name = event.target.name;
//         chng((preValue)=>{        //preValue tells the revious state
//             console.log(preValue);//contains previous whole data as a object
//             return ({
//                 ...preValue,    //spead operator extends whole object here
//                 [name] : value,  //here name treat as a string without brackets and updates the value of object
//             }
//             )
//             // if(name==="fname"){
//             //     return({
//             //         fname : value,
//             //         lname : preValue.lname,
//             //         email: preValue.email,
//             //         pnumber : preValue.pnumber,
//             //     })
//             // }
//             // else if(name==="email"){
//             //     return({
//             //         fname : preValue.fname ,
//             //         lname : preValue.lname,
//             //         email : value,
//             //         pnumber : preValue.pnumber,
//             //     })
//             // }
//             // else if(name==="pnumber"){
//             //     return({
//             //         fname : preValue.fname ,
//             //         lname : preValue.lname,
//             //         email : preValue.email,
//             //         pnumber : value,
//             //     })
//             // }
//             // else{
//             //     return({
//             //         fname : preValue.fname,
//             //         lname : value,
//             //         email: preValue.email,
//             //         pnumber : preValue.pnumber,
//             //     })
//             // }

//         })
//         console.log(event.target.value);
//     }
//     // const action2=(event)=>{
//     //     // event.preventDefault() to prevent default behaviour
//     //     chng2(event.target.value);
//     //     console.log(event.target.value);
//     // }
//     return(
//     <>
    
//     <div>

//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>

//     <form onSubmit={onSub}>       
//      <h1>Hello {show.fname} {show.lname} </h1>
//      <h4> {show.email} </h4>
//      <h5> {show.pnumber} </h5>
//         <input type="text" name="fname" style={{backgroundColor:"white"}} placeholder="Enter Your Name" onChange={action} value={show.fname} /*value="" use defaultValue*/></input>
//         <br/> <br/>
               
//         <input type="text" name = "lname" style={{backgroundColor:"white"}} placeholder="Enter Your Last Name" onChange={action} value={show.lname} /*value={show2}*/ /*value="" use defaultValue*/></input>
//         <br/> <br/>
//         <input type="email" name="email" style={{backgroundColor:"white"}} placeholder="Enter Your Email" onChange={action} value={show.email} /*value="" use defaultValue*/></input>
//         <br/><br/>
        
//         <input type="number" name="pnumber" style={{backgroundColor:"white"}} placeholder="Enter Your MObile NUmber" onChange={action} value={show.pnumber} /*value="" use defaultValue*/></input>
        
//         <br/>
//         <Button variant="outlined" color="primary">
//         Primary
//       </Button>
//         </form>

//         <h1> {num} </h1>
//         <button onClick={incdec} name="inc"> <AddIcon /> </button>
//         <button onClick={incdec} name="dec">Dec</button>

//     </div>
//     </>);
// };

// export default App;

////////////////////KEEP NOTES APP//////////////////////////

// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import CreateNote from './CreatNote';
// import Note from './Note';
// const App = () =>{
  
// const [note,updatenote] = useState([]);
// // let n=0;
// // useEffect(()=>{
// //   // alert('Note Created');
  
// //   document.title = `Note added ${n}`;
// // },[note]);

//   const addit = (notes) =>{
    
//     updatenote((prevData) => {
//       return [notes,...prevData];
//     });
//     // console.log(notes);
//     alert("Note Created");
//   }
//   const dlnote = (uniq) => {
//     // alert("Heyy stop");
//     // delete note[key];  key is not a property
//     const newarray=[];
//     for(var i of note){
//       console.log(i)
//       newarray.push(i);
//     }

//     newarray.splice(uniq,1);
//      console.log(newarray);
//     updatenote(newarray);
    
//   }

//   return(
//     <>
//         <Header/>
//         <CreateNote onclick={addit}/>
        
//     <div style={{padding:"20px",}} className="container">
//     <div className="row mx-4">
//         {note.map((val,index)=>{
//          return( <Note 
//            key={index}
//            uniq = {index}
//           title= {val.title}
//           content = {val.content}
//           onclick = {dlnote}
//         />);
//         })}
//         </div>
//         </div>
 
  
//         <Footer/>
//     </>
//   );
// };

// export default App;



///////////////API///////////////
///////////////////React Route///////////////////
import React from 'react';
import { Route,Switch, Redirect} from 'react-router-dom';
import ComA from './ComA';
import ComB from './ComB';
import Menu from './Menu';
import User from './User';
import SearchImage from './SearchImage';
import Error404 from './Error404';


// '/' tells the home page //also say default page
// exact is useful keyword
//
const App = () => {
    const subpart = () => {
        return <h1>"Hello I am subbpart"</h1>
    }

        const defaultpage = () => {
            return (<>
           
            <h1>"Hello I am HomePage"</h1>
            </>);
        }
return (
   
    <> 
      <Menu/>
    <Switch> {/* switch is used to return specififc element otherwise it return all */}
        <Route exact path='/' component={defaultpage} />  {/* it return when the matching character match when we not use exact */}
        <Route exact path='/ComA' component={()=> <ComA name='ComA'/>} />       {/*Another method of calling and called component method*/}
        <Route path='/ComA/subpart' component={subpart} />
        <Route path='/User/:fname/:lname' component={User} />
        <Route path='/SearchImage' component={SearchImage} />
        <Route path='/ComB' render={()=> <ComB name='ComB'/>} />      {/*This called ender method..it shows previous if no chnages occure in place of component method refreshes everytime*/}
       <Route component={Error404}></Route>
       <Redirect to='/' /> {/*direct Redirect to HomePage when page not exist*/ }
       {/*render method preferable if we want to pass a props*/}
        {/* <Route  component={}/> Return when none of the url match..or simple says error component return when none of the match  */}
    </Switch>
    {/* <ComA/>
    <ComB/> */}
    </>
)
}
export default App;
