import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import { LoadingContext, LoadingProvider } from "./contexts/LoadingContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { useDarkMode } from "./contexts/DarkModeContext";

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

function AppContent() {
  const { isLoading } = useContext(LoadingContext);
  const { dark, setDark } = useDarkMode(); // Access dark mode state

  useEffect(() => {
    // Initially disable scrolling
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling after preloader
    }
  }, [isLoading]);

  return (
    <div className={`app-root ${ dark ? "bg-secondary text-primary" : "bg-primary text-secondary"}`}>
      {isLoading ? (
        <Preloader />
      ) : (
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
                <RecentWork />
                <Experience />
                <Arts /> 
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/works" element={<Works />} />
        </Routes>
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