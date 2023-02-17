import React from "react";

import Nav from "./Nav";
import Donation from "./Components/Donation_form";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Nav />
      <Routes>
        <Route path="/donationForm" element={<Donation />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
