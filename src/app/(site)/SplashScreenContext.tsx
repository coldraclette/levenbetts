'use client';

import { createContext, useContext, useState } from 'react';

interface SplashScreenContextType {
  isFirstVisit: boolean;
  setFirstVisit: React.Dispatch<React.SetStateAction<boolean>>;
}

const SplashScreenContext = createContext<SplashScreenContextType | undefined>(
  undefined
);

export function useSplashScreen() {
  const context = useContext(SplashScreenContext);
  if (!context) {
    throw new Error(
      'useSplashScreen must be used within a SplashScreenProvider'
    );
  }
  return context;
}

export function SplashScreenProvider({ children }: any) {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  const value = {
    isFirstVisit,
    setFirstVisit: setIsFirstVisit,
  };

  return (
    <SplashScreenContext.Provider value={value}>
      {children}
    </SplashScreenContext.Provider>
  );
}
