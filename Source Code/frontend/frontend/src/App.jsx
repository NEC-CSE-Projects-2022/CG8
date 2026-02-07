import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Objectives from "./pages/Objectives";
import Procedure from "./pages/Procedure";
import ModelResult from "./pages/ModelResult";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* padding for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/procedure" element={<Procedure />} />
          <Route path="/model-result" element={<ModelResult />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
