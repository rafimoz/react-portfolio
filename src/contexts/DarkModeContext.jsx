import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  return (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook for easy access
export const useDarkMode = () => useContext(DarkModeContext);