import './App.css';
import HomePage from "./components/HomePage";
import NewLand from "./components/NewLand";
import Auction from "./components/Auction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/register" element={<NewLand />} />
          <Route path="/land/:landId" element={<Auction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
