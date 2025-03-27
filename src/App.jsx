import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import './styles/home.css';
import APropos from "./pages/apropos";
import Contact from "./pages/contact";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App