// src/App.js
import React from "react";
import GlobalStyles from "./GlobalStyles";
import Logo from "./components/Logo";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Logo />
      <NavBar />
      {/* Other components or routes go here */}
    </div>
  );
}

export default App;
