import { FaUser } from "react-icons/fa";
import Buscador from "../component/Buscador";
import Jumbotron from "../component/Jumbotron";
import { Navbar } from "../component/navbar";
import Cardformulario from "../component/Cardformulario";

const Enmirefri = () => {
  return (
    <>
      <Navbar
        empresa="KITCHENCOMPANION"
        home="HOME"
        nosotros="NOSOTROS"
        contacto="CONTACTOS"
        login={<FaUser />}
        enmirefri="EN MI REFRI"
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h1>En mi Refri</h1>
          </div>
          <div className="col-12 col-md-8">
            <Jumbotron
              titulo=""
              texto={
                <>
                  Inventario de alimentos <br />
                  Alertas de vencimientos <br />
                  Gestion de stocks <br />
                  Categorizacion de alimentos <br />
                  Busqueda Rapida <br />
                  Sugerencias de recetas <br />
                  Notificaciones de reposicion <br />
                  Compartir y colaborar <br />
                </>
              }
              subtexto=""
            />
          </div>
        </div>
      </div>
      <Buscador />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <Cardformulario
              imagen="https://picsum.photos/400"
              titulo="Proteinas"
              ingrediente="Carne"
              ingrediente2="Pescado"
              ingrediente3="Mariscos"
              ingrediente4="Legumbre"
              ingrediente5="Soya"
              ingrediente6=" Otro"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Cardformulario
              imagen="https://picsum.photos/401"
              titulo="Granos"
              ingrediente="Arroz"
              ingrediente2="Quinoa"
              ingrediente3="Pastas"
              ingrediente4={undefined}
              ingrediente5={undefined}
              ingrediente6={undefined}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Cardformulario
              imagen="https://picsum.photos/402"
              titulo="Vegetales y Frutas"
              ingrediente="Tomate"
              ingrediente2="Lechuga"
              ingrediente3="Limón"
              ingrediente4="Papas"
              ingrediente5="Acelga"
              ingrediente6={undefined}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Cardformulario
              imagen="https://picsum.photos/403"
              titulo="Aliños y Salsa"
              ingrediente="Ketchup"
              ingrediente2="Mayo"
              ingrediente3="Mostaza"
              ingrediente4="Sal"
              ingrediente5="Azucar"
              ingrediente6={undefined}
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-warning d-grid gap-2 col-6 mx-auto m-3"
      >
        Crea mi lista
      </button>
    </>
  );
};

export default Enmirefri;
