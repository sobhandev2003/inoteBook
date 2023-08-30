import React from 'react'
import Notes from './Notes'

function Home() {
 
  return (
    < >
      <div class="mb-3 mt-3 container w-50">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3 mt-3 container w-50">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <h1>Your notes</h1>
  
  {/* {
    note.map((note)=>{
      return note.titale;
    })
  } */}
  <Notes/>
</div>
    </>
  )
}

export default Home
