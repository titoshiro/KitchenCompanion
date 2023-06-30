
import { FaUser } from 'react-icons/fa';
import { Navbar } from "../component/navbar";
import Cards  from  "../component/Cards";
import Jumbotron from '../component/Jumbotron';

const Nosotros = () => {
  return (
    <>
      <Navbar
        empresa="KITCHENCOMPANION"
        home="HOME"
        nosotros="NOSOTROS"
        contacto="CONTACTOS"
        login={<FaUser/>}
        enmirefri="EN MI REFRI"
      />
      <Jumbotron
        titulo="¿KITCHENCOMPANION?"
        texto="Diseñada para ayudarte a organizar tus comidas de manera eficiente y creativa.
       Estas aplicacion te permite gestionar tu inventario de alimentos en el refrigerador,
       crear listas de compras,acceder a un recetario variado y cintar con una zona especial
       para manejar restricciones alimentarias."
        subtexto="Con KitchenCompanion, simplificas la planificacion de comidas y descubriras
       nuevas recetas basadas en los ingredientes disponibles en tu hogar"
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <Cards
              imagen="https://picsum.photos/200"
              titulo="¿ No tienes tiempo o estas lleno de stress?"
              texto="Presiona en mi refri"
              boton="Mi Refri"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Cards
              imagen="https://picsum.photos/300"
              titulo="Utiliza los ingredientes de tu refrigerador y evitas desperdicios y gastos extras"
              texto=""
              boton={undefined}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Cards
              imagen="https://picsum.photos/400"
              titulo="¿Restricción alimentaria o alergias?"
              texto="Solo agregala y pan comido"
              boton={undefined}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
