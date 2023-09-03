import { useState } from "react";
import NotesContext from "./notesContext";
import { body } from "express-validator";
const NotesStates=(props)=>{
    const initialNotes = []
     const host="http://localhost:5000/api";
     const [notes,setnotes]=useState(initialNotes);
     //Get  all notes from database
     const getnotes=async()=>{
      //API calls
      const response = await fetch(`${host}/notes/getallnotes`,{
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYTEzY2MzNjA2MDJhMGU5MzViYjhhIn0sImlhdCI6MTY5MzcxODgwNH0.5_8k6yOfPGWqNMdCpdOEboKXbPQkLkxWjekiGc-rk2w"
        }
        
      })
      const jason=await response.json();
     setnotes(jason);

     };
     //Add note
    const addNotes =async (titale,description,tag="defult")=>{
      const response = await fetch(`${host}/notes/addnote`,{
        method: 'POST',
        body:JSON.stringify({
          "titale":titale,
          "description":description,
          "tag":tag
                }),
        headers:{
          'Content-Type': 'application/json',
          'Auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYTEzY2MzNjA2MDJhMGU5MzViYjhhIn0sImlhdCI6MTY5MzcxODgwNH0.5_8k6yOfPGWqNMdCpdOEboKXbPQkLkxWjekiGc-rk2w"
        }
        
      })
      const jason=await response.json();
    
  
    
      setnotes(notes.concat(jason));

    }
    //Delet note
    const deletNote=async(id)=>{
        //API calls
        console.log(id);
        const response = await fetch(`${host}/notes/deletnotes/${id}`,{
          method: 'DELETE',
          headers:{
            'Content-Type': 'application/json',
            'Auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYTEzY2MzNjA2MDJhMGU5MzViYjhhIn0sImlhdCI6MTY5MzcxODgwNH0.5_8k6yOfPGWqNMdCpdOEboKXbPQkLkxWjekiGc-rk2w"
          }
          
        })
        const jason=await response.json();
        // console.log(jason);
    const newnote=notes.filter((note)=>{return note._id!==id});
    setnotes(newnote);
      

    }
    //Edit note
    const editNote=(id,titale,description,tag)=>{
for (let index = 0; index < notes.length; index++) {
  const element = notes[index];
  if (element._id===id){
    element.titale=titale;
    element.description=description;
    element.tag=tag;
    
  }
  
}
    }
    return(
        <NotesContext.Provider value={{notes,getnotes,addNotes,editNote,deletNote}}>
            {props.children}
        </NotesContext.Provider>
    )
}
export default NotesStates;