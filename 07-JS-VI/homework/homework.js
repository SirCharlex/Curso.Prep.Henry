// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  return cb();
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  var sumando = numeros.reduce(function(acum, elemen, indice, arreglo){
    return acum + elemen;
  },0); // el cero corresponde al segundo arguento de reduce, con el valor cero para el primer elemento inicie en cero, en 
        // multiplicación debería se 1, ya que es el módulo de esta operación.
  cb(sumando);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  for (var x = 0; x < array.length; x++){
    cb(array[x]);
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  var nuevoArreglo = array.map(function(argumento){
    return cb(argumento);
  });
  return nuevoArreglo;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
