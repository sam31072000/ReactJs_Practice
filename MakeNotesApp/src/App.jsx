import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreatNote';
import Note from './Note';
const App = () =>{
  
const [note,updatenote] = useState([]);

  const addit = (notes) =>{
    updatenote((prevData) => {
      return [notes,...prevData];
    });
    console.log(notes);
  }
  const dlnote = (uniq) => {
    // alert("Heyy stop");
    // delete note[key];  key is not a property
    const newarray=[];
    for(var i of note){
      console.log(i)
      newarray.push(i);
    }

    newarray.splice(uniq,1);
     console.log(newarray);
    updatenote(newarray);
    
  }

  return(
    <>
        <Header/>
        <CreateNote onclick={addit}/>
        
    <div style={{padding:"20px",}} className="container">
    <div className="row">
        {note.map((val,index)=>{
         return( <Note 
           key={index}
           uniq = {index}
          title= {val.title}
          content = {val.content}
          onclick = {dlnote}
        />);
        })}
        </div>
        </div>
 
  
        <Footer/>
    </>
  );
};

export default App;
