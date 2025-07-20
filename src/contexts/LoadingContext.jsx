import React, { createContext, useState, useEffect } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // All assets are loaded
    };

    // If already loaded (in some cases like fast refresh)
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Clean up
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
