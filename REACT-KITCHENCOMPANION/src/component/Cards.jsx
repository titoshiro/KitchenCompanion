import PropTypes from "prop-types";

const Cards = ({ imagen, titulo, texto, boton, onClick, direccion }) => {
  return (
    <div className="card-deck">
      <img className="card-img-top" src={imagen} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-center m-2">{titulo}</h5>
        <p className="card-text text-center">{texto}</p>
        {boton !== undefined && (
          <a href={direccion} onClick={onClick} className="btn btn-warning d-grid gap-2 col-6 mx-auto m-2">
            {boton}
          </a>
        )}
      </div>
    </div>
  );
};

Cards.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  texto: PropTypes.string,
  boton: PropTypes.string,
  onClick: PropTypes.func,
  direccion: PropTypes.string,
};

export default Cards ;
