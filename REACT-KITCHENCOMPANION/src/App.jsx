import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/users';
import PrivateRoute from './utils/PrivateRoute';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import Contactos from './pages/Contactos';
import Enmirefri from './pages/Enmirefri';
import { AppProvider } from './store/AppContext';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider> {/* Agregar el AppProvider */}
        <Routes>
          <Route path="dashboard" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="Nosotros" element={<Nosotros />} />
            <Route path="Contactos" element={<Contactos />} />
            <Route path="Enmirefri" element={<Enmirefri />} />
            <Route index element={<Home />} />
          </Route>
          <Route path="/Contactos" element={<PrivateRoute><Contactos /></PrivateRoute>} />
        </Routes>
      </AppProvider>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
