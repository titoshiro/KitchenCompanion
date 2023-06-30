import { FaUser } from "react-icons/fa";
import { useState } from "react";
import Buscador from "../component/Buscador";
import Jumbotron from "../component/Jumbotron";
import { Navbar } from "../component/navbar";
import Cardformulario from "../component/Cardformulario";
import Cardreceta from "../component/Cardreceta";
import Cards from "../component/Cards";

const Enmirefri = () => {
  const [mostrarReceta, setMostrarReceta] = useState(false);

  const receta = () => {
    setMostrarReceta(!mostrarReceta);
  };
  
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
          <div className="col-12 col-md-6 col-lg-3 mx-auto">
            <Cardformulario
              imagen="https://picsum.photos/400"
              titulo="Proteinas"
              ingrediente="Carne"
              ingrediente2="Pescado"
              ingrediente3="Mariscos"
              ingrediente4="Legumbre"
              ingrediente5="Soya"
              ingrediente6="Otro"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mx-auto">
            <Cardformulario
              imagen="https://picsum.photos/401"
              titulo="Granos"
              ingrediente="Arroz"
              ingrediente2="Quinoa"
              ingrediente3="Pastas"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mx-auto">
            <Cardformulario
              imagen="https://picsum.photos/402"
              titulo="Vegetales y Frutas"
              ingrediente="Tomate"
              ingrediente2="Lechuga"
              ingrediente3="Limón"
              ingrediente4="Papas"
              ingrediente5="Acelga"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mx-auto">
            <Cardformulario
              imagen="https://picsum.photos/403"
              titulo="Aliños y Salsa"
              ingrediente="Ketchup"
              ingrediente2="Mayo"
              ingrediente3="Mostaza"
              ingrediente4="Sal"
              ingrediente5="Azucar"
            />
          </div>
        </div>
      </div>
      <button
        onClick={receta}
        type="button"
        className="btn btn-warning d-grid gap-2 col-6 mx-auto m-3"
      >
        Mi Receta
      </button>
      {mostrarReceta && (
        <>
          <Cardreceta
            foto="https://picsum.photos/409"
            titulo="Receta del dia"
            paso1="paso 1 "
            texto1="lorendsfsdfsdfsdfsdfsdfsdfsdfsdsfkjashjks"
            paso2="paso 2"
            texto2="lorendsfsdfsdfsdfsdfsdfsdfsdfsdsfkjashjks"
            paso3="paso 3"
            texto3="lorendsfsdfsdfsdfsdfsdfsdfsdfsdsfkjashjks"
            paso4="paso 4"
            texto4="lorendsfsdfsdfsdfsdfsdfsdfsdfsdsfkjashjks"
          />
            <h1 className="text-center">Tu Semana</h1>
          <div className="container">
  <div className="row">
    <div className="col-12 col-md-6 col-lg-2 mx-auto">
      
      <Cards
        imagen="https://picsum.photos/409"
        titulo="Lunes"
        texto=""
        boton="Ver"
      />
    </div>
    <div className="col-12 col-md-6 col-lg-2 mx-auto">
      <Cards
        imagen="https://picsum.photos/409"
        titulo="Martes"
        texto=""
        boton="Ver"
      />
    
    </div>
    <div className="col-12 col-md-6 col-lg-2 mx-auto">
      <Cards
        imagen="https://picsum.photos/409"
        titulo="Miércoles"
        texto=""
        boton="Ver"
      />
    </div>
    <div className="col-12 col-md-6 col-lg-2 mx-auto">
      <Cards
        imagen="https://picsum.photos/409"
        titulo="Jueves"
        texto=""
        boton="Ver"
      />
    </div>
    <div className="col-12 col-md-6 col-lg-2 mx-auto">
      <Cards
        imagen="https://picsum.photos/409"
        titulo="Viernes"
        texto=""
        boton="Ver"
      />
    </div>
    <div className="col-12 col-md-6 col-lg-2 mx-auto">
      <Cards
        imagen="https://picsum.photos/409"
        titulo="Sábado"
        texto=""
        boton="Ver"
      />
    </div>
    <div className="col-12 col-md-6 col-lg-2 mx-auto">
      <Cards
        imagen="https://picsum.photos/409"
        titulo="Domingo"
        texto=""
        boton="Ver"
      />
    </div>
  </div>
</div>

        </>
      )}
    </>
  );
};

export default Enmirefri;
