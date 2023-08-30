import { useState } from "react";
import NotesContext from "./notesContext";
const NotesStates=(props)=>{
    const initialNotes = [
        {
          "_id": "64ea06b5024def1f892eef7a",
          "user": "64e79bf8d5a23eb47445d83f",
          "titale": "frontend fremwork1",
          "description": "react js,angular js,vew js ,etc",
          "tag": "jsFremwork",
          "date": "2023-08-26T14:05:41.665Z",
          "__v": 0
        },
        {
          "_id": "64ea06db024def1f892eef7e",
          "user": "64e79bf8d5a23eb47445d83f",
          "titale": "frontend fremwork2",
          "description": "react js,angular js,vew js ,etc",
          "tag": "jsFremwork",
          "date": "2023-08-26T14:06:19.333Z",
          "__v": 0
        },
        {
          "_id": "64ea06db024def1f892eef7e",
          "user": "64e79bf8d5a23eb47445d83f",
          "titale": "frontend fremwork2",
          "description": "react js,angular js,vew js ,etc",
          "tag": "jsFremwork",
          "date": "2023-08-26T14:06:19.333Z",
          "__v": 0
        },
        {
          "_id": "64ea06db024def1f892eef7e",
          "user": "64e79bf8d5a23eb47445d83f",
          "titale": "frontend fremwork2",
          "description": "react js,angular js,vew js ,etc",
          "tag": "jsFremwork",
          "date": "2023-08-26T14:06:19.333Z",
          "__v": 0
        },
        {
          "_id": "64ea06db024def1f892eef7e",
          "user": "64e79bf8d5a23eb47445d83f",
          "titale": "frontend fremwork2",
          "description": "react js,angular js,vew js ,etc",
          "tag": "jsFremwork",
          "date": "2023-08-26T14:06:19.333Z",
          "__v": 0
        },
        {
          "_id": "64ea06db024def1f892eef7e",
          "user": "64e79bf8d5a23eb47445d83f",
          "titale": "frontend fremwork2",
          "description": "react js,angular js,vew js ,etc",
          "tag": "jsFremwork",
          "date": "2023-08-26T14:06:19.333Z",
          "__v": 0
        },
        {
          "_id": "64ea0f92cb78f381c20203bb",
          "user": "64e79bf8d5a23eb47445d83f",
          "titale": "frontend fremwork3",
          "description": "react js,angular js,vew js ,etc",
          "tag": "jsFremwork",
          "date": "2023-08-26T14:43:30.875Z",
          "__v": 0
        }
      ]
     
     const [notes,setnotes]=useState(initialNotes);
    
    return(
        <NotesContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}
export default NotesStates;