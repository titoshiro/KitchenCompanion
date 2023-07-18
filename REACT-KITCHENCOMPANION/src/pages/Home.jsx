import { useContext } from 'react';
import { AppContext } from '../store/AppContext';
import Navbar from '../component/navbar';
import Carousel from '../component/carousel';
import BotonRefri from '../component/botonRefri';

const Home = () => {
  const { userEmail } = useContext(AppContext);

  return (
    <>
      <Navbar
        empresa="KITCHENCOMPANION"
        home="HOME"
        nosotros="NOSOTROS"
        contacto="CONTACTOS"
        login={userEmail ? '' : 'INICIAR SESIÓN'}
        enmirefri="EN MI REFRI"
        registrarse={userEmail ? '' : 'REGISTRATE'}
        userEmail={userEmail ? userEmail : ''}
      />
      <Carousel
        imagen1="https://res.cloudinary.com/diiuqfujg/image/upload/v1689371155/fotocarrucel.png"
        video1="https://res.cloudinary.com/diiuqfujg/video/upload/v1689371127/videohome2.mp4"
        video2="https://res.cloudinary.com/diiuqfujg/video/upload/v1689371148/videohome.mp4"
      />
      <BotonRefri titulo="EN MI REFRI" href="/enmirefri" />
    </>
  );
};

export default Home;