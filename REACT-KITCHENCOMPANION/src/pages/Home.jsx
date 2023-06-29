import { FaUser } from 'react-icons/fa';
import { Navbar } from "../component/navbar";
import { CardsPrincipal } from '../component/cardsprincipal';
import fotoComida from "../imagenes/fotoComida.jpg"


const Home = () => {
  return (
    <>
      <Navbar 
      empresa="KITCHENCOMPANION" 
      home="HOME" 
      nosotros="NOSOTROS" contacto="CONTACTOS" 
      login={<FaUser/>}
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
