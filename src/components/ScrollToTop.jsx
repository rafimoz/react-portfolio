// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to the top-left corner of the window
    window.scrollTo(0, 0);
  }, [pathname]); // Re-run effect whenever the URL pathname changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;