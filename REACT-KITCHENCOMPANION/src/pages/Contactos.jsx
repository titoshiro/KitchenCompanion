import  Navbar  from "../component/navbar"
import { FaInstagram, FaFacebook,FaGoogle,FaTwitter,FaLinkedin,FaGithub } from 'react-icons/fa';
import Footer  from "../component/Footer";
import FormControls from "../component/FormControls"
import Jumbotron from "../component/Jumbotron"


const Contactos = () => {
    return (
      <>
        <Navbar
        empresa="KITCHENCOMPANION"
        home="HOME"
        nosotros="NOSOTROS"
        contacto="CONTACTOS"
        login="INICIAR SESIÓN"
        enmirefri="EN MI REFRI"
        registrarse="REGISTRATE"
      />
       <Jumbotron
       titulo="¿Tienes una duda, pregunta o solo quieres decirnos algo?"
       texto="Dejanos tu mensaje"
       subtexto=""/>

      <FormControls/>
       
      <Footer
      facebook={<FaFacebook/>}
      twitter={<FaTwitter/>} 
      google={<FaGoogle/>} 
      instagram={<FaInstagram/>}
      linkedin={<FaLinkedin/>} 
      github={<FaGithub/>}
      />
      
      
      
      </>
      
    )
  }
  
  export default Contactos