import PropTypes from "prop-types";

const Carouselrefri = ({ imagen1, imagen2, imagen3 }) => {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagen1} className="d-block w-100" style={{ maxHeight: "550px", objectFit: "cover" }} alt="..." />
          </div>
          <div className="carousel-item">
          <img src={imagen2} className="d-block w-100" style={{ maxHeight: "550px", objectFit: "cover" }} alt="..." />
          </div>
          <div className="carousel-item">
          <img src={imagen3} className="d-block w-100" style={{ maxHeight: "550px", objectFit: "cover" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

Carouselrefri.propTypes = {
  imagen1: PropTypes.string,
  imagen2: PropTypes.string,
  imagen3: PropTypes.string,
};

export default Carouselrefri;
