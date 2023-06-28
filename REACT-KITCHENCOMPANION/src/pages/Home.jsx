import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from "../component/navbar";
import { CardsPrincipal } from '../component/cardsprincipal';
import fotoComida from "../imagenes/fotoComida.jpg"

const Home = () => {
  return (
    <>
      <Navbar empresa="KITCHENCOMPANION" 
      home="HOME" 
      nosotros="NOSOTROS" contacto="CONTACTOS" 
      login={<FontAwesomeIcon icon={faUser} />}
      enmirefri="EN MI REFRI" />
      <CardsPrincipal
      imagen={fotoComida}
      titulo="Tu mejor amigo en la cocina"
      texto="¡No te compliques!"
      subtexto="KitchenCompanion te suluciona la pega"
      boton='organizame ahora'
      />
      
    </>
  );
};

export default Home;
