import React, { useContext, useEffect } from 'react'
import NotesContext from '../context/notes/notesContext'
import Noteiteam from "./Noteiteam"
import Addnote from './Addnote';

function Notes() {
    const context=useContext(NotesContext);
   
    const {notes,getnotes}=context;
    useEffect(()=>{getnotes()},[])
  return (
    <>
      <Addnote/>
    <div className='row'>

<h1>Your notes</h1>
     { notes.map((note)=>{
        // return note.titale;
       return <Noteiteam key={note._id} note={note}/>;
    //    return {note};
      })}
    </div>
    </>
  )
}

export default Notes
