
import { Navbar } from "../component/navbar";
import Carousel from "../component/Carousel"
import BotonRefri from "../component/botonRefri"
import foto from "../imagenes/fotocarrucel.png"
import video1 from "../imagenes/video1.1.mp4"
import video2 from "../imagenes/video2.1.mp4"


const Home = () => {



  return (

    <>
      <Navbar 
      empresa="KITCHENCOMPANION" 
      home="HOME" 
      nosotros="NOSOTROS" contacto="CONTACTOS" 
      login="INICIAR SESIÓN"
      enmirefri="EN MI REFRI" 
      registrarse="REGISTRATE"/>
      <Carousel
      imagen1={foto}
      video1={video1}
      video2={video2}/>
      <BotonRefri/>
    </>
  );
};

export default Home;
