import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import ToDo from "./page/ToDo/ToDo";

function App() {
  return (

      <div className="container">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
            <Link to={"/todo"}>ToDo</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </div>
  
  );
}

export default App;
