import { useState } from "react";
import NotesContext from "./notesContext";
// import { body } from "express-validator";

const NotesStates=(props)=>{
  // const authToken=localStorage.getItem('token');
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
          'Auth-token':localStorage.getItem('token')
        }
        
      })
      const jason=await response.json();
     setnotes(jason);
          // console.log(authToken);
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
          'Auth-token':localStorage.getItem('token')
        }
        
      })
      const jason=await response.json();
    
  
    
      setnotes(notes.concat(jason));

    }
    //Delet note
    const deletNote=async(id)=>{
        //API calls
        try{

        
        console.log(id);
        const response = await fetch(`${host}/notes/deletnotes/${id}`,{
          method: 'DELETE',
          headers:{
            'Content-Type': 'application/json',
            'Auth-token':localStorage.getItem('token')
          }
          
        })
        // eslint-disable-next-line
        const jason=await response.json();
        // console.log(jason);
    const newnote=notes.filter((note)=>{return note._id!==id});
    setnotes(newnote);
      
      }
      catch(err) {
        console.log(err);
      }
    }
    //Edit note
    const editNote=async(id,titale,description,tag)=>{
      // API 
          //API calls
          // console.log(id);
          try{

          
          const response = await fetch(`${host}/notes/updetnotes/${id}`,{
            method: 'PUT',
            body:JSON.stringify({
              "titale":titale,
              "description":description,
              "tag":tag
                    }),
            headers:{
              'Content-Type': 'application/json',
              'Auth-token':localStorage.getItem('token')
            }
            
          })
          // eslint-disable-next-line
          const jason=await response.json();
          console.log(jason.titale);
          console.log(titale);
          if(jason.titale!==titale||jason.description!==description){
            return false;
          }
         
      //-------------
      const newnote=JSON.parse(JSON.stringify(notes));
for (let index = 0; index < newnote.length; index++) {
  const element = newnote[index];
  if (element._id===id){
  
    newnote[index].titale=titale;
    newnote[index].description=description;
    newnote[index].tag=tag;
    break;
    
  }
  
}
setnotes(newnote);
return true;
}
catch{
  return false;
}
// getnotes();
    }

    return(
        <NotesContext.Provider value={{notes,getnotes,addNotes,editNote,deletNote}}>
            {props.children}
        </NotesContext.Provider>
    )
}
export default NotesStates;