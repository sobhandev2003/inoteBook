import React from 'react'

function Noteiteam(props) {
    const {note}=props;
  return (
    <div className='col-md-3'>
      <div className="card my-3" >
  <div className=" row">
    <h3 className="card-title">{note.titale}</h3>
    <p className="card-text">{note.description}</p>
  </div>
</div>
</div>
  )
}

export default Noteiteam
