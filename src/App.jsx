import React, { useState, useEffect } from "react";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import Titles from "./pages/Titles";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import RecentWork from "./pages/RecentWork";
import Experience from "./pages/Experience";
import Works from "./pages/Works";
import Artist from "./pages/Artist";
import Preloader from "./components/Preloader"; // Import Preloader
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Add extra delay after resources are loaded
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Adjust delay time (2000ms = 2 seconds)
    };

    // Attach event listener for when the window finishes loading
    window.addEventListener("load", handleLoad);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading
        ? <Preloader /> // Show preloader while loading
        : (
          <div className={`${mode ? "bg-secondary text-primary" : "bg-primary text-secondary"} overflow-hidden`} >
            <Cursor />
            <Home />
            <Titles />
            <About />
            <RecentWork />
            <Expertise />
            <Experience />
            <Artist />
            <Contact />
            <Footer />
          </div>
       )}
    </>
  );
}

export default App;
