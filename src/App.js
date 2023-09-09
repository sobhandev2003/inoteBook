import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NotesStates from "./context/notes/NotesStates"
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  
  return (
    <>
   <NotesStates>
    <AlertState>
    <Router>
<Navbar/>
<div style={{"height":"45px"}}>
<Alert  />
</div>
     <Routes>
      <Route exact path="/" element={<div className="container"> <Home/></div>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/signup" element={<Signup/>}></Route>
     </Routes>

    </Router>
    </AlertState>
    </NotesStates>
    </>
  );
}

export default App;
