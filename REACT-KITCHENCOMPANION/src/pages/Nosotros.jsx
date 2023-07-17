
import Navbar  from "../component/navbar";
import Cards  from  "../component/Cards";
import BotonRefri from "../component/botonRefri";
import Carouselrefri from "../component/carouselrefri"
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
      <div className="container-fluid">
        <Carouselrefri
         imagen1="https://res.cloudinary.com/diiuqfujg/image/upload/v1689569407/nosotros_fuz9kd.jpg" 
         
        />
      </div>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <Cards imagen="https://res.cloudinary.com/diiuqfujg/image/upload/v1689371097/restriccion3.png" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Cards imagen="https://res.cloudinary.com/diiuqfujg/image/upload/v1689371097/restriccion2.png" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Cards imagen="https://res.cloudinary.com/diiuqfujg/image/upload/v1689371098/restriccion_hzhxqy.png" />
           
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center"> {/* Agrega la clase CSS 'd-flex' para habilitar Flexbox y 'justify-content-center' para centrar horizontalmente */}
              <BotonRefri 
              titulo="EN MI REFRI"
              href="/enmirefri"/>
            </div>
    </>
  );
};

export default Nosotros;
