import React from 'react'
import{
Link,
useLocation,
useNavigate
}from "react-router-dom"

function Navbar() {
  const navigate=useNavigate();
  let location=useLocation();
  const handlelogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }
 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
        </li>
       
       
      </ul>
    </div>
     {!localStorage.getItem('token')?<form className="d-flex float-end" role="search">
      <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-1" to="/signup" role="button">Sign Up</Link>
      </form> :<button onClick={handlelogout} className='btn btn-primary '>Log Out</button>}
  </div>
</nav>
  )
}

export default Navbar
