import { createContext, useState } from 'react';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const login = (e, navigate) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    // por ejemplo, realizar una solicitud HTTP para verificar las credenciales
    // y navegar a la página correspondiente según el resultado
    navigate('/dashboard'); // Ejemplo de navegación después de iniciar sesión
  };

  const contextValue = {
    store: {
      username,
      password,
    },
    actions: {
      handleChange,
      login,
    },
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
