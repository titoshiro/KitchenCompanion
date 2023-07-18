import  Navbar  from "../component/navbar"
import { FaInstagram, FaFacebook,FaGoogle,FaTwitter,FaLinkedin,FaGithub } from 'react-icons/fa';
import Footer  from "../component/footer";
import FormControls from "../component/formControls"
import { useContext } from 'react';
import { AppContext } from '../store/AppContext';



const Contactos = () => {
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