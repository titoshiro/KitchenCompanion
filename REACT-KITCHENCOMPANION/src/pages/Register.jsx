import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar";
import "../style/register.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email }),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/login");
        } else {
          console.error("Error:", response.status);
          console.log(JSON.stringify({ name, password, email }));
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
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
      <div className="container-fluid register-container">
        <div className="row">
          <div className="col-12">
        <img
          src="https://res.cloudinary.com/diiuqfujg/image/upload/v1689538059/registrate_mrrb55.jpg"
          alt=""
          className="register-image"
        />
        <div className="form-content-register">
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
                placeholder="Name"
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
              <div id="emailHelp" className="form-text"></div>
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
                placeholder=""
              />
            </div>
            <button type="submit" className="btn btn-warning m-3">
              Register
            </button>
          </form>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Register;