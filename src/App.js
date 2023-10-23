import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Info from "./components/Info";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <Router>
      <div>
        <GlobalStyles />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
