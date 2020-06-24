import React, { useState } from 'react';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

var notes = [];
const CreateNote = (props) =>{
  
  const [note,chngnote] = useState({title:"",
                                        content:""});
    const addNote = (event) => {
      const value = event.target.value;
      const name  = event.target.name;
      chngnote((preValue) => {
        return({
          ...preValue,
          [name]:value,
        })
      });
    };
   
    const addnote = (event) => {
      event.preventDefault();
      // notes = [note,...notes];
      // console.log(note);
      props.onclick(note);
      chngnote({title:"",content:""});
      
        // console.log(notes);
    }
  return(<>
    <div style={{padding:"20px",width:"50%",margin:"0 auto",marginTop:"8px", border:" 1px solid",boxShadow:" 5px 10px 8px 10px #888888",borderRadius: "8px"}}>
    <form onSubmit={addnote}>
  <div className="form-group">
    <label for="exampleFormControlInput1"><b>Title</b></label>
    <input type="text" value={note.title} name="title" autoComplete="off" onChange={addNote} className="form-control" id="exampleFormControlInput1" placeholder="Add the title of your note"/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlTextarea1"><b>  Add Your Note</b></label>
    <textarea className="form-control" value={note.content} name="content" onChange={addNote} id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Note" ></textarea>
  </div>
  <button type="submit" className='btn btn-outline-success'> <NoteAddIcon/></button>
</form>
</div>
    </>
  );
};

export default CreateNote;
