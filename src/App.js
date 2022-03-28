import "./App.css";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Adduser from "./Components/Adduser";
import Edituser from "./Components/Edituser";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
      <Router>
        <Routes>
          < Route exact path="/" element={<Home />} />
          < Route path="/add" element={<Adduser />} />
          < Route  path="/edit/:id" element={<Edituser />} />
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
