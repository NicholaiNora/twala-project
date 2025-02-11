// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Benefits from "./components/Benefits";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
// import Dropdown from "./components/Dropdown";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Solutions from "./components/Solutions";
import Stats from "./components/Stats";
import Blogs from "./components/Blogs";
import Video from "./components/Video";
import Testimonials from "./components/Testimonials";

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
        <Benefits />
        <Solutions />
        <Stats />
        <Blogs />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
