// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
// import Dropdown from "./components/Dropdown";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Video from "./components/Video";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Featured />
        <Products />
        <Logos />
        <Video />
      </main>
    </>
  );
}

export default App;
