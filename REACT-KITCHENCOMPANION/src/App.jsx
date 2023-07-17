import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './store/AppContext';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Login from './pages/Login';
import Contactos from './pages/Contactos';
import Enmirefri from './pages/Enmirefri';
import Register from './pages/Register';
import { UserProvider, TokenProvider } from './Context/UserContext';




const App = () => {


  return (
    <TokenProvider>
    <UserProvider>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="contactos" element={<Contactos />} />
            <Route path="enmirefri" element={<Enmirefri />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </AppProvider>
      <ToastContainer />
    </BrowserRouter>
    </UserProvider>
    </TokenProvider>
  );
};

export default App;
