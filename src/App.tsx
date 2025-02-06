// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
// import Dropdown from "./components/Dropdown";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Featured />
      </main>
    </>
  );
}

export default App;
