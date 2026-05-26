import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery.jsx";
import Main_pg from "./pages/Main_pg.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";


const App = () => {
  return (
    <div className="bg-black h-screen overflow-hidden flex flex-col">
      <Navbar/>  {/* h-12, fixed so add pt-12 below */}
      <div className="bg-black text-white flex-1 overflow-hidden pt-12">
        {/* flex-1 fills remaining height, pt-12 offsets fixed navbar */}
        <Routes>
          <Route path="/" element={<Main_pg/>} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
