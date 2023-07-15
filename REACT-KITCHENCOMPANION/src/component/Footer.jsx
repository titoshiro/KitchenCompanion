import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../style/footer.css";
import "../style/styles.css"

const Footer = ({
  facebook,
  twitter,
  google,
  instagram,
  linkedin,
  github,
}) => {
  return (
    <footer className="footer text-center">
      <div className="container p-4 pb-0">
        <section>
          <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 mx-auto text-center">
  <h5 className="text-uppercase">KITCHENCOMPANION</h5>
  <p>Todo hecho con amor y amsiedad.</p>
</div>
          </div>
        </section>
        <hr className="mb-4" />
        <section>
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Registrate</span>
            <button type="button" className="btn btn-outline-light btn-rounded">
              <Link to="/register" className="btn btn-outline-black">
                Aqui!
              </Link>
            </button>
          </p>
        </section>
        <hr className="mb-4" />
        <section className="mb-4 text-center">
          <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
            <i className="fab fa-facebook-f">{facebook}</i>
          </a>
          <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
            <i className="fab fa-twitter">{twitter}</i>
          </a>
          <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
            <i className="fab fa-google">{google}</i>
          </a>
          <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
            <i className="fab fa-instagram">{instagram}</i>
          </a>
          <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
            <i className="fab fa-linkedin-in">{linkedin}</i>
          </a>
          <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
            <i className="fab fa-github">{github}</i>
          </a>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2023 KITCHENCOMPANION
      </div>
    </footer>
  );
};

Footer.propTypes = {
  facebook: PropTypes.object,
  instagram: PropTypes.object,
  twitter: PropTypes.object,
  google: PropTypes.object,
  linkedin: PropTypes.object,
  github: PropTypes.object,
};

export default Footer ;
