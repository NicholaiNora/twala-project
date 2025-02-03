// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
// import Dropdown from "./components/Dropdown";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
