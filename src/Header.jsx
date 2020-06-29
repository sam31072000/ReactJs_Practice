import React from 'react';
import NoteIcon from '@material-ui/icons/Note';
const Header = () =>{
  return(
    <>
<nav className="navbar navbar-light bg-warning justify-content-between">
  <a className="navbar-brand"><NoteIcon/>Make Notes</a>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>


    </>
  );
};

export default Header ;