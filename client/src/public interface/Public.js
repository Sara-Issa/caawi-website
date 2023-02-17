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
import Volenter from "./Volenter";
import PrivacyPolicy from "./PrivacyPolicy";
import Jobs from "./jobs"
import Terms from "./Terms";

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
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Volunt" element={<Volenter/>} />
          <Route path="/privacy_policy" element={<PrivacyPolicy/>} />
          <Route path="/get_hired" element={<Jobs/>} />


        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default Public;
