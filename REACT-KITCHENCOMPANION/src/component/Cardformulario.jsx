import PropTypes from 'prop-types';

const Cardformulario = ({
  imagen,
  titulo,
  ingrediente,
  ingrediente2,
  ingrediente3,
  ingrediente4,
  ingrediente5,
  ingrediente6,
  ingrediente7,
  ingrediente8,
}) => {

  return (
    <>
      <div className="card-deck">
        <img src={imagen} className="card-img-top" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-center">{titulo}</h5>
          {ingrediente !== undefined && (
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {ingrediente}
              </label>
            </div>
          )}
          {ingrediente2 !== undefined && (
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {ingrediente2}
              </label>
            </div>
          )}
          {ingrediente3 !== undefined && (
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {ingrediente3}
              </label>
            </div>
          )}
          {ingrediente4 !== undefined && (
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {ingrediente4}
              </label>
            </div>
          )}
          {ingrediente5 !== undefined && (
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {ingrediente5}
              </label>
            </div>
          )}
          {ingrediente6 !== undefined && (
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {ingrediente6}
              </label>
            </div>
          )}
          {ingrediente7 !== undefined && (
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {ingrediente7}
              </label>
            </div>
          )}
          {ingrediente8 !== undefined && (
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {ingrediente8}
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Cardformulario.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  ingrediente: PropTypes.string,
  ingrediente2: PropTypes.string,
  ingrediente3: PropTypes.string,
  ingrediente4: PropTypes.string,
  ingrediente5: PropTypes.string,
  ingrediente6: PropTypes.string,
  ingrediente7: PropTypes.string,
  ingrediente8: PropTypes.string,
};

export default Cardformulario;
