import PropTypes from 'prop-types';

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
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.string,
  onChange: PropTypes.string,
  name2: PropTypes.string,
  checked2: PropTypes.string,
  onChange2: PropTypes.string,
  name3: PropTypes.string,
  checked3: PropTypes.string,
  onChange3: PropTypes.string,
  name4: PropTypes.string,
  checked4: PropTypes.string,
  onChange4: PropTypes.string,
  ingrediente: PropTypes.string,
  ingrediente2: PropTypes.string,
  ingrediente3: PropTypes.string,
  ingrediente4: PropTypes.string,

};

export default Cardformulario;
