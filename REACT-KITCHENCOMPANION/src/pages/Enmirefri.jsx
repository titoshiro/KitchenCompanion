import { useState, useRef } from "react";
import { Navbar } from "../component/navbar";
import Cardformulario from "../component/Cardformulario";
import Cardreceta from "../component/Cardreceta";
import Cards from "../component/Cards";
import foto1 from "../imagenes/foto1.png"
import foto2 from "../imagenes/foto2.png"
import foto3 from "../imagenes/foto3.png"
import Carouselrefri from "../component/carouselrefri";
import granos from "../imagenes/granos.jpg"
import carnes from "../imagenes/carne.jpg"
import Vegetales from "../imagenes/vegetales.jpg"
import lacteos from "../imagenes/lacteos.jpg"
import Receta from "../imagenes/receta.jpg"

const Enmirefri = () => {
  const [mostrarRecetadiaria, setMostrarRecetadiaria] = useState(false);
  const [diaSeleccionado, setDiaSeleccionado] = useState("");
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);
  const recetasDiariasRef = useRef(null);

  const recetadiaria = () => {
    setMostrarRecetadiaria(!mostrarRecetadiaria);
    recetasDiariasRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  };

  const mostrarReceta = (dia) => {
    setDiaSeleccionado(dia);
  };

  const generarReceta = (ingredientes) => {
    // Crea un objeto que contenga las recetas correspondientes a cada ingrediente
    const recetas = {
      Carne: "Receta de Carne",
      Pollo: "Receta de Pollo",
      Pescado: "Receta de Pescado",
      Mariscos: "Receta de Mariscos",
      Tofu: "Receta de Tofu",
      Arroz: "Receta de Arroz",
      Pastas: "Receta de Pastas",
      Lentejas: "Receta de Lentejas",
      Tomate: "Receta de Tomate",
      Choclo: "Receta de Choclo",
      Cebolla: "Receta de Cebolla",
      Papas: "Receta de Papas",
      Zapallo: "Receta de Zapallo",
      Palta: "Receta de Palta",
      zahanoria: "Receta de Zahanoria",
      champiñion: "Receta de Champiñón",
      Queso: "Receta de Queso",
      Huevo: "Receta de Huevo",
      "Harina de maiz": "Receta de Harina de Maíz",
      Leche: "Receta de Leche"
    };

    const recetasSeleccionadas = [];

    // Recorre los ingredientes seleccionados y verifica si hay una receta disponible para cada uno
    ingredientes.forEach(ingrediente => {
      if (recetas[ingrediente]) {
        recetasSeleccionadas.push(recetas[ingrediente]);
      }
    });

    // Si se encontraron recetas, se retorna la lista de recetas seleccionadas
    if (recetasSeleccionadas.length > 0) {
      return recetasSeleccionadas;
    } else {
      return [];
    }
  };

  const agregarIngrediente = (ingrediente) => {
    setIngredientesSeleccionados([...ingredientesSeleccionados, ingrediente]);
  };

  const removerIngrediente = (ingrediente) => {
    const nuevosIngredientes = ingredientesSeleccionados.filter(item => item !== ingrediente);
    setIngredientesSeleccionados(nuevosIngredientes);
  };

  const recetaGenerada = generarReceta(ingredientesSeleccionados);

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
      <h1 className="text-center">ELIGE TUS INGREDIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mx-auto">

            
            <Cardformulario
              imagen={carnes}
              titulo="Proteínas"
              ingrediente="Carne"
              ingrediente2="Pollo"
              ingrediente3="Pescado"
              ingrediente4="Mariscos"
              ingrediente6="Tofu"
              onSeleccionar={agregarIngrediente}
              onDeseleccionar={removerIngrediente}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mx-auto">
            <Cardformulario
              imagen={granos}
              titulo="Granos y legumbres"
              ingrediente="Arroz"
              ingrediente2="Pastas"
              ingrediente3="Lentejas"
              onSeleccionar={agregarIngrediente}
              onDeseleccionar={removerIngrediente}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mx-auto">
            <Cardformulario
              imagen={Vegetales}
              titulo="Vegetales"
              ingrediente="Tomate"
              ingrediente2="Choclo"
              ingrediente3="Cebolla"
              ingrediente4="Papas"
              ingrediente5="Zapallo"
              ingrediente6="Palta"
              ingrediente7="zahanoria"
              ingrediente8="champiñion"
              onSeleccionar={agregarIngrediente}
              onDeseleccionar={removerIngrediente}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mx-auto">
            <Cardformulario
              imagen={lacteos}
              titulo="Lácteos y otros"
              ingrediente2="Queso"
              ingrediente3="Huevo"
              ingrediente4="Harina de maíz"
              ingrediente5="Leche"
              onSeleccionar={agregarIngrediente}
              onDeseleccionar={removerIngrediente}
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
              foto={Receta}
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
                    imagen={Receta}
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
                    imagen={Receta}
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
                    imagen={Receta}
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
                    imagen={Receta}
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
                    imagen={Receta}
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
                    imagen={Receta}
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
                    imagen={Receta}
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
                foto={Receta}
                titulo="Receta del Lunes"
                paso1="Paso 1"
                texto1="lorem ipsum dolor sit ametsq"
                paso2="Paso 2"
                texto2="lorem ipsum dolor sit ametsq"
                paso3="Paso 3"
                texto3="lorem ipsum dolor sit ametsq"
                paso4="Paso 4"
                texto4="lorem ipsum dolor sit ametsq"
              />
            )}

            {diaSeleccionado === "martes" && (
              <Cardreceta
                foto={Receta}
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
                foto={Receta}
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
                foto={Receta}
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
                foto={Receta}
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
                foto={Receta}
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
                foto={Receta}
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
      </div>
      <div>
        {/* Imprime la receta generada */}
        {recetaGenerada && recetaGenerada.length > 0 && (
          <Cardreceta
            foto={Receta}
            titulo="Receta generada"
            pasos={recetaGenerada.map((receta, index) => (
              <div key={index}>
                <h4>Paso {index + 1}</h4>
                <p>{receta}</p>
              </div>
            ))}
          />
        )}
      </div>
    </>
  );
};

export default Enmirefri;
