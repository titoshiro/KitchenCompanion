import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Aquí puedes definir el estado y las funciones que deseas compartir en el contexto
  const [userEmail, setUserEmail] = useState('');

  return (
    <AppContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </AppContext.Provider>
  );
};