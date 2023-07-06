import PropTypes from "prop-types";

const Carousel = ({ imagen1, video1, video2 }) => {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagen1} className="d-block w-100" style={{ maxHeight: "550px", objectFit: "cover" }} alt="..." />
          </div>
          <div className="carousel-item">
            <video src={video1}className="d-block w-100" style={{ maxHeight: "550px", objectFit: "cover" }} autoPlay loop muted alt="..."></video>
          </div>
          <div className="carousel-item">
          <video src={video2}className="d-block w-100" style={{ maxHeight: "550px", objectFit: "cover" }} autoPlay loop muted alt="..."></video>
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

Carousel.propTypes = {
  imagen1: PropTypes.string,
  video1: PropTypes.string,
  video2: PropTypes.string,
};

export default Carousel;
