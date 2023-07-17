import "../style/botonRefri.css"
import PropTypes from "prop-types";


const BotonRefri = ({href,titulo,onclick}) => {
  return (
    <div className="container-boton">
    <a onClick={onclick} href={href}className="btnrefri ov-btn-slide-left" style={{ cursor: "pointer" }}>{titulo} </a>
    
    </div>
  )
}

BotonRefri.propTypes = {
  href: PropTypes.any,
  titulo: PropTypes.any,
  onclick: PropTypes.any,
}
export default BotonRefri