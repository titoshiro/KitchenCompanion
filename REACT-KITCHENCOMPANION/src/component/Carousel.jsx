const Carousel = () => {
    return (
      <div className="container">
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://picsum.photos/640/310" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/640/309" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/640/302" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    );
  };
  
  export { Carousel };
  