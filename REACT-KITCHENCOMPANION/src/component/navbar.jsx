import PropTypes from 'prop-types';



const Navbar = ({ empresa, home, nosotros, contacto, login, enmirefri }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white   ">
        <div className="container ">
          <a className="navbar-brand text-black " href="/">
            {empresa}
          </a>
          <button
            className="navbar-toggler bg-white  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav "
            aria-expanded="false"
            aria-label="Toggle navigation "
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse text-black  justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav  ">
              <li className="nav-item  ">
                <a
                  className="nav-link active text-black  "
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
                <a className="nav-link text-black " href="/Enmirefri">{enmirefri}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black " href="/login">{login}</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};


Navbar.propTypes = {
  empresa: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  nosotros: PropTypes.string.isRequired,
  contacto: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  enmirefri: PropTypes.string.isRequired,
};



  export {Navbar}