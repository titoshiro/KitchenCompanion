import PropTypes from 'prop-types';
import "../style/card.css"
import "../style/Cardreceta.css"

const Cardreceta = ({ foto, titulo, paso1}) => {
  return (
    <>
      <div className="receta container card mb-3" >
        <div className="row g-0">
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <img src={foto} className="shrink img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h2 className="card-title">{titulo}</h2>
              <p className="pasos card-text">
                <pre className='pasos col-12'>{paso1}</pre>
              </p>
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
};

export default Cardreceta;
