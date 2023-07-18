import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../store/AppContext";
import "../style/navbar.css"

const Navbar = ({
  home,
  nosotros,
  contacto,
  login,
  enmirefri,
  registrarse,
  userEmail,
}) => {
  const { setUserEmail } = useContext(AppContext);

  const handleLogout = () => {
    setUserEmail("");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a href="/">
            <img
              className="imagen"
              src="https://res.cloudinary.com/diiuqfujg/image/upload/v1689371094/logoblanco1_lj7mp2.png"
              alt="imagen"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Enmirefri">
                  {enmirefri}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Nosotros">
                  {nosotros}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contactos">
                  {contacto}
                </Link>
              </li>
              
              {userEmail ? (
                <>
                  <li className="nav-item">
                    <span className="nombrelogi nav-link">{userEmail}</span>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-black"
                      onClick={handleLogout}
                      to="/"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      {login}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      {registrarse}
                    </Link>
                  </li>
                </>
              )}
            </ul>
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
  userEmail: PropTypes.string,
};

export default Navbar;
