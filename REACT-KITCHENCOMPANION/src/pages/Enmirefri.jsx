import { useState} from "react";
import { Navbar } from "../component/navbar";
import Cardformulario from "../component/Cardformulario";
import Cardreceta from "../component/cardreceta"
import foto1 from "../imagenes/foto1.png"
import foto2 from "../imagenes/foto2.png"
import foto3 from "../imagenes/foto3.png"
import Carouselrefri from "../component/carouselrefri";
import granos from "../imagenes/granos.jpg"
import carnes from "../imagenes/carne.jpg"
import Vegetales from "../imagenes/vegetales.jpg"
import lacteos from "../imagenes/lacteos.jpg"
import BotonRefri from "../component/botonRefri";
import platocarne from "../imagenes/platocarne.jpg"
import platovegano from "../imagenes/platovegano.jpg"
import falla from "../imagenes/falla.jpg"

function Enmirefri() {
    const [ingredientes, setIngredientes] = useState({
      tomate: false,
      carne: false,
      arroz: false,
      champiñones: false,
      tofu: false,
      spaguetti: false,
      pollo: false,
      crema: false,
      queso: false,
    });
    const [receta, setReceta] = useState('');
    const [imagenReceta, setImagenReceta] = useState('');
    const [pasosReceta, setPasosReceta] = useState('');
    const [mostrarReceta, setMostrarReceta] = useState(false);
  
    const generarReceta = () => {
      let nuevaReceta = '';
      let nuevaImagen = '';
      let nuevosPasos = '';
    
      switch (true) {
        case ingredientes.carne && ingredientes.tomate && !ingredientes.arroz && ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && ingredientes.queso:
          nuevaReceta = 'Prepara una deliciosa combinación de carne con tomate, champiñones y queso.';
          nuevaImagen = platocarne;
          nuevosPasos = '1. En una sartén grande, cocina la carne hasta que esté dorada. Resérvala.\n' +
                        '2. En la misma sartén, agrega los champiñones cortados en láminas y cocina hasta que estén tiernos.\n' +
                        '3. Añade los tomates cortados en trozos y cocina hasta que estén suaves.\n' +
                        '4. Vuelve a colocar la carne en la sartén y mezcla todos los ingredientes.\n' +
                        '5. Espolvorea queso rallado sobre la preparación y cocina a fuego bajo hasta que el queso se derrita.\n' +
                        '6. Sirve caliente y disfruta de este delicioso plato con carne, tomate, champiñones y queso.';
          break;
              
        case !ingredientes.carne && !ingredientes.arroz && ingredientes.tomate && ingredientes.champiñones && ingredientes.tofu && ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
          nuevaReceta = 'Prepara una deliciosa pasta de espagueti con tofu, champiñones y salsa de tomate.';
          nuevaImagen = platovegano;
          nuevosPasos = '1. Cocina el espagueti según las instrucciones del paquete.\n' +
                        '2. Mientras tanto, en una sartén grande, calienta un poco de aceite de oliva.\n' +
                        '3. Añade los champiñones cortados en rodajas a la sartén y cocínalos hasta que estén dorados y tiernos.\n' +
                        '4. Agrega el tofu cortado en cubos a la sartén y cocina por unos minutos más hasta que esté ligeramente dorado.\n' +
                        '5. Añade los tomates picados a la sartén y cocínalos hasta que estén suaves y ligeramente deshechos.\n' +
                        '6. Agrega la salsa de tomate a la sartén y mezcla bien con los ingredientes.\n' +
                        '7. Escurre el espagueti cocido y añádelo a la sartén con la salsa y los ingredientes.\n' +
                        '8. Mezcla todo junto para que el espagueti se impregne de la salsa y los sabores.\n' +
                        '9. Condimenta con sal, pimienta y especias al gusto.\n' +
                        '10. Cocina a fuego medio durante unos minutos para que todos los ingredientes se mezclen y se calienten.\n' +
                        '11. Sirve caliente y disfruta de este delicioso plato de tofu, espagueti, champiñones y tomate.';
          break;
  
        default:
          nuevaReceta = 'Selecciona al menos un ingrediente para ver una receta.';
          nuevaImagen = falla;
          nuevosPasos = "Elige los ingredientes que tengas en tu refri";
          break;
      }
    
      setReceta(nuevaReceta);
      setImagenReceta(nuevaImagen);
      setPasosReceta(nuevosPasos);
      setMostrarReceta(true);
      
    };
  
    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      setIngredientes(prevState => ({
        ...prevState,
        [name]: checked
      }));
    };
  
    const reiniciarTodo = () => {
      setIngredientes({
        tomate: false,
        carne: false,
        arroz: false,
        champiñones: false,
        tofu: false,
        spaguetti: false,
        pollo: false,
        crema: false,
        queso: false,
      });
      setReceta('');
      setImagenReceta('');
      setPasosReceta('');
      setMostrarReceta(false);
    };
  
    return (
      <>
        <Navbar empresa="KITCHENCOMPANION" home="HOME" nosotros="NOSOTROS" contacto="CONTACTOS" login="INICIAR SESIÓN" enmirefri="EN MI REFRI" registrarse="REGISTRATE" />
        <Carouselrefri imagen1={foto1} imagen2={foto2} imagen3={foto3} />
        <br />
        <h1 className="text-center">ELIGE TUS INGREDIENTES</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mx-auto">
              <Cardformulario
                imagen={carnes}
                titulo="Proteinas"
                ingrediente="Carne"
                name="carne"
                checked={ingredientes.carne}
                onChange={handleCheckboxChange}
                ingrediente2="Pollo"
                name2="pollo"
                checked2={ingredientes.pollo}
                onChange2={handleCheckboxChange}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mx-auto">
              <Cardformulario
                imagen={granos}
                titulo="Granos y Pastas"
                ingrediente="Arroz"
                name="arroz"
                checked={ingredientes.arroz}
                onChange={handleCheckboxChange}
                ingrediente2="Spaguetti"
                name2="spaguetti"
                checked2={ingredientes.spaguetti}
                onChange2={handleCheckboxChange}
                ingrediente3="Tofu"
                name3="tofu"
                checked3={ingredientes.tofu}
                onChange3={handleCheckboxChange}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mx-auto">
              <Cardformulario
                imagen={Vegetales}
                titulo="Vegetales"
                ingrediente="Tomate"
                name="tomate"
                checked={ingredientes.tomate}
                onChange={handleCheckboxChange}
                ingrediente4="Champiñion"
                name4="champiñones"
                checked4={ingredientes.champiñones}
                onChange4={handleCheckboxChange}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mx-auto">
              <Cardformulario
                imagen={lacteos}
                titulo="Lacteos"
                ingrediente="Queso"
                name="queso"
                checked={ingredientes.queso}
                onChange={handleCheckboxChange}
                ingrediente2="Crema"
                name2="crema"
                checked2={ingredientes.crema}
                onChange2={handleCheckboxChange}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <BotonRefri
              titulo="GENERAR RECETA"
              onclick={generarReceta}
              />
            </div>
          </div>
        </div>
        {mostrarReceta && (
          <>
            <Cardreceta
              foto={imagenReceta}
              titulo={receta}
              paso1={pasosReceta}
            />
            <BotonRefri
            titulo="REINICIAR"
            onclick={reiniciarTodo}/>
          </>
        )}
      </>
    );
  }
  
  export default Enmirefri;