import PropTypes from "prop-types";

const Cards = ({ imagen, titulo, texto, boton }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imagen} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-center">{titulo}</h5>
        <p className="card-text text-center">{texto}</p>
        {boton !== undefined && (
          <a href="#" className="btn btn-warning d-grid gap-2 col-6 mx-auto">
            {boton}
          </a>
        )}
      </div>
    </div>
  );
};

Cards.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  boton: PropTypes.string,
};

export { Cards };
