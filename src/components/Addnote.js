import React, { useContext, useState } from 'react'
import NotesContext from '../context/notes/notesContext'
import AlertContext from '../context/alert/alertContext';

function Addnote() {
  //Aleart context
  const alertcontext=useContext(AlertContext);
  const{showAleart}=alertcontext;
  //Note context
    const context=useContext(NotesContext);
    const {addNotes}=context;
    const [note,setnote]=useState({titale:"",description:""})
    const handelClick=(e)=>{
        e.preventDefault();
        addNotes(note.titale ,note.description,note.tag)
        showAleart("secusfully added","secusful")
    }
const onchange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
}
  return (
    <div className='container'>
    <div className="mb-3 mt-3  w-50">
    <label htmlFor="titale" className="form-label">Title</label>
    <input type="text" className="form-control" id="titale" name='titale' onChange={onchange} placeholder="Enter your note title"/>
  </div>
  <div className="mb-3 mt-3  w-50">
    <label htmlFor="description" className="form-label">Description</label>
    <textarea className="form-control" id="description" name='description' rows="3" onChange={onchange}></textarea>
    </div>
    <div className="mb-3 mt-3  w-50">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' onChange={onchange} placeholder="Enter your note title"/>
  </div>
  <input type='submit' className='center' onClick={handelClick}   />
 
 </div>
    
  )
}

export default Addnote
