import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Donate from "./Donate";
import Volunteer from "./Volunteer";
import Article from "./Article";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DonateList from "./DonateList";
import VolunterDetail from "./VolunterDetail";

function Public() {
  return (
    <>
      <Navbar />
      <div className="w-full px-28 md:px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/Volunteer" element={<Volunteer />} />
          <Route path="/Volunteer/Detail" element={<VolunterDetail />} />

          <Route path="/Donate" element={<Donate />} />
          <Route path="/Donate/list" element={<DonateList />} />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default Public;
