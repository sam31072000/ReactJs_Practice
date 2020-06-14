// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   <h1>Hello World</h1>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// var React = require('react')
import React from 'react';  //to use JSX(which is html tags in js file and if not imported webpack module error will come
import ReactDom from 'react-dom';  //To use render function
import "./index.css" ;          //to include css file
// import Other_name from './Heading';
import * as quick from './Heading';
import App,{nm,add} from './App';

// var ReactDom = require('react-dom')
const fname = "Shaksham";
const lname = "Agarwal";
var mydate = new Date();
const rand_img = "https://source.unsplash.com/random/500x250";
const curr_date = new Date().toLocaleDateString(); //by same method we can get time also
const curr_hr = new Date().getHours();
let greeting="";
const greet_style = {};
if(curr_hr >=0 && curr_hr<12 ){
  greeting="Good Morning";
  greet_style.color="skyblue";
}
else if(curr_hr>=12 && curr_hr<19){
  greeting="Good Afternoon";
  greet_style.color="orange";
}
else{
  greeting="Good Night";
  greet_style.color="black";
}
const obj_css={
    color:"blue",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily: "'Metal Mania', cursive"
  };//we have to use camelcase letters in place of kebab case letter

// className="header" use for external css

ReactDom.render(<React.Fragment>
<h1 style={obj_css}>{`${fname} ${lname}`}</h1>

{quick.default()}
<p>{quick.Myname()}</p>
<h2>Hello Sam,<span style={greet_style}>{greeting}</span></h2>
<p>Netflix Top 5 Webseries</p>
 
<App></App>
<p>{nm} by additional export</p>
<p>The random number is {Math.random()}</p>
<p>The addition of two number is {add(4,4)}</p>
<p>{`The current date is ${mydate.getDate()}/${mydate.getMonth()+1}/${mydate.getFullYear()} and we get by another method also ${curr_date}`}</p>
<p>{`The current time is now ${mydate.getHours()}:${mydate.getMinutes()}:${mydate.getSeconds()}`}</p>
<h2 contentEditable='true' >Hey!! You can edit this</h2>
<img src={rand_img} alt="random image" />   
</React.Fragment>
  ,document.getElementById('root'));

  // We can use <> </> or make an array or we can use div tag to render multiple elements this in place of React.Fragment
  // <img />   self closing tags in ract

/////////////////////////////////////////Props/MAp function//Arrow fat//////////////////////////////////////////////
import Card,{Sdata} from './Card';
// import Sdata from './Sdata';
//curly braces use if we want to use javascript in jsx}
console.log(Sdata);

function ndata(val){
  console.log(val);
//val represents element in array respective to index number
  return(
    <Card
      imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    watch_link={val.watch_link}
    />
  )
}

//we can create an array for passing an object and acess like array_name[index_number].property_name
ReactDOM.render(<>
  <Card 
    imgsrc={Sdata[0].imgsrc}
    title="__"
    sname="Random 4"
    watch_link="https://www.youtube.com/"
  />
  {/* we cannot add className in component based tags bcozita not html tag */}
  {Sdata.map(ndata)}
</>,document.getElementById("root"));
