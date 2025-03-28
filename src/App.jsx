import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import APropos from "./pages/apropos";
import Contact from "./pages/contact";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import './styles/home.css';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App