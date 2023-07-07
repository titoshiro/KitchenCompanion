
import { Navbar } from "../component/navbar";
import Cards  from  "../component/Cards";
import Jumbotron from '../component/Jumbotron';
import restriccion from "../imagenes/restriccion.png"
import restriccion2 from "../imagenes/restriccion2.png"
import restriccion3 from "../imagenes/restriccion3.png"
import BotonRefri from "../component/botonRefri";

const Nosotros = () => {
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
        titulo="¿KITCHENCOMPANION?"
        texto="Diseñada para ayudarte a organizar tus comidas de manera eficiente y creativa. Estas aplicacion te permite gestionar tu inventario de alimentos en el refrigerador, crear listas de compras,acceder a un recetario variado y cintar con una zona especial para manejar restricciones alimentarias."
        subtexto="Con KitchenCompanion, simplificas la planificacion de comidas y descubriras nuevas recetas basadas en los ingredientes disponibles en tu hogar"
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <Cards imagen={restriccion3} />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Cards imagen={restriccion2} />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Cards imagen={restriccion} />
           
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center"> {/* Agrega la clase CSS 'd-flex' para habilitar Flexbox y 'justify-content-center' para centrar horizontalmente */}
              <BotonRefri />
            </div>
    </>
  );
};

export default Nosotros;
