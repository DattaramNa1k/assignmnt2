import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Teams from "./Pages/Teams";
import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
  <div className="bg">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="teams" element={<Teams />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<div>404 Not found</div>} />
    </Routes>
  </div>
  );
}

export default App;
