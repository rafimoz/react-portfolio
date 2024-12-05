import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Titles = lazy(() => import("./pages/Titles"));
const About = lazy(() => import("./pages/About"));
const Expertise = lazy(() => import("./pages/Expertise"));
const RecentWork = lazy(() => import("./pages/RecentWork"));
const Experience = lazy(() => import("./pages/Experience"));
const Artist = lazy(() => import("./pages/Artist"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Works = lazy(() => import("./pages/Works"));

function App() {
  const [mode, setMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simulate loading delay
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (isLoading) {
    return <Preloader />; // Show preloader while the app is loading
  }

  return (
    <Router>
      <div
        className={`${
          mode ? "bg-secondary text-primary" : "bg-primary text-secondary"
        } overflow-hidden`}
      >
        <Cursor />
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Titles />
                  <About />
                  <Expertise />
                  <RecentWork />
                  <Experience />
                  <Artist />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/works" element={<Works />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;