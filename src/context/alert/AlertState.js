import { useState } from "react";
import AlertContext from './alertContext';


import React from 'react'

const AlertState=(props) =>{
    // const [alert,setAlert]=useState("false");
    const [alert,setAlert]=useState(null);
  const showAleart=(masege,type)=>{
//    setAlert("true");
   
setAlert({
            masge:masege,
            type:type,
        })
   
    setTimeout(()=>{
        setAlert(null);
    },1000)
  }

  return (
   <AlertContext.Provider value={{alert,showAleart}}> 
  {props.children}
   </AlertContext.Provider>
  )
}

export default AlertState;
