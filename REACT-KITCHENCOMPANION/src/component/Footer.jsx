import PropTypes from "prop-types";

const Footer = ({ facebook, twitter, google, instagram, linkedin, github }) => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#3e4551" }}
    >
      <div className="container p-4 pb-0">
        <section>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">KITCHENCOMPANION</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis
                obcaecati. Ducimus, quas. Corrupti, pariatur eaque? Reiciendis
                assumenda iusto sapiente inventore animi?
              </p>
            </div>
          </div>
        </section>
        <hr className="mb-4" />
        <section>
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Register for free</span>
            <button type="button" className="btn btn-outline-light btn-rounded">
              Sign up!
            </button>
          </p>
        </section>
        <hr className="mb-4" />
        <section className="mb-4 text-center">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f">{facebook}</i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter">{twitter}</i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-google">{google}</i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram">{instagram}</i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in">{linkedin}</i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-github">{github}</i>
          </a>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 KITCHENCOMPANION
      </div>
    </footer>
  );
};
Footer.propTypes = {
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  twitter: PropTypes.string,
  google: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
};

export { Footer };
