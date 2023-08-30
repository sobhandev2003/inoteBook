
import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NotesStates from "./context/notes/NotesStates"

function App() {
  return (
    <>
   <NotesStates>
    <Router>
<Navbar/>
     <Routes>
      <Route exact path="/" element={<div className="container"> <Home/></div>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
     </Routes>

    </Router>
    </NotesStates>
    </>
  );
}

export default App;
