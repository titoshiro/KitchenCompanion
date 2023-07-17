import  Navbar  from "../component/navbar"
import { FaInstagram, FaFacebook,FaGoogle,FaTwitter,FaLinkedin,FaGithub } from 'react-icons/fa';
import Footer  from "../component/footer";
import FormControls from "../component/formControls"




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