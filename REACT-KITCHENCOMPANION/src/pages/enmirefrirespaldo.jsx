



// import { useState } from "react";
// import { Navbar } from "../component/navbar";
// import Cardformulario from "../component/cardformulario";
// import Cardreceta from "../component/cardreceta"
// import foto1 from "../imagenes/foto1.png"
// import foto2 from "../imagenes/foto2.png"
// import foto3 from "../imagenes/foto3.png"
// import Carouselrefri from "../component/carouselrefri";
// import granos from "../imagenes/granos.jpg"
// import carnes from "../imagenes/carne.jpg"
// import Vegetales from "../imagenes/vegetales.jpg"
// import lacteos from "../imagenes/lacteos.jpg"
// import BotonRefri from "../component/botonRefri";

// const Enmirefri = () => {
//   const [ingredientes, setIngredientes] = useState({
//     tomate: false,
//     carne: false,
//     arroz: false,
//     champiñones: false,
//     tofu : false,
//     spaguetti: false,
//     pollo :false,
//     crema:false,
//     queso: false,
//   });
//   const [receta, setReceta] = useState('');
//   const [imagenReceta, setImagenReceta] = useState('');
//   const [pasosReceta, setPasosReceta] = useState('');
//   const [mostrarReceta, setMostrarReceta] = useState(false);

//   const generarReceta = () => {
//     const ingredientesSeleccionados = Object.keys(ingredientes).filter(
//       (ingrediente) => ingredientes[ingrediente]
//     );

//     if (ingredientesSeleccionados.length === 0) {
//       setReceta('Selecciona al menos un ingrediente para ver una receta.');
//       setImagenReceta('');
//       setPasosReceta('Elige los ingredientes que tengas en tu refri');
//       setMostrarReceta(true);
//       return;
//     }

//     const endpoint = 'http://127.0.0.1:5000/api/';
//     const parametros = ingredientesSeleccionados.join(',');

//     fetch(`${endpoint}?ingredientes=${parametros}`)
//       .then((response) => response.json())
//       .then((data) => {
//         const { receta, imagen, pasos } = data;

//         setReceta(receta);
//         setImagenReceta(imagen);
//         setPasosReceta(pasos);
//         setMostrarReceta(true);
//       })
//       .catch((error) => {
//         console.error('Error al obtener la receta:', error);
//         setReceta('Error al obtener la receta. Por favor, inténtalo nuevamente.');
//         setImagenReceta('');
//         setPasosReceta('Agrega un acompañamiento');
//         setMostrarReceta(true);
//       });
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setIngredientes(prevState => ({
//       ...prevState,
//       [name]: checked
//     }));
//   };

//   return (
//     <>
//       <Navbar
//         empresa="KITCHENCOMPANION"
//         home="HOME"
//         nosotros="NOSOTROS"
//         contacto="CONTACTOS"
//         login="INICIAR SESIÓN"
//         enmirefri="EN MI REFRI"
//         registrarse="REGISTRATE"
//       />
//       <Carouselrefri imagen1={foto1} imagen2={foto2} imagen3={foto3}/>
//       <br />
//       <h1 className="text-center">ELIGE TUS INGREDIENTES</h1>
//       <div className="container">
//         <div className="row">
//           <div className="col-12 col-md-6 col-lg-3 mx-auto">
//             <Cardformulario
//               imagen={carnes}
//               titulo="Proteinas"
//               ingrediente="Carne"
//               name="carne"
//               checked={ingredientes.carne}
//               onChange={handleCheckboxChange}
//               ingrediente2="Pollo"
//               name2="pollo"
//               checked2={ingredientes.pollo}
//               onChange2={handleCheckboxChange}
//             />
//           </div>
//           <div className="col-12 col-md-6 col-lg-3 mx-auto">
//             <Cardformulario
//               imagen={granos}
//               titulo="Granos y Pastas"
//               ingrediente="Arroz"
//               name="arroz"
//               checked={ingredientes.arroz}
//               onChange={handleCheckboxChange}
//               ingrediente2="Spaguetti"
//               name2="spaguetti"
//               checked2={ingredientes.spaguetti}
//               onChange2={handleCheckboxChange}
//               ingrediente3="Tofu"
//               name3="tofu"
//               checked3={ingredientes.tofu}
//               onChange3={handleCheckboxChange}
//             />             
//           </div>
//           <div className="col-12 col-md-6 col-lg-3 mx-auto">
//             <Cardformulario
//               imagen={Vegetales}
//               titulo="Vegetales"
//               ingrediente="Tomate"
//               name="tomate"
//               checked={ingredientes.tomate}
//               onChange={handleCheckboxChange}
//               ingrediente4="Champiñion"
//               name4="champiñones"
//               checked4={ingredientes.champiñones}
//               onChange4={handleCheckboxChange}
//             />  
//           </div>
//           <div className="col-12 col-md-6 col-lg-3 mx-auto">
//             <Cardformulario
//               imagen={lacteos}
//               titulo="Lacteos"
//               ingrediente="Queso"
//               name="queso"
//               checked={ingredientes.queso}
//               onChange={handleCheckboxChange}
//               ingrediente2="Crema"
//               name2="crema"
//               checked2={ingredientes.crema}
//               onChange2={handleCheckboxChange}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <BotonRefri
//               titulo="GENERAR RECETA"
//               onclick={generarReceta}
//             />
//           </div>
//         </div>
//       </div>
//       {mostrarReceta && (
//         <Cardreceta
//           foto={imagenReceta}
//           titulo={receta}
//           paso1={pasosReceta}
//         />
//       )}
//       <br />
//     </>
//   );
// }

// export default Enmirefri;
