import PropTypes from 'prop-types';

const Navbar = ({ empresa, home, nosotros, contacto, login, enmirefri }) => {
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
                <a className="nav-link text-black" href="/Enmirefri">
                  {enmirefri}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/login">
                  {login}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid mt-5"> {/* Agrega un margen superior de 5 (puedes ajustar este valor según sea necesario) */}
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
  login: PropTypes.object,
  enmirefri: PropTypes.string,
};

export { Navbar };
