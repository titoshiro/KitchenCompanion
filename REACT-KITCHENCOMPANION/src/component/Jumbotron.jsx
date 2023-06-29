import PropTypes from 'prop-types';

const Jumbotron = ({ titulo, texto, subtexto }) => {
  return (
    <div>
      <div className="container jumbotron bg-light text-center">
        <h1 className="display-2">{titulo}</h1>
        <p className="lead">{texto}</p>
        <p>{subtexto}</p>
      </div>
    </div>
  );
};
Jumbotron.propTypes = {
    titulo: PropTypes.string,
    texto: PropTypes.string,
    subtexto: PropTypes.string,
    boton: PropTypes.string,
  
}
export default Jumbotron;
