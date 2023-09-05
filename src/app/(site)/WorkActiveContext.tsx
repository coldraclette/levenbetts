'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';

interface WorkActiveContextProps {
  isWorkActive: boolean;
  setIsWorkActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const WorkActiveContext = createContext<WorkActiveContextProps | undefined>(
  undefined
);

export const useWorkActive = () => {
  const context = useContext(WorkActiveContext);
  if (!context) {
    throw new Error('useWorkActive must be used within a WorkActiveProvider');
  }
  return context;
};

interface WorkActiveProviderProps {
  children: ReactNode;
}

export const WorkActiveProvider: React.FC<WorkActiveProviderProps> = ({
  children,
}) => {
  const [isWorkActive, setIsWorkActive] = useState(false);

  return (
    <WorkActiveContext.Provider value={{ isWorkActive, setIsWorkActive }}>
      {children}
    </WorkActiveContext.Provider>
  );
};
