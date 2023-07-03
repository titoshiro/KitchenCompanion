import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../component/navbar';

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de inicio de sesión
    // Por ejemplo, realizar una solicitud HTTP para autenticar al usuario

    // Después de un inicio de sesión exitoso, redirigir al usuario a la página principal
    navigate('/');
  };

  return (
    <>
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
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input value={name} onChange={(e) => setName(e.target.value)} type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Entrar</button>
</form>
      
    </>
  );
};

export default Login;

