import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../style/login.css";
import { Link } from "react-router-dom";
import { AppContext } from '../store/AppContext';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userEmail, setUserEmail } = useContext(AppContext); // Obtén el estado userEmail y la función setUserEmail desde el contexto

  const handleLogin = (e) => {
    e.preventDefault();
  
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          setUserEmail(email); 
          localStorage.setItem('userEmail', email); 
          navigate('/'); 
        } else {
          LoginError(response.status);
          console.error('Error:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const LoginError = (code) => {
    switch (code) {
      case 401:
        toast.warning('Credenciales inválidas');
        break;
      
      default:
        toast.error('Error al iniciar sesión');
        break;
    }
  };

  return (
    <>
      <div className="container">
        <Navbar
          empresa="KITCHENCOMPANION"
          home="HOME"
          nosotros="NOSOTROS"
          contacto="CONTACTOS"
          login={userEmail ? '' : "INICIAR SESIÓN"} 
          enmirefri="EN MI REFRI"
          registrarse={userEmail ? '' : "REGISTRATE"} 
          userEmail={userEmail ? userEmail : ''} 
        />
        <div className="container-fluid login-container">
          <div className="row">
            <div className="col-12">
              <img src="https://res.cloudinary.com/diiuqfujg/image/upload/v1689538059/iniciarsession.png_vil7qh.jpg" alt="" />
              <div className="login-form-content">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button type="submit" className="btn btn-warning m-3">Entrar</button>
                  <section>
                    <span className="m-4">Si aún no estás registrado haz clic</span>
                    <button type="button" className="btn btn-outline-primary btn-rounded m-3">
                      <Link to="/register" className="btn btn-outline-black">
                        Registrarse
                      </Link>
                    </button>
                  </section>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;