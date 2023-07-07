import PropTypes from "prop-types";
import { useState } from "react";
import "../style/navbar.css";
import logo from "../imagenes/logoblanco1.png"

const Navbar = ({
 
  home,
  nosotros,
  contacto,
  login,
  enmirefri,
  registrarse,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <nav className={`navbar navbar-expand-lg fixed-top ${isMenuOpen ? "active" : ""}`}>
      <div className="container-fluid">
        <img className="imagen" src={logo} alt="" />
        <button
          className={`navbar-toggler  ${isMenuOpen ? "active" : ""}`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className={`collapse navbar-collapse text-black justify-content-end  ${isMenuOpen ? "show" : ""}`}>
          <div className="nav-item-container  "> {/* Agregado: Contenedor del menú desplegable */}
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link active text-black" aria-current="page" href="/">
                  {home}
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-black" href="/Enmirefri">
                  {enmirefri}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/Nosotros">
                  {nosotros}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/Contactos">
                  {contacto}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/login">
                  {login}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/register">
                  {registrarse}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div className="container-fluid mt-5">{/* {espacio extra} */}</div>
  </div>
);
};

Navbar.propTypes = {

home: PropTypes.string,
nosotros: PropTypes.string,
contacto: PropTypes.string,
login: PropTypes.string,
enmirefri: PropTypes.string,
registrarse: PropTypes.string,
};

export { Navbar };