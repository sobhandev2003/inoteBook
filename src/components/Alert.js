import React, { useContext } from 'react'
import AlertContext from '../context/alert/alertContext';
function Alert() {
  const alertcontext=useContext(AlertContext);
  const {alert}=alertcontext;

  return (
    
    <div >
  
   {alert!==null?
      <div className={`alert alert-${alert.type}`} role="alert"> 
            
    {alert.masge}
</div> :""} 
    </div>
  )
}

export default Alert
