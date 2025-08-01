import React, { useContext, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";

import { LoadingContext, LoadingProvider } from "./contexts/LoadingContext";
import { DarkModeProvider, useDarkMode } from "./contexts/DarkModeContext";

import Home from "./pages/Home";
import Titles from "./pages/Titles";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import RecentWork from "./pages/RecentWork";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Works from "./pages/Works";
import Arts from "./components/arts";
import Services from "./pages/Services";
import AllWorks from "./pages/AllWorks";

import useLenisAnchorScroll from "./hook/useLenisAnchorScroll"; // custom hook

function AppContent() {
  const { isLoading } = useContext(LoadingContext);
  const { dark } = useDarkMode();
  const lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.current?.destroy();
    };
  }, []);

  // Enable anchor link smooth scrolling
  useLenisAnchorScroll(lenis);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  return (
    <div className={`app-root ${dark ? "bg-secondary text-primary" : "bg-primary text-secondary"}`}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Cursor />
                  <Home />
                  <Titles />
                  <About />
                  <Expertise />
                  <Services />
                  <RecentWork />
                  <Experience />
                  <Arts />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/works" element={<Works />} />
            <Route path="/allworks" element={<AllWorks />} />
          </Routes>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <LoadingProvider>
      <DarkModeProvider>
        <Router>
          <div className="inset-0">
            <AppContent />
          </div>
        </Router>
      </DarkModeProvider>
    </LoadingProvider>
  );
}

export default App;