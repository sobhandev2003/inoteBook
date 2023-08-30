import React, { useContext } from 'react'
import NotesContext from '../context/notes/notesContext'
import Noteiteam from "./Noteiteam"

function Notes() {
    const context=useContext(NotesContext);
    const {notes,setnotes}=context;
  return (
    <div className='row'>

        <h1>ssddffgghj</h1>
     { notes.map((note)=>{
        // return note.titale;
       return <Noteiteam note={note}/>;
    //    return {note};
      })}
    </div>
  )
}

export default Notes
