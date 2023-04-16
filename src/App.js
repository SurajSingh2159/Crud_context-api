import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import CrudState from "./context/CrudState";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <CrudState>
      <Router>
    <div className="container my-4">
       <Routes>
    <Route exact path="/" element ={<Create />} />
    <Route exact path="/read" element ={<Read/>} />
    <Route exact path="/update" element ={<Update/>} />
    </Routes>
    </div>
    </Router>
    </CrudState>
  );
}

export default App;
