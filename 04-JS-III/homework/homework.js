// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  //1 Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  //2 Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}

function obtenerLargoDelArray(array) {
  //3 Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  //4 "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var miLista = [];
  for (x = 0; x < array.length; x++) {
    miLista[x] = array[x]+1;
  }
  return miLista;
}

function agregarItemAlFinalDelArray(array, elemento) {
  //5 Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array[array.length] = elemento;
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  //6 Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  //7 "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
    return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  //8 Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var x = 0; x < array.length; x++) {
    if (array[x] === elemento) {
      return true;
    } 
  }
  return false; // no se incluye el return en else ya que a la primera condición no cumplida, se cierra el ciclo y no evalua las posteriores.
}

function agregarNumeros(numeros) {
  //9 "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var x = 0; x < numeros.length; x++) {
    suma = suma + numeros[x];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  //10 "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
   return agregarNumeros(resultadosTest) / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  //11 "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var Mayor = numeros[0];
  for (var x = 1; x < numeros.length; x++) {
    if (numeros[x] > Mayor) {
      Mayor = numeros[x];
    }
  }
  return Mayor;
}

function multiplicarArgumentos() {
  //12 Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length < 1) return 0;
  var VRtotal = 1;
  for(var x = 0; x < arguments.length; x++) {
    VRtotal = VRtotal * arguments[x];
  }
  return VRtotal;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
