import PropTypes from 'prop-types';
import "../style/cardformulario.css"


const Cardformulario = ({
  imagen,
  titulo,
  name,
  checked,
  onChange,
  name2,
  checked2,
  onChange2,
  name3,
  checked3,
  onChange3,
  name4,
  checked4,
  onChange4,
  ingrediente,
  ingrediente2,
  ingrediente3,
  ingrediente4,
 
}) => {

  return (
    <>
      <div className="card-deck">
        <img src={imagen} className="card-img-top" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-center">{titulo}</h5>
          {ingrediente !== undefined && (
            <div className="form-check">
             <input
          
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {ingrediente}
              </label>
            </div>
          )}
          {ingrediente2 !== undefined && (
            <div className="form-check">
              <input
          type="checkbox"
          name={name2}
          checked={checked2}
          onChange={onChange2}
        />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {ingrediente2}
              </label>
            </div>
          )}
          {ingrediente3 !== undefined && (
            <div className="form-check">
              <input
          type="checkbox"
          name={name3}
          checked={checked3}
          onChange={onChange3}
        />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {ingrediente3}
              </label>
            </div>
          )}
          {ingrediente4 !== undefined && (
            <div className="form-check">
             <input
          type="checkbox"
          name={name4}
          checked={checked4}
          onChange={onChange4}
        />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {ingrediente4}
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Cardformulario.propTypes = {
  imagen: PropTypes.any,
  titulo: PropTypes.any,
  name: PropTypes.any,
  checked: PropTypes.any,
  onChange: PropTypes.any,
  name2: PropTypes.any,
  checked2: PropTypes.any,
  onChange2: PropTypes.any,
  name3: PropTypes.any,
  checked3: PropTypes.any,
  onChange3: PropTypes.any,
  name4:PropTypes.any,
  checked4:PropTypes.any,
  onChange4:PropTypes.any,
  ingrediente:PropTypes.any,
  ingrediente2:PropTypes.any,
  ingrediente3:PropTypes.any,
  ingrediente4:PropTypes.any,

};

export default Cardformulario;
