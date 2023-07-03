import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({
  empresa,
  home,
  nosotros,
  contacto,
  login,
  enmirefri,
  registrarse,
}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container-fluid ">
          <a className="navbar-brand text-black" href="/">
            {empresa}
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-black justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-black"
                  aria-current="page"
                  href="/"
                >
                  {home}
                </a>
              </li>
              <li className="nav-item">
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
                <button type="button" className="btn btn-primary">
                  <Link to="/login" className="text-black">
                    {login}
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-warning">
                  <Link to="/register" className="text-black">
                    {registrarse}
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid mt-5">
        {/* Agrega un margen superior de 5 (puedes ajustar este valor según sea necesario) */}
        {/* Aquí va el contenido principal de tu página */}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  empresa: PropTypes.string,
  home: PropTypes.string,
  nosotros: PropTypes.string,
  contacto: PropTypes.string,
  login: PropTypes.string,
  enmirefri: PropTypes.string,
  registrarse: PropTypes.string,
};

export { Navbar };
