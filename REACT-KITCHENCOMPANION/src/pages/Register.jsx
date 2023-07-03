import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // lógica de registro
    //  crear una cuenta de usuario

    // Después de un registro redirigir al usuario a la página de inicio de sesión
    navigate("/login");
  };

  return (
    <div>
      <Navbar
        empresa="KITCHENCOMPANION"
        home="HOME"
        nosotros="NOSOTROS"
        contacto="CONTACTOS"
        login="INICIAR SESIÓN"
        enmirefri="EN MI REFRI"
        registrarse="REGISTRATE"
      />
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
          value={name}
            type="name"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
           blablabla
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
          value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
