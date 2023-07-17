
import Navbar  from "../component/navbar";
import Carousel from "../component/Carousel"
import BotonRefri from "../component/botonRefri"

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
      imagen1="https://res.cloudinary.com/diiuqfujg/image/upload/v1689371155/fotocarrucel.png"
      video1="https://res.cloudinary.com/diiuqfujg/video/upload/v1689371127/videohome2.mp4"
      video2="https://res.cloudinary.com/diiuqfujg/video/upload/v1689371148/videohome.mp4"/>
      <BotonRefri
      titulo="EN MI REFRI"
      href="/enmirefri"/>
    </>
  );
};

export default Home;
