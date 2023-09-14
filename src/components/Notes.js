import React, { useContext, useEffect, useRef, useState } from 'react'
import NotesContext from '../context/notes/notesContext'
import Noteiteam from "./Noteiteam"
import Addnote from './Addnote';
import AlertContext from '../context/alert/alertContext';
import { useNavigate } from 'react-router-dom';
// import Updetnote from './Updetnote';


function Notes(props) {
  const navigate=useNavigate();
  const alertcontext=useContext(AlertContext);
  const{showAleart}=alertcontext;
    const context=useContext(NotesContext);
   
    const {notes,getnotes,editNote}=context;
    useEffect(()=>{
      if(localStorage.getItem('token')){

        getnotes();
      }
    else{
      navigate('/login');
    }
    }
    // eslint-disable-next-line
    ,[]);
    const ref=useRef(null);
    const [note,setnote]=useState({id:null,etitale:"",edescription:"",etag:""});
    const updetingnote=(currentnote)=>{

      setnote({id:currentnote._id, etitale:currentnote.titale,edescription:currentnote.description,etag:currentnote.tag});
     
     ref.current.click();
    }
    const updetnote=async(e)=>{
      console.log(`${note.id} && ${note.etitale} && ${note.edescription}`);
      let updet= await editNote(note.id,note.etitale,note.edescription,note.etag);
    //  console.log(updet);
     (updet)?showAleart("secusfully updet","success"):showAleart("updetintg fail","warning");
  //  if(updet){
  //  console.log(notes.titale);
  //    showAleart("secusfully updet","secusful");
  //  }
    }
    const onchange=(e)=>{
      setnote({...note,[e.target.name]:e.target.value})
  }
    
  return (
    <>
    <button type="button" style={{"display":"none"}} ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  {/* Launch static backdrop modal */}
</button>
<div  className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div  className="modal-dialog">
    <div  className="modal-content">
      <div  className="modal-header">
        <h5  className="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div  className="modal-body">
        {/* { console.log(correntNote)} */}
        <div className='container'>
    <div className="mb-3 mt-3  w-50">
    <label htmlFor="etitale" className="form-label">Title</label>
    <input type="text" value={note.etitale} className="form-control"  id="etitale" name='etitale' onChange={onchange} placeholder="Enter your note title"/>
  {/* { console.log(note.etitale)} */}
  </div>
  <div className="mb-3 mt-3  w-50">
    <label htmlFor="edescription" className="form-label">Description</label>
    <textarea value={note.edescription} className="form-control" id="edescription" name='edescription' rows="3" onChange={onchange}></textarea>
    </div>
    <div className="mb-3 mt-3  w-50">
    <label htmlFor="etag" className="form-label">Tag</label>
    <input value={note.etag} type="text" className="form-control" id="etag" name='etag' onChange={onchange} placeholder="Enter your note title"/>
  </div>
  
 </div>
      </div>
      <div  className="modal-footer">
        <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitale.length<3||note.edescription.length<5} type="button" onClick={updetnote}  className="btn btn-primary" data-bs-dismiss="modal">Updetnote</button>
      </div>
    </div>
  </div>
</div>
      <Addnote/>
    <div className='row'>
<h1>Your notes</h1>
<div className='contanier mx-3'>
  {notes.length===0 && 'No notes available'}
</div>
     { notes.map((note)=>{
        // return note.titale;
       return <Noteiteam key={note._id} note={note} updetingnote={updetingnote} />;
    //    return {note};
      })}
    </div>
    </>
  )
}

export default Notes
