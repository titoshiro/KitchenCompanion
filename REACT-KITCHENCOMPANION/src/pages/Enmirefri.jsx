
import { useState } from "react";
import Buscador from "../component/Buscador";
import Jumbotron from "../component/Jumbotron";
import { Navbar } from "../component/navbar";
import Cardformulario from "../component/Cardformulario";
import Cardreceta from "../component/Cardreceta";
import Cards from "../component/Cards";

const Enmirefri = () => {
  const [mostrarRecetadiaria, setMostrarRecetadiaria] = useState(false);
  const [diaSeleccionado, setDiaSeleccionado] = useState("");

  const recetadiaria = () => {
    setMostrarRecetadiaria(!mostrarRecetadiaria);
  };

  const mostrarReceta = (dia) => {
    setDiaSeleccionado(dia);
  };


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
                  Gestión de stocks <br />
                  Categorización de alimentos <br />
                  Búsqueda rápida <br />
                  Sugerencias de recetas <br />
                  Notificaciones de reposición <br />
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
              titulo="Proteínas"
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
              titulo="Aliños y Salsas"
              ingrediente="Ketchup"
              ingrediente2="Mayo"
              ingrediente3="Mostaza"
              ingrediente4="Sal"
              ingrediente5="Azúcar"
            />
          </div>
        </div>
      </div>
      <button
        onClick={recetadiaria}
        type="button"
        className="btn btn-warning d-grid gap-2 col-6 mx-auto m-3"
      >
        Mi Receta
      </button>
      {mostrarRecetadiaria && (
        <>
          <Cardreceta
            foto="https://picsum.photos/409"
            titulo="Receta del día"
            paso1="Paso 1"
            texto1="lorem ipsum dolor sit amet"
            paso2="Paso 2"
            texto2="lorem ipsum dolor sit amet"
            paso3="Paso 3"
            texto3="lorem ipsum dolor sit amet"
            paso4="Paso 4"
            texto4="lorem ipsum dolor sit amet"
          />
          <h1 className="text-center">Tu Semana</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-3 col-md-3 col-lg-1 mx-auto">
                <Cards
                  imagen="https://picsum.photos/409"
                  titulo="Lunes"
                  texto=""
                  boton="Ver"
                  onClick={(e) => {
                    e.preventDefault();
                    mostrarReceta("lunes")
                  }}
                />
              </div>
              <div className="col-3 col-md-3 col-lg-1 mx-auto">
                <Cards
                  imagen="https://picsum.photos/409"
                  titulo="Martes"
                  texto=""
                  boton="Ver"
                  onClick={(e) => {
                    e.preventDefault();
                    mostrarReceta("martes");
                  }}
                />
              </div>
              <div className="col-3 col-md-3 col-lg-1 mx-auto">
                <Cards
                  imagen="https://picsum.photos/409"
                  titulo="Miércoles"
                  texto=""
                  boton="Ver"
                  onClick={(e) => {
                    e.preventDefault();
                    mostrarReceta("miércoles");
                  }}
                />
              </div>
              <div className="col-3 col-md-3 col-lg-1 mx-auto">
                <Cards
                  imagen="https://picsum.photos/409"
                  titulo="Jueves"
                  texto=""
                  boton="Ver"
                  onClick={(e) => {
                    e.preventDefault();
                    mostrarReceta("jueves");
                  }}
                />
              </div>
              <div className="col-3 col-md-3 col-lg-1 mx-auto">
                <Cards
                  imagen="https://picsum.photos/409"
                  titulo="Viernes"
                  texto=""
                  boton="Ver"
                  onClick={(e) => {
                    e.preventDefault();
                    mostrarReceta("viernes");
                  }}
                />
              </div>
              <div className="col-3 col-md-3 col-lg-1 mx-auto">
                <Cards
                  imagen="https://picsum.photos/409"
                  titulo="Sábado"
                  texto=""
                  boton="Ver"
                  onClick={(e) => {
                    e.preventDefault();
                    mostrarReceta("sábado");
                  }}
                />
              </div>
              <div className="col-3 col-md-3 col-lg-1 mx-auto">
                <Cards
                  imagen="https://picsum.photos/409"
                  titulo="Domingo"
                  texto=""
                  boton="Ver"
                  onClick={(e) => {
                    e.preventDefault();
                    mostrarReceta("domingo");
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
     
    {mostrarRecetadiaria && (
  <>
    {diaSeleccionado === "lunes" && (
      <Cardreceta
        foto="https://picsum.photos/409"
        titulo="Receta del Lunes"
        paso1="Paso 1"
        texto1="lorem ipsum dolor sit amet"
        paso2="Paso 2"
        texto2="lorem ipsum dolor sit amet"
        paso3="Paso 3"
        texto3="lorem ipsum dolor sit amet"
        paso4="Paso 4"
        texto4="lorem ipsum dolor sit amet"
      />
    )}
  


          {diaSeleccionado === "martes" && (
            <Cardreceta
              foto="https://picsum.photos/410"
              titulo="Receta del Martes"
              paso1="Paso 1"
              texto1="lorem ipsum dolor sit amet"
              paso2="Paso 2"
              texto2="lorem ipsum dolor sit amet"
              paso3="Paso 3"
              texto3="lorem ipsum dolor sit amet"
              paso4="Paso 4"
              texto4="lorem ipsum dolor sit amet"
            />
          )}
          {diaSeleccionado === "miércoles" && (
            <Cardreceta
              foto="https://picsum.photos/411"
              titulo="Receta del Miércoles"
              paso1="Paso 1"
              texto1="lorem ipsum dolor sit amet"
              paso2="Paso 2"
              texto2="lorem ipsum dolor sit amet"
              paso3="Paso 3"
              texto3="lorem ipsum dolor sit amet"
              paso4="Paso 4"
              texto4="lorem ipsum dolor sit amet"
            />
          )}
          {diaSeleccionado === "jueves" && (
            <Cardreceta
              foto="https://picsum.photos/412"
              titulo="Receta del Jueves"
              paso1="Paso 1"
              texto1="lorem ipsum dolor sit amet"
              paso2="Paso 2"
              texto2="lorem ipsum dolor sit amet"
              paso3="Paso 3"
              texto3="lorem ipsum dolor sit amet"
              paso4="Paso 4"
              texto4="lorem ipsum dolor sit amet"
            />
          )}
          {diaSeleccionado === "viernes" && (
            <Cardreceta
              foto="https://picsum.photos/413"
              titulo="Receta del Viernes"
              paso1="Paso 1"
              texto1="lorem ipsum dolor sit amet"
              paso2="Paso 2"
              texto2="lorem ipsum dolor sit amet"
              paso3="Paso 3"
              texto3="lorem ipsum dolor sit amet"
              paso4="Paso 4"
              texto4="lorem ipsum dolor sit amet"
            />
          )}
          {diaSeleccionado === "sábado" && (
            <Cardreceta
              foto="https://picsum.photos/414"
              titulo="Receta del Sábado"
              paso1="Paso 1"
              texto1="lorem ipsum dolor sit amet"
              paso2="Paso 2"
              texto2="lorem ipsum dolor sit amet"
              paso3="Paso 3"
              texto3="lorem ipsum dolor sit amet"
              paso4="Paso 4"
              texto4="lorem ipsum dolor sit amet"
            />
          )}
          {diaSeleccionado === "domingo" && (
            <Cardreceta
              foto="https://picsum.photos/415"
              titulo="Receta del Domingo"
              paso1="Paso 1"
              texto1="lorem ipsum dolor sit amet"
              paso2="Paso 2"
              texto2="lorem ipsum dolor sit amet"
              paso3="Paso 3"
              texto3="lorem ipsum dolor sit amet"
              paso4="Paso 4"
              texto4="lorem ipsum dolor sit amet"
            />
            
          )}
        </>
      )}
    </>
  );
};

export default Enmirefri;
