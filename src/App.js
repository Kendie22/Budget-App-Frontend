import "./App.css";
import NavBar from "./Components/NavBar.js";
import Create from "./Components/Create.js"
import Index from "./Components/Index"
import Show from "./Components/Show"
import Homepage from "./Components/Homepage";
import ShowIndex from "./Components/ShowIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/:id" element={<ShowIndex />} />
          <Route path="/transactions/:id/edit" element={<Show />} />
          <Route path="/transactions/new" element={<Create />} />

        </Routes>
      </Router>

    </div>


  );
};
