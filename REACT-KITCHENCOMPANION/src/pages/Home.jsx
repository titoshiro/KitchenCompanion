
import { Navbar } from "../component/navbar";
import { CardsPrincipal } from '../component/cardsprincipal';
// import fotoComida from "../imagenes/fotoComida.jpg"
import { useState, useEffect } from "react";

const Home = () => {

  const [imagenhome, setImagenhome] = useState("");

 
  useEffect(() => {
    fetchHomedata();
  },[]);

  const fetchHomedata = () => {
    fetch(`http://127.0.0.1:5000/api/home`)
      .then((response) => response.json())
      .then((data) => {
       console.log (setImagenhome(data));
      
      })
      .catch(console.error);
  };




  return (

    <>
      <Navbar 
      empresa="KITCHENCOMPANION" 
      home="HOME" 
      nosotros="NOSOTROS" contacto="CONTACTOS" 
      login="INICIAR SESIÓN"
      enmirefri="EN MI REFRI" 
      registrarse="REGISTRATE"/>
      <CardsPrincipal
      imagen={imagenhome}
      titulo="Tu mejor amigo en la cocina"
      texto="¡No te compliques!"
      subtexto="KitchenCompanion te suluciona la pega"
      boton='Organizame ahora'
      />
      
    </>
  );
};

export default Home;
