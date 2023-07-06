import PropTypes from 'prop-types';
import "../style/card.css"

const Cardreceta = ({ foto, titulo, paso1, texto1, paso2, texto2, paso3, texto3, paso4, texto4 }) => {
  return (
    <>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img src={foto} className="shrink img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h5 className="card-title">{titulo}</h5>
              <p className="card-text">
                <small className="text-body-secondary">{paso1}</small>
              </p>
              <p className="card-text">{texto1}</p>
              <p className="card-text">
                <small className="text-body-secondary">{paso2}</small>
              </p>
              <p className="card-text">{texto2}</p>
              <p className="card-text">
                <small className="text-body-secondary">{paso3}</small>
              </p>
              <p className="card-text">{texto3}</p>
              <p className="card-text">
                <small className="text-body-secondary">{paso4}</small>
              </p>
              <p className="card-text">{texto4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Cardreceta.propTypes = {
  foto: PropTypes.string,
  titulo: PropTypes.string,
  paso1: PropTypes.string,
  texto1: PropTypes.string,
  paso2: PropTypes.string,
  texto2: PropTypes.string,
  paso3: PropTypes.string,
  texto3: PropTypes.string,
  paso4: PropTypes.string,
  texto4: PropTypes.string,
};

export default Cardreceta;
