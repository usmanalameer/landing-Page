import React from "react";
import {
    BrowserRouter as Router,Routes,Route
  
} from "react-router-dom";
import About from "../../screens/about";
import Contact from "../../screens/contact";
import Home from "../../screens/home";

import Services from "../../screens/services";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" elemene={< Home />} />
        <Route path="/" elemene={<Services />} />
        <Route path="/" elemene={<About />} />
        <Route path="/" elemene={<Contact />} />
      </Routes>
    </Router>
  );
}

