import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [credential,setCredential] =useState({email:"",password:""})
    const onsubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`,{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({mail:credential.email,pasword:credential.password})
          })
          const jason=await response.json();
          console.log(jason);
          if(jason.suces){
            localStorage.setItem('token',jason.authentoken);
            // history.push('/');
            navigate('/');
          }
          else{
            alert("ples fill curectly");
          }
    }
    const onchange=(e)=>{
        setCredential({...credential ,[e.target.name]:e.target.value})
    }
  return (
    <div className='container' onSubmit={onsubmit}>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" value={credential.email} onChange={onchange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' className="form-control" id="exampleInputPassword1" value={credential.password}  onChange={onchange}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
