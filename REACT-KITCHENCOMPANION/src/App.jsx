import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './store/AppContext';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/users';
import PrivateRoute from './utils/PrivateRoute';
import Login from './pages/Login';
import Contactos from './pages/Contactos';
import Enmirefri from './pages/Enmirefri';
import Register from './pages/Register';
import BannerImage from "./recursos/homebackground.png" 

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="dashboard" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
          </Route>
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
  );
};

export default App;
