import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');

  return (
    <AppContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </AppContext.Provider>
  );
};