import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import React from 'react';
const Note = (props) =>{

  const delet = ()=>{
    props.onclick(props.uniq); //we cannot directly call in onclick function
  }
  return(
    <>
  <div className="card-body col-md-3 mx-1 " style={{ border:" 1px solid",boxShadow:" 5px 10px #888888",borderRadius: "8px"}}>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <button onClick={delet} className="btn btn-outline-danger "> <DeleteOutlineIcon/> </button>
</div>
    </>
  );
};

export default Note;
