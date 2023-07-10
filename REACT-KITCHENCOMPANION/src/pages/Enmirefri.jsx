import { useState} from "react";
import { Navbar } from "../component/navbar";
import Cardformulario from "../component/Cardformulario";
import Cardreceta from "../component/cardreceta";
import foto1 from "../imagenes/foto1.png"
import foto2 from "../imagenes/foto2.png"
import foto3 from "../imagenes/foto3.png"
import Carouselrefri from "../component/carouselrefri";
import granos from "../imagenes/granos.jpg"
import carnes from "../imagenes/carne.jpg"
import Vegetales from "../imagenes/vegetales.jpg"
import lacteos from "../imagenes/lacteos.jpg"
import BotonRefri from "../component/botonRefri";
// import Receta from "../imagenes/receta.jpg"

function Enmirefri() {
  const [ingredientes, setIngredientes] = useState({
    tomate: false,
    carne: false,
    arroz: false,
    champiñones: false,
    tofu : false,
    spaguetti: false,
    pollo :false,
    crema:false,
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
      case ingredientes.tomate && !ingredientes.carne && !ingredientes.arroz && !ingredientes.champiñones && !ingredientes.tofu && !ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
        nuevaReceta = '¡Ensalada caprese! Mezcla tomates, mozzarella y hojas de albahaca, adereza con aceite de oliva y sal al gusto.'
        nuevaImagen = 'ruta-de-la-imagen-de-la-ensalada-caprese.jpg'
        nuevosPasos = '1. Corta los tomates y la mozzarella en rodajas.\n' +
                      '2. Coloca las rodajas de tomate y mozzarella en un plato alternándolas.\n' +
                      '3. Añade hojas de albahaca fresca.\n' +
                      '4. Riega con aceite de oliva y espolvorea sal al gusto.'
        break
      case ingredientes.carne && !ingredientes.tomate && !ingredientes.arroz && ingredientes.champiñones && !ingredientes.tofu && !ingredientes.spaguetti && !ingredientes.pollo && ingredientes.crema && !ingredientes.queso:
          nuevaReceta = 'Prepara un delicioso plato de carne con champiñones y crema.'
          nuevaImagen = 'ruta-de-la-imagen-del-plato-con-carne-champinones-y-crema.jpg'
          nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade la carne cortada en trozos.\n' +
                        '2. Cocina la carne hasta que esté dorada y luego retírala de la sartén.\n' +
                        '3. En la misma sartén, agrega los champiñones picados y cocina hasta que estén tiernos y dorados.\n' +
                        '4. Añade la carne nuevamente a la sartén y agrega crema a la preparación.\n' +
                        '5. Mezcla bien y cocina por unos minutos más hasta que la crema se caliente.\n' +
                        '6. Sirve caliente y disfruta de este delicioso plato.'
          break
      case ingredientes.carne && ingredientes.arroz && ingredientes.tomate && !ingredientes.champiñones && !ingredientes.tofu && !ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
            nuevaReceta = 'Prepara un delicioso plato de carne con arroz y tomate.'
            nuevaImagen = 'ruta-de-la-imagen-del-plato-con-carne-arroz-y-tomate.jpg'
            nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade la carne cortada en trozos.\n' +
                          '2. Cocina la carne hasta que esté dorada y luego retírala de la sartén.\n' +
                          '3. En la misma sartén, agrega los tomates cortados en trozos y cocina hasta que estén suaves.\n' +
                          '4. Añade el arroz y revuélvelo con los tomates durante unos minutos.\n' +
                          '5. Agrega agua caliente o caldo de carne y cocina el arroz siguiendo las instrucciones del paquete.\n' +
                          '6. Una vez que el arroz esté cocido, agrega la carne nuevamente a la sartén.\n' +
                          '7. Mezcla bien y cocina por unos minutos más hasta que esté bien caliente.\n' +
                          '8. Sirve caliente y disfruta de este delicioso plato de carne, arroz y tomate.'
            break
      case ingredientes.carne && !ingredientes.arroz && ingredientes.tomate && ingredientes.spaguetti && !ingredientes.champiñones && !ingredientes.tofu && !ingredientes.pollo && !ingredientes.crema && ingredientes.queso:
            nuevaReceta = 'Prepara un delicioso plato de carne con espaguetis, tomate y queso.'
            nuevaImagen = 'ruta-de-la-imagen-del-plato-con-carne-espaguetis-tomate-y-queso.jpg'
            nuevosPasos = '1. Cocina los espaguetis según las instrucciones del paquete y reserva.\n' +
                          '2. En una sartén grande, calienta un poco de aceite de oliva y añade la carne cortada en trozos.\n' +
                          '3. Cocina la carne hasta que esté dorada y luego retírala de la sartén.\n' +
                          '4. En la misma sartén, agrega los tomates cortados en trozos y cocina hasta que estén suaves.\n' +
                          '5. Agrega los espaguetis cocidos a la sartén con los tomates y mezcla bien.\n' +
                          '6. Espolvorea queso rallado sobre la mezcla y cocina hasta que el queso se derrita.\n' +
                          '7. Sirve caliente y disfruta de este delicioso plato de carne, espaguetis, tomate y queso.'
            break
      case ingredientes.carne && ingredientes.arroz && !ingredientes.tomate && ingredientes.champiñones && !ingredientes.tofu && !ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && ingredientes.queso:
              nuevaReceta = 'Prepara un delicioso plato de carne con arroz, champiñones y queso.'
              nuevaImagen = 'ruta-de-la-imagen-del-plato-con-carne-arroz-champinones-queso.jpg'
              nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade la carne cortada en trozos.\n' +
                            '2. Cocina la carne hasta que esté dorada y luego retírala de la sartén.\n' +
                            '3. En la misma sartén, agrega los champiñones picados y cocina hasta que estén tiernos y dorados.\n' +
                            '4. Añade el arroz y revuélvelo con los champiñones durante unos minutos.\n' +
                            '5. Agrega agua caliente o caldo de carne y cocina el arroz siguiendo las instrucciones del paquete.\n' +
                            '6. Una vez que el arroz esté cocido, agrega la carne nuevamente a la sartén.\n' +
                            '7. Agrega queso rallado sobre la preparación y mezcla bien hasta que el queso se derrita.\n' +
                            '8. Sirve caliente y disfruta de este delicioso plato de carne, arroz, champiñones y queso.'
              break
      case ingredientes.carne && ingredientes.arroz && !ingredientes.tomate && ingredientes.champiñones && !ingredientes.tofu && !ingredientes.spaguetti && !ingredientes.pollo && ingredientes.crema && !ingredientes.queso:
              nuevaReceta = 'Prepara un delicioso plato de carne con arroz, champiñones y crema.'
              nuevaImagen = 'ruta-de-la-imagen-del-plato-con-carne-arroz-champinones-crema.jpg'
              nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade la carne cortada en trozos.\n' +
                            '2. Cocina la carne hasta que esté dorada y luego retírala de la sartén.\n' +
                            '3. En la misma sartén, agrega los champiñones picados y cocina hasta que estén tiernos y dorados.\n' +
                            '4. Añade el arroz y revuélvelo con los champiñones durante unos minutos.\n' +
                            '5. Agrega agua caliente o caldo de carne y cocina el arroz siguiendo las instrucciones del paquete.\n' +
                            '6. Una vez que el arroz esté cocido, agrega la carne nuevamente a la sartén.\n' +
                            '7. Añade crema a la preparación y mezcla bien.\n' +
                            '8. Cocina por unos minutos más hasta que la crema se caliente.\n' +
                            '9. Sirve caliente y disfruta de este delicioso plato de carne, arroz, champiñones y crema.'
              break
      case ingredientes.carne && !ingredientes.arroz && !ingredientes.tomate && ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && !ingredientes.pollo && ingredientes.crema && !ingredientes.queso:
            nuevaReceta = 'Prepara un delicioso plato de carne con spaghetti, champiñones y crema.'
            nuevaImagen = 'ruta-de-la-imagen-del-plato-con-carne-spaghetti-champinones-crema.jpg'
            nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade la carne cortada en trozos.\n' +
                          '2. Cocina la carne hasta que esté dorada y luego retírala de la sartén.\n' +
                          '3. En la misma sartén, agrega los champiñones picados y cocina hasta que estén tiernos y dorados.\n' +
                          '4. Cocina los spaghetti en agua con sal siguiendo las instrucciones del paquete.\n' +
                          '5. Una vez cocidos los spaghetti, escúrrelos y añádelos a la sartén con los champiñones.\n' +
                          '6. Agrega la carne nuevamente a la sartén y añade la crema.\n' +
                          '7. Mezcla bien todos los ingredientes y cocina por unos minutos hasta que la crema se caliente.\n' +
                          '8. Sirve caliente y disfruta de este delicioso plato de carne, spaghetti, champiñones y crema.'
            break
      case ingredientes.carne && !ingredientes.arroz && ingredientes.tomate && !ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
              nuevaReceta = 'Prepara un delicioso plato de carne con spaghetti y tomate.'
              nuevaImagen = 'ruta-de-la-imagen-del-plato-con-carne-spaghetti-tomate.jpg'
              nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade la carne cortada en trozos.\n' +
                            '2. Cocina la carne hasta que esté dorada y luego retírala de la sartén.\n' +
                            '3. En la misma sartén, agrega los tomates cortados en trozos y cocina hasta que estén tiernos y suelten sus jugos.\n' +
                            '4. Cocina los spaghetti en agua con sal siguiendo las instrucciones del paquete.\n' +
                            '5. Una vez cocidos los spaghetti, escúrrelos y añádelos a la sartén con los tomates.\n' +
                            '6. Agrega la carne nuevamente a la sartén y mezcla bien todos los ingredientes.\n' +
                            '7. Cocina por unos minutos adicionales para que los sabores se mezclen.\n' +
                            '8. Sirve caliente y disfruta de este delicioso plato de carne, spaghetti y tomate.'
              break
      case ingredientes.carne && !ingredientes.arroz && ingredientes.tomate && !ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && !ingredientes.pollo && ingredientes.crema && !ingredientes.queso:
                nuevaReceta = 'Prepara un delicioso plato de carne con spaghetti, tomate y crema.'
                nuevaImagen = 'ruta-de-la-imagen-del-plato-con-carne-spaghetti-tomate-crema.jpg'
                nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade la carne cortada en trozos.\n' +
                              '2. Cocina la carne hasta que esté dorada y luego retírala de la sartén.\n' +
                              '3. En la misma sartén, agrega los tomates cortados en trozos y cocina hasta que estén tiernos y suelten sus jugos.\n' +
                              '4. Cocina los spaghetti en agua con sal siguiendo las instrucciones del paquete.\n' +
                              '5. Una vez cocidos los spaghetti, escúrrelos y añádelos a la sartén con los tomates.\n' +
                              '6. Agrega la carne nuevamente a la sartén y mezcla bien todos los ingredientes.\n' +
                              '7. Añade la crema a la preparación y mezcla hasta que esté bien combinada.\n' +
                              '8. Cocina por unos minutos adicionales para que los sabores se mezclen y la crema se caliente.\n' +
                              '9. Sirve caliente y disfruta de este delicioso plato de carne, spaghetti, tomate y crema.'
                break
      case !ingredientes.carne && ingredientes.arroz && ingredientes.tomate && !ingredientes.champiñones && !ingredientes.tofu && !ingredientes.spaguetti && ingredientes.pollo && !ingredientes.crema && ingredientes.queso:
                  nuevaReceta = 'Prepara un delicioso plato de pollo con arroz, tomate y queso.'
                  nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-arroz-tomate-queso.jpg'
                  nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade el pollo cortado en trozos.\n' +
                                '2. Cocina el pollo hasta que esté dorado y completamente cocido.\n' +
                                '3. Retira el pollo de la sartén y reserva.\n' +
                                '4. En la misma sartén, agrega el tomate cortado en trozos y cocina hasta que esté tierno y suelte sus jugos.\n' +
                                '5. Agrega el arroz cocido a la sartén y mezcla bien con el tomate.\n' +
                                '6. Vuelve a añadir el pollo a la sartén y mezcla todo junto.\n' +
                                '7. Espolvorea queso rallado por encima de la preparación y cocina a fuego bajo hasta que el queso se derrita.\n' +
                                '8. Sirve caliente y disfruta de este delicioso plato de pollo, arroz, tomate y queso.'
                  break
      case !ingredientes.carne && ingredientes.arroz && !ingredientes.tomate && ingredientes.champiñones && !ingredientes.tofu && !ingredientes.spaguetti && ingredientes.pollo && !ingredientes.crema && ingredientes.queso:
                    nuevaReceta = 'Prepara un delicioso plato de pollo con arroz, champiñones y queso.'
                    nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-arroz-champiñones-queso.jpg'
                    nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade el pollo cortado en trozos.\n' +
                                  '2. Cocina el pollo hasta que esté dorado y completamente cocido.\n' +
                                  '3. Retira el pollo de la sartén y reserva.\n' +
                                  '4. En la misma sartén, agrega los champiñones picados y cocina hasta que estén tiernos y dorados.\n' +
                                  '5. Agrega el arroz cocido a la sartén y mezcla bien con los champiñones.\n' +
                                  '6. Vuelve a añadir el pollo a la sartén y mezcla todo junto.\n' +
                                  '7. Espolvorea queso rallado por encima de la preparación y cocina a fuego bajo hasta que el queso se derrita.\n' +
                                  '8. Sirve caliente y disfruta de este delicioso plato de pollo, arroz, champiñones y queso.'
                    break
      case !ingredientes.carne && ingredientes.arroz && !ingredientes.tomate && ingredientes.champiñones && !ingredientes.tofu && !ingredientes.spaguetti && ingredientes.pollo && ingredientes.crema && !ingredientes.queso:
                      nuevaReceta = 'Prepara un delicioso plato de pollo con arroz, champiñones y crema.'
                      nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-arroz-champiñones-crema.jpg'
                      nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade el pollo cortado en trozos.\n' +
                                    '2. Cocina el pollo hasta que esté dorado y completamente cocido.\n' +
                                    '3. Retira el pollo de la sartén y reserva.\n' +
                                    '4. En la misma sartén, agrega los champiñones picados y cocina hasta que estén tiernos y dorados.\n' +
                                    '5. Añade el arroz cocido a la sartén y mezcla bien con los champiñones.\n' +
                                    '6. Vuelve a añadir el pollo a la sartén y mezcla todo junto.\n' +
                                    '7. Agrega la crema a la preparación y mezcla bien para que se integre.\n' +
                                    '8. Cocina a fuego bajo por unos minutos para que se caliente.\n' +
                                    '9. Sirve caliente y disfruta de este delicioso plato de pollo, arroz, champiñones y crema.'
                      break
      case !ingredientes.carne && ingredientes.arroz && !ingredientes.tomate && !ingredientes.champiñones && !ingredientes.tofu && !ingredientes.spaguetti && ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
                nuevaReceta = 'Prepara un delicioso plato de pollo con arroz.'
                nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-y-arroz.jpg'
                nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade el pollo cortado en trozos.\n' +
                              '2. Cocina el pollo hasta que esté dorado y completamente cocido.\n' +
                              '3. Retira el pollo de la sartén y reserva.\n' +
                              '4. En la misma sartén, agrega el arroz y revuélvelo con el aceite restante.\n' +
                              '5. Añade agua caliente o caldo de pollo y cocina el arroz siguiendo las instrucciones del paquete.\n' +
                              '6. Una vez que el arroz esté cocido, vuelve a añadir el pollo a la sartén y mezcla todo junto.\n' +
                              '7. Cocina a fuego bajo por unos minutos para que los sabores se mezclen.\n' +
                              '8. Sirve caliente y disfruta de este sencillo y sabroso plato de pollo y arroz.'
                break
      case !ingredientes.carne && ingredientes.arroz && !ingredientes.tomate && ingredientes.champiñones && !ingredientes.tofu && !ingredientes.spaguetti && ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
                nuevaReceta = 'Prepara un delicioso plato de pollo con arroz y champiñones.'
                nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-arroz-y-champinones.jpg'
                nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade el pollo cortado en trozos.\n' +
                              '2. Cocina el pollo hasta que esté dorado y completamente cocido.\n' +
                              '3. Retira el pollo de la sartén y reserva.\n' +
                              '4. En la misma sartén, agrega los champiñones picados y cocina hasta que estén tiernos y dorados.\n' +
                              '5. Añade el arroz cocido a la sartén y mezcla bien con los champiñones.\n' +
                              '6. Vuelve a añadir el pollo a la sartén y mezcla todo junto.\n' +
                              '7. Cocina a fuego bajo por unos minutos para que los sabores se mezclen.\n' +
                              '8. Sirve caliente y disfruta de este delicioso plato de pollo, arroz y champiñones.'
                break
      case !ingredientes.carne && ingredientes.arroz && ingredientes.tomate && !ingredientes.champiñones && !ingredientes.tofu && !ingredientes.spaguetti && ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
                nuevaReceta = 'Prepara un delicioso plato de pollo con arroz y tomate.'
                nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-arroz-y-tomate.jpg'
                nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva y añade el pollo cortado en trozos.\n' +
                              '2. Cocina el pollo hasta que esté dorado y completamente cocido.\n' +
                              '3. Retira el pollo de la sartén y reserva.\n' +
                              '4. En la misma sartén, agrega los tomates cortados en trozos y cocina hasta que estén suaves.\n' +
                              '5. Añade el arroz cocido a la sartén y mezcla bien con los tomates.\n' +
                              '6. Vuelve a añadir el pollo a la sartén y mezcla todo junto.\n' +
                              '7. Cocina a fuego bajo por unos minutos para que los sabores se mezclen.\n' +
                              '8. Sirve caliente y disfruta de este delicioso plato de pollo, arroz y tomate.'
                break
      case !ingredientes.carne && !ingredientes.arroz && !ingredientes.tomate && !ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
                nuevaReceta = 'Prepara un delicioso plato de espagueti con pollo.'
                nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-y-espagueti.jpg'
                nuevosPasos = '1. Cocina los espaguetis según las instrucciones del paquete.\n' +
                              '2. Mientras tanto, en una sartén grande, calienta un poco de aceite de oliva y añade el pollo cortado en trozos.\n' +
                              '3. Cocina el pollo hasta que esté dorado y completamente cocido.\n' +
                              '4. Una vez que los espaguetis estén listos, escúrrelos y añádelos a la sartén con el pollo.\n' +
                              '5. Mezcla bien para combinar los sabores.\n' +
                              '6. Sirve caliente y disfruta de este delicioso plato de pollo y espagueti.'
                break
      case !ingredientes.carne && !ingredientes.arroz && !ingredientes.tomate && ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
                nuevaReceta = 'Prepara un delicioso plato de espagueti con pollo y champiñones.'
                nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-espagueti-y-champinones.jpg'
                nuevosPasos = '1. Cocina los espaguetis según las instrucciones del paquete.\n' +
                              '2. Mientras tanto, en una sartén grande, calienta un poco de aceite de oliva y añade el pollo cortado en trozos.\n' +
                              '3. Cocina el pollo hasta que esté dorado y completamente cocido.\n' +
                              '4. Añade los champiñones picados a la sartén y cocínalos hasta que estén tiernos.\n' +
                              '5. Una vez que los espaguetis estén listos, escúrrelos y añádelos a la sartén con el pollo y los champiñones.\n' +
                              '6. Mezcla bien para combinar los sabores.\n' +
                              '7. Sirve caliente y disfruta de este delicioso plato de pollo, espagueti y champiñones.'
                break
      case !ingredientes.carne && !ingredientes.arroz && ingredientes.tomate && !ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
                nuevaReceta = 'Prepara un delicioso plato de espagueti con pollo y salsa de tomate.'
                nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-espagueti-y-tomate.jpg'
                nuevosPasos = '1. Cocina los espaguetis según las instrucciones del paquete.\n' +
                              '2. Mientras tanto, en una sartén grande, calienta un poco de aceite de oliva y añade el pollo cortado en trozos.\n' +
                              '3. Cocina el pollo hasta que esté dorado y completamente cocido.\n' +
                              '4. Agrega la salsa de tomate a la sartén y mezcla bien con el pollo.\n' +
                              '5. Una vez que los espaguetis estén listos, escúrrelos y añádelos a la sartén con el pollo y la salsa de tomate.\n' +
                              '6. Mezcla bien para combinar los sabores.\n' +
                              '7. Sirve caliente y disfruta de este delicioso plato de pollo, espagueti y tomate.'
                break
      case !ingredientes.carne && !ingredientes.arroz && ingredientes.tomate && !ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && ingredientes.pollo && !ingredientes.crema && ingredientes.queso:
                nuevaReceta = 'Prepara un delicioso plato de espagueti con pollo, salsa de tomate y queso gratinado.'
                nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-espagueti-tomate-queso.jpg'
                nuevosPasos = '1. Cocina los espaguetis según las instrucciones del paquete.\n' +
                              '2. Mientras tanto, en una sartén grande, calienta un poco de aceite de oliva y añade el pollo cortado en trozos.\n' +
                              '3. Cocina el pollo hasta que esté dorado y completamente cocido.\n' +
                              '4. Agrega la salsa de tomate a la sartén y mezcla bien con el pollo.\n' +
                              '5. Una vez que los espaguetis estén listos, escúrrelos y añádelos a la sartén con el pollo y la salsa de tomate.\n' +
                              '6. Mezcla bien para combinar los sabores.\n' +
                              '7. Espolvorea queso rallado sobre la preparación y cubre con una tapa para que se derrita.\n' +
                              '8. Sirve caliente y disfruta de este delicioso plato de pollo, espagueti, tomate y queso gratinado.'
                break
      case !ingredientes.carne && !ingredientes.arroz && ingredientes.tomate && !ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && ingredientes.pollo && ingredientes.crema && !ingredientes.queso:
              nuevaReceta = 'Prepara un delicioso plato de espagueti con pollo en una cremosa salsa de tomate.'
              nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-espagueti-tomate-crema.jpg'
              nuevosPasos = '1. Cocina los espaguetis según las instrucciones del paquete.\n' +
                            '2. Mientras tanto, en una sartén grande, calienta un poco de aceite de oliva y añade el pollo cortado en trozos.\n' +
                            '3. Cocina el pollo hasta que esté dorado y completamente cocido.\n' +
                            '4. Agrega la salsa de tomate a la sartén y mezcla bien con el pollo.\n' +
                            '5. Añade la crema a la preparación y revuelve para incorporarla.\n' +
                            '6. Una vez que los espaguetis estén listos, escúrrelos y añádelos a la sartén con el pollo, la salsa de tomate y la crema.\n' +
                            '7. Mezcla bien para combinar los sabores y calienta a fuego medio durante unos minutos.\n' +
                            '8. Sirve caliente y disfruta de este delicioso plato de pollo, espagueti, tomate y crema.'
              break
      case !ingredientes.carne && ingredientes.arroz && !ingredientes.tomate && !ingredientes.champiñones && ingredientes.tofu && !ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
                nuevaReceta = 'Prepara un sabroso plato de arroz salteado con tofu.'
                nuevaImagen = 'ruta-de-la-imagen-del-plato-con-tofu-y-arroz.jpg'
                nuevosPasos = '1. Cocina el arroz según las instrucciones del paquete y déjalo enfriar ligeramente.\n' +
                              '2. En una sartén grande, calienta un poco de aceite de oliva y añade el tofu cortado en cubos.\n' +
                              '3. Cocina el tofu hasta que esté dorado y crujiente por fuera.\n' +
                              '4. Agrega el arroz cocido a la sartén y mezcla bien con el tofu.\n' +
                              '5. Condimenta con sal, pimienta y tus especias favoritas al gusto.\n' +
                              '6. Cocina a fuego medio durante unos minutos, revolviendo ocasionalmente, hasta que todos los ingredientes estén bien combinados y calientes.\n' +
                              '7. Sirve caliente y disfruta de este delicioso plato de tofu y arroz.'
                break
      case !ingredientes.carne && !ingredientes.arroz && !ingredientes.tomate && !ingredientes.champiñones && ingredientes.tofu && ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
                nuevaReceta = 'Prepara un delicioso plato de espagueti con salsa de tomate y tofu.'
                nuevaImagen = 'ruta-de-la-imagen-del-plato-con-tofu-y-espagueti.jpg'
                nuevosPasos = '1. Cocina el espagueti según las instrucciones del paquete y déjalo aparte.\n' +
                              '2. En una sartén, calienta un poco de aceite de oliva y añade el tofu cortado en cubos.\n' +
                              '3. Cocina el tofu hasta que esté dorado y crujiente por fuera.\n' +
                              '4. Agrega la salsa de tomate a la sartén y mezcla bien con el tofu.\n' +
                              '5. Añade el espagueti cocido a la sartén y revuélvelo para que se cubra con la salsa.\n' +
                              '6. Cocina a fuego medio durante unos minutos, asegurándote de que el espagueti esté bien cubierto con la salsa.\n' +
                              '7. Sirve caliente y disfruta de este sabroso plato de tofu y espagueti.'
                break
      case !ingredientes.carne && ingredientes.arroz && ingredientes.tomate && !ingredientes.champiñones && ingredientes.tofu && !ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
              nuevaReceta = 'Prepara un nutritivo plato de arroz salteado con tofu y tomate.'
              nuevaImagen = 'ruta-de-la-imagen-del-plato-con-tofu-arroz-y-tomate.jpg'
              nuevosPasos = '1. Cocina el arroz según las instrucciones del paquete y déjalo enfriar ligeramente.\n' +
                            '2. En una sartén, calienta un poco de aceite de oliva y añade el tofu cortado en cubos.\n' +
                            '3. Cocina el tofu hasta que esté dorado y crujiente por fuera.\n' +
                            '4. Agrega el arroz cocido a la sartén y mezcla bien con el tofu.\n' +
                            '5. Añade los tomates picados a la sartén y cocínalos hasta que estén tiernos.\n' +
                            '6. Condimenta con sal, pimienta y especias al gusto.\n' +
                            '7. Cocina a fuego medio durante unos minutos, revolviendo ocasionalmente, hasta que todos los ingredientes estén bien combinados y calientes.\n' +
                            '8. Sirve caliente y disfruta de este nutritivo plato de tofu, arroz y tomate.'
              break
      case !ingredientes.carne && ingredientes.arroz && !ingredientes.tomate && ingredientes.champiñones && ingredientes.tofu && !ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
              nuevaReceta = 'Prepara un delicioso plato de arroz salteado con tofu y champiñones.'
              nuevaImagen = 'ruta-de-la-imagen-del-plato-con-tofu-arroz-y-champinones.jpg'
              nuevosPasos = '1. Cocina el arroz según las instrucciones del paquete y déjalo enfriar ligeramente.\n' +
                            '2. En una sartén, calienta un poco de aceite de oliva y añade el tofu cortado en cubos.\n' +
                            '3. Cocina el tofu hasta que esté dorado y crujiente por fuera.\n' +
                            '4. Retira el tofu de la sartén y reserva.\n' +
                            '5. En la misma sartén, añade los champiñones picados y cocínalos hasta que estén tiernos y dorados.\n' +
                            '6. Vuelve a agregar el tofu a la sartén y mezcla bien con los champiñones.\n' +
                            '7. Añade el arroz cocido a la sartén y revuélvelo para que se mezcle con el tofu y los champiñones.\n' +
                            '8. Condimenta con sal, pimienta y especias al gusto.\n' +
                            '9. Cocina a fuego medio durante unos minutos, asegurándote de que todos los ingredientes estén bien combinados y calientes.\n' +
                            '10. Sirve caliente y disfruta de este sabroso plato de tofu, arroz y champiñones.'
              break
      case !ingredientes.carne && ingredientes.arroz && ingredientes.tomate && ingredientes.champiñones && ingredientes.tofu && !ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
              nuevaReceta = 'Prepara un delicioso salteado de tofu con arroz, champiñones y tomate.'
              nuevaImagen = 'ruta-de-la-imagen-del-plato-con-tofu-arroz-champinones-y-tomate.jpg'
              nuevosPasos = '1. Cocina el arroz según las instrucciones del paquete y déjalo enfriar ligeramente.\n' +
                            '2. En una sartén, calienta un poco de aceite de oliva y añade el tofu cortado en cubos.\n' +
                            '3. Cocina el tofu hasta que esté dorado y crujiente por fuera.\n' +
                            '4. Retira el tofu de la sartén y reserva.\n' +
                            '5. En la misma sartén, añade los champiñones picados y cocínalos hasta que estén tiernos y dorados.\n' +
                            '6. Agrega el tomate cortado en cubos a la sartén y cocínalo hasta que esté ligeramente suave.\n' +
                            '7. Vuelve a agregar el tofu a la sartén y mezcla bien con los champiñones y el tomate.\n' +
                            '8. Añade el arroz cocido a la sartén y revuélvelo para que se mezcle con el tofu, los champiñones y el tomate.\n' +
                            '9. Condimenta con sal, pimienta y especias al gusto.\n' +
                            '10. Cocina a fuego medio durante unos minutos, asegurándote de que todos los ingredientes estén bien combinados y calientes.\n' +
                            '11. Sirve caliente y disfruta de este sabroso salteado de tofu, arroz, champiñones y tomate.'
              break
      case !ingredientes.carne && !ingredientes.arroz && ingredientes.tomate && !ingredientes.champiñones && ingredientes.tofu && ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
                  nuevaReceta = 'Prepara una deliciosa pasta de espagueti con salsa de tomate y tofu.'
                  nuevaImagen = 'ruta-de-la-imagen-del-plato-con-espagueti-tomate-tofu.jpg'
                  nuevosPasos = '1. Cocina el espagueti según las instrucciones del paquete.\n' +
                                '2. Mientras tanto, en una sartén, calienta un poco de aceite de oliva y añade el tofu cortado en cubos.\n' +
                                '3. Cocina el tofu hasta que esté dorado y crujiente por fuera.\n' +
                                '4. Retira el tofu de la sartén y reserva.\n' +
                                '5. En la misma sartén, agrega los tomates picados y cocínalos hasta que estén suaves y ligeramente deshechos.\n' +
                                '6. Añade la salsa de tomate a la sartén y mezcla bien con los tomates.\n' +
                                '7. Vuelve a agregar el tofu a la sartén y revuélvelo para que se mezcle con la salsa de tomate.\n' +
                                '8. Escurre el espagueti cocido y añádelo a la sartén con la salsa de tomate y tofu.\n' +
                                '9. Mezcla bien para que el espagueti se impregne de la salsa y el tofu.\n' +
                                '10. Condimenta con sal, pimienta y especias al gusto.\n' +
                                '11. Cocina a fuego medio durante unos minutos, asegurándote de que todos los ingredientes estén bien combinados y calientes.\n' +
                                '12. Sirve caliente y disfruta de este delicioso espagueti con tomate y tofu.'
                  break
      case !ingredientes.carne && !ingredientes.arroz && ingredientes.tomate && ingredientes.champiñones && ingredientes.tofu && ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
            nuevaReceta = 'Prepara una deliciosa pasta de espagueti con tofu, champiñones y salsa de tomate.'
            nuevaImagen = 'ruta-de-la-imagen-del-plato-con-tofu-espagueti-champinones-tomate.jpg'
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
                          '11. Sirve caliente y disfruta de este delicioso plato de tofu, espagueti, champiñones y tomate.'
            break           
      case !ingredientes.carne && !ingredientes.arroz && !ingredientes.tomate && ingredientes.champiñones && ingredientes.tofu && ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
                nuevaReceta = 'Prepara una deliciosa pasta de espagueti con tofu y champiñones.'
                nuevaImagen = 'ruta-de-la-imagen-del-plato-con-tofu-espagueti-champinones.jpg'
                nuevosPasos = '1. Cocina el espagueti según las instrucciones del paquete.\n' +
                              '2. Mientras tanto, en una sartén grande, calienta un poco de aceite de oliva.\n' +
                              '3. Añade los champiñones cortados en rodajas a la sartén y cocínalos hasta que estén dorados y tiernos.\n' +
                              '4. Agrega el tofu cortado en cubos a la sartén y cocina por unos minutos más hasta que esté ligeramente dorado.\n' +
                              '5. Escurre el espagueti cocido y añádelo a la sartén con los champiñones y el tofu.\n' +
                              '6. Mezcla todo junto para que el espagueti se impregne de los sabores de los ingredientes.\n' +
                              '7. Condimenta con sal, pimienta y especias al gusto.\n' +
                              '8. Cocina a fuego medio durante unos minutos para que todos los ingredientes se mezclen y se calienten.\n' +
                              '9. Sirve caliente y disfruta de este delicioso plato de tofu, espagueti y champiñones.'
                break                      
      case ingredientes.carne && ingredientes.arroz && ingredientes.tomate && ingredientes.champiñones && !ingredientes.tofu && !ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
          nuevaReceta = 'Prepara un delicioso plato de carne con arroz, tomate y champiñones.';
          nuevaImagen = 'ruta-de-la-imagen-del-plato-con-carne-arroz-tomate-champinones.jpg';
          nuevosPasos = '1. En una sartén grande, calienta un poco de aceite de oliva.\n' +
                            '2. Añade la carne cortada en trozos a la sartén y cocínala hasta que esté dorada.\n' +
                            '3. Retira la carne de la sartén y reserva.\n' +
                            '4. En la misma sartén, agrega los champiñones cortados en rodajas y cocínalos hasta que estén tiernos.\n' +
                            '5. Agrega el tomate picado a la sartén y cocina por unos minutos hasta que se ablande.\n' +
                            '6. Añade el arroz previamente cocido a la sartén y mezcla bien con los champiñones y el tomate.\n' +
                            '7. Regresa la carne a la sartén y mezcla todo junto.\n' +
                            '8. Condimenta con sal, pimienta y especias al gusto.\n' +
                            '9. Cocina a fuego medio durante unos minutos para que los sabores se mezclen.\n' +
                            '10. Sirve caliente y disfruta de este delicioso plato de carne, arroz, tomate y champiñones.';
              break;         
      case ingredientes.carne && !ingredientes.arroz && ingredientes.tomate && ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && !ingredientes.queso:
          nuevaReceta = 'Prepara un delicioso plato de carne con espagueti, tomate y champiñones.';
          nuevaImagen = 'ruta-de-la-imagen-del-plato-con-carne-espagueti-tomate-champinones.jpg';
         nuevosPasos = '1. En una olla grande, hierve agua con sal y cocina el espagueti siguiendo las instrucciones del paquete.\n' +
                           '2. Mientras tanto, en una sartén grande, calienta un poco de aceite de oliva.\n' +
                           '3. Añade la carne cortada en trozos a la sartén y cocínala hasta que esté dorada.\n' +
                           '4. Agrega los champiñones cortados en rodajas y cocina hasta que estén tiernos.\n' +
                           '5. Incorpora el tomate picado a la sartén y cocina por unos minutos hasta que se ablande.\n' +
                           '6. Cuando el espagueti esté listo, escúrrelo y añádelo a la sartén con la carne, los champiñones y el tomate.\n' +
                           '7. Mezcla todo junto y condimenta con sal, pimienta y especias al gusto.\n' +
                           '8. Cocina por unos minutos más para que los sabores se mezclen.\n' +
                           '9. Sirve caliente y disfruta de este delicioso plato de carne, espagueti, tomate y champiñones.';
              break;     
      case ingredientes.carne && ingredientes.tomate && !ingredientes.arroz && ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && !ingredientes.pollo && !ingredientes.crema && ingredientes.queso:
            nuevaReceta = 'Prepara una deliciosa combinación de carne con tomate, champiñones y queso.'
             nuevaImagen = 'ruta-de-la-imagen-del-plato-con-carne-tomate-champiñones-queso.jpg'
             nuevosPasos = '1. En una sartén grande, cocina la carne hasta que esté dorada. Resérvala.\n' +
                  '2. En la misma sartén, agrega los champiñones cortados en láminas y cocina hasta que estén tiernos.\n' +
                  '3. Añade los tomates cortados en trozos y cocina hasta que estén suaves.\n' +
                  '4. Vuelve a colocar la carne en la sartén y mezcla todos los ingredientes.\n' +
                  '5. Espolvorea queso rallado sobre la preparación y cocina a fuego bajo hasta que el queso se derrita.\n' +
                  '6. Sirve caliente y disfruta de este delicioso plato con carne, tomate, champiñones y queso.'
    break
      case !ingredientes.carne && !ingredientes.arroz && ingredientes.tomate && ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && ingredientes.pollo && !ingredientes.crema && ingredientes.queso:
      nuevaReceta = 'Prepara un delicioso plato de pollo con espagueti, tomate, champiñones y queso.'
      nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-espagueti-tomate-champiñones-queso.jpg'
      nuevosPasos = '1. Cocina los espaguetis según las instrucciones del paquete y reserva.\n' +
                    '2. En una sartén grande, cocina el pollo cortado en trozos hasta que esté dorado. Resérvalo.\n' +
                    '3. En la misma sartén, agrega los champiñones picados y cocina hasta que estén tiernos y dorados.\n' +
                    '4. Añade los tomates cortados en trozos y cocina hasta que estén suaves.\n' +
                    '5. Agrega el pollo nuevamente a la sartén y mezcla bien todos los ingredientes.\n' +
                    '6. Agrega el espagueti cocido a la sartén y mezcla para combinar todos los sabores.\n' +
                    '7. Espolvorea queso rallado sobre la preparación y cocina a fuego bajo hasta que el queso se derrita.\n' +
                    '8. Sirve caliente y disfruta de este delicioso plato con pollo, espagueti, tomate, champiñones y queso.'
      break
      case ingredientes.pollo && !ingredientes.arroz && ingredientes.tomate && ingredientes.champiñones && !ingredientes.tofu && ingredientes.spaguetti && !ingredientes.crema && !ingredientes.queso:
             nuevaReceta = 'Receta con pollo, espagueti, champiñones y tomate: Prepara un delicioso plato de pollo con espagueti, champiñones y tomate.'
             nuevaImagen = 'ruta-de-la-imagen-del-plato-con-pollo-espagueti-champiñones-tomate.jpg'
             nuevosPasos = [
           '1. Cocina los espaguetis según las instrucciones del paquete y reserva.\n',
           '2. En una sartén grande, cocina el pollo cortado en trozos hasta que esté dorado. Resérvalo.\n',
           '3. En la misma sartén, agrega los champiñones picados y cocina hasta que estén tiernos y dorados.\n',
           '4. Añade los tomates cortados en trozos y cocina hasta que estén suaves.\n',
           '5. Agrega el pollo nuevamente a la sartén y mezcla bien todos los ingredientes.\n',
           '6. Agrega el espagueti cocido a la sartén y mezcla para combinar todos los sabores.\n',
            '7. Sirve caliente y disfruta de este delicioso plato con pollo, espagueti, champiñones y tomate.\n'
            ]
            break
      default:
        nuevaReceta = 'Selecciona al menos un ingrediente para ver una receta.';
        nuevaImagen = "ruta imagen";
        nuevosPasos = "Elige los ingredientes que tengas en tu refri"
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
            onclick={generarReceta}/>
          </div>
        </div>
      </div>
      {mostrarReceta && (
        <Cardreceta
          foto={imagenReceta}
          titulo={receta}
          paso1={pasosReceta}
        />
      )}
      <br />
 </>
  )
}
export default Enmirefri;
