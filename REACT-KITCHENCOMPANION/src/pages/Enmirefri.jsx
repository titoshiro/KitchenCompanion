import { useState, useRef } from "react";
import { Navbar } from "../component/navbar";
import Cardformulario from "../component/Cardformulario";
import Cardreceta from "../component/Cardreceta";
import Cards from "../component/Cards";
import foto1 from "../imagenes/foto1.png"
import foto2 from "../imagenes/foto2.png"
import foto3 from "../imagenes/foto3.png"
import Carouselrefri from "../component/carouselrefri";


const Enmirefri = () => {
  const [mostrarRecetadiaria, setMostrarRecetadiaria] = useState(false);
  const [diaSeleccionado, setDiaSeleccionado] = useState("");
  const recetasDiariasRef = useRef(null);

  const recetadiaria = () => {
    setMostrarRecetadiaria(!mostrarRecetadiaria);
    recetasDiariasRef.current.scrollIntoView({ behavior: "smooth" });
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
      
      <Carouselrefri imagen1={foto1} imagen2={foto2} imagen3={foto3}/>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mx-auto">
            <Cardformulario
              imagen="https://picsum.photos/400"
              titulo="Proteínas"
              ingrediente="Carne"
              ingrediente2="Pollo"
              ingrediente3="Pescado"
              ingrediente4="Mariscos"
              ingrediente6="Tofu"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mx-auto">
            <Cardformulario
              imagen="https://picsum.photos/401"
              titulo="Granos y legumbres"
              ingrediente="Arroz"
              ingrediente2="Pastas"
              ingrediente3="Lentejas"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mx-auto">
            <Cardformulario
              imagen="https://picsum.photos/402"
              titulo="Vegetales"
              ingrediente="Tomate"
              ingrediente2="Choclo"
              ingrediente3="Cebolla"
              ingrediente4="Papas"
              ingrediente5="Zapallo"
              ingrediente6="Palta"
              ingrediente7="zahanoria"
              ingrediente8="champiñion"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mx-auto">
            <Cardformulario
              imagen="https://picsum.photos/402"
              titulo="Lacteos y otros"
              ingrediente2="Queso"
              ingrediente3="Huevo"
              ingrediente4="Harina de maiz"
              ingrediente5="Leche"
            />
          </div>
        </div>
      </div>
      <button
        onClick={recetadiaria}
        type="button"
        className="btn btn-warning d-grid gap-2 col-6 mx-auto m-3"
      >
        Recetas Diarias
      </button>
      <div ref={recetasDiariasRef}>
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
            <div />
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
                      mostrarReceta("lunes");
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
            

          </>
        )}
      </div>
    </>
  );
};

export default Enmirefri;
