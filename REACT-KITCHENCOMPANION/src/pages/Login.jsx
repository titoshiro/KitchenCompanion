import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Navbar  from '../component/navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext, TokenContext } from '../Context/UserContext';

const Login = () => {
  const navigate = useNavigate();
 // const [token, setToken] = useContext(TokenContext);
 // const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          setUser({name: response.name});
          setToken({token: response.token});
          navigate('/');
        } else {
          LoginError(response.status,response.message);
          toast.warning('Error:'+ response.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const LoginError = (code,message) => {
    switch(code){
      case 401:
        toast.warning("Credenciales invalidas");
        break
    }
  }

  return (
    <>
    <div className="container">
       <Navbar
        empresa="KITCHENCOMPANION"
        home="HOME"
        nosotros="NOSOTROS"
        contacto="CONTACTOS"
        login="INICIAR SESIÓN"
        enmirefri="EN MI REFRI"
        registrarse="REGISTRATE"
      />
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-warning">Entrar</button>
      </form>
      <ToastContainer/>
      </div>
    </>
  );
};

export default Login;
