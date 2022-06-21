import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sucess from "./Pages/Sucess/Sucess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sucess" element={<Sucess />} />
      </Routes>
    </Router>
  );
}

export default App;
