import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import { LoadingContext, LoadingProvider } from "./contexts/LoadingContext";
import Home from "./pages/Home";
import Titles from "./pages/Titles";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import RecentWork from "./pages/RecentWork";
import Experience from "./pages/Experience";
import Artist from "./pages/Artist";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Works from "./pages/Works";
// import Arts from "./components/arts";

function AppContent() {
  const { isLoading } = useContext(LoadingContext);

  useEffect(() => {
    // Initially disable scrolling
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling after preloader
    }
  }, [isLoading]);

  return (
    <div className="app-root bg-secondary text-primary">
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <Arts /> */}
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
      )}
    </div>
  );
}

function App() {
  return (
    <LoadingProvider>
      <Router>
        <div className="inset-0">
          <Cursor />
          <AppContent />
        </div>
      </Router>
    </LoadingProvider>
  );
}

export default App;