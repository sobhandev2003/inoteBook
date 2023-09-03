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
     </Routes>

    </Router>
    </AlertState>
    </NotesStates>
    </>
  );
}

export default App;
