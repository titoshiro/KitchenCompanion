import "../style/botonRefri.css"
import PropTypes from "prop-types";


const BotonRefri = ({href,titulo,onclick}) => {
  return (
    <div className="container-boton">
    <a onClick={onclick} href={href}className="ov-btn-slide-left">{titulo}</a>
    
    </div>
  )
}

BotonRefri.propTypes = {
  href: PropTypes.string,
  titulo: PropTypes.string,
  onclick: PropTypes.string,
}
export default BotonRefri