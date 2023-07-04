import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CardsPrincipal = ({imagen,titulo,texto,subtexto,boton}) => {
  return (
    <div className="card text-dark bg-light ">
      <img src={imagen} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title text-white fs-1 ">{titulo}</h5>
        <p className="card-text text-white fs-2">{texto}</p>
        <p className="card-text text-white fs-3"><small>{subtexto}</small></p>
        <button type="button" className="btn btn-warning">
                  <Link to="/enmirefri" className="text-black">
                    {boton}
                  </Link>
                </button>
      </div>
    </div>
  );
}

CardsPrincipal.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  texto: PropTypes.string,
  subtexto: PropTypes.string,
  boton: PropTypes.string,
};



export {CardsPrincipal};
