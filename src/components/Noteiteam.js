import React, { useContext } from 'react'
import NotesContext from '../context/notes/notesContext'
import AlertContext from '../context/alert/alertContext';
function Noteiteam(props) {
  //for Alert Context 
  const alertcontext=useContext(AlertContext);
  const{showAleart}=alertcontext;
  //cotext for note
  const context=useContext(NotesContext);
  const {deletNote}=context;
    const {note}=props;
    const deletnote=()=>{
      deletNote(note._id);
      // console.log(note._id);
    showAleart(`${note.titale}  deleted `,"success")
    }
    
  return (<>
   
    <div className='col-md-3'>
      <div className="card my-3" >
  <div className=" row">
    <div className='d-flex justify-content-start  '>
    <h5 className="card-title"><strong>Title: </strong>{note.titale}</h5>
    
  <i className="fa-regular fa-trash-can mx-2 my-2 ponter " onClick={deletnote}></i>
  <i className="fa-solid fa-file-pen mx-2 my-2 ponter " onClick={()=>props.updetingnote(note)} ></i>
  </div>
  <span><strong>Tag: </strong>({note.tag})</span>
    <p className="card-text"><strong>Description: </strong>{note.description}</p>
  </div>
</div>
</div>
</>
  )
}

export default Noteiteam
