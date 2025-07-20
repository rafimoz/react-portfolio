import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop"; // Import the new component

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

function AppContent() {
  const { isLoading } = useContext(LoadingContext);
  const { dark } = useDarkMode();

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  return (
    <div className={`app-root ${dark ? "bg-secondary text-primary" : "bg-primary text-secondary"}`}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ScrollToTop />
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