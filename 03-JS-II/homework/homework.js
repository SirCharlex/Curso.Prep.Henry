// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  //1 "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
    if (x > y){
      return x;
    } else if (y > x){
      return y;
    } else{
    return Math.max (x,y)
  }
}

function saludo(idioma) {
  //2 Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
    if (idioma  === 'aleman') {
      return 'Guten Tag!';
    } else if (idioma === 'mandarin'){
      return 'Ni Hao!';
    }else if (idioma === 'ingles') {
      return 'Hello!';
    }else {
      return 'Hola!'
    }
}

function esDiezOCinco(numero) {
    //3 Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
      if (numero === 10 || numero ===5) {
        return  true;
      }else {
        return false;
      } 
    }

function estaEnRango(numero) {
  //4 Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
    if (numero > 20 && numero < 50) {
      return true;
    } else{
      return false;
    }
}

function esEntero(numero) {
  //5 Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
    if (numero === Math.floor(numero)) {
      return true;
    } else{
      return false;
    }
}

function fizzBuzz(numero) {
  //6 Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 ===0){
    return 'fizzbuzz';
  } else if (numero % 3 ===0) {
    return 'fizz';
  } else if (numero % 5===0) {
    return 'buzz';
  } else {
    return numero;
    }  
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var Salida = false;
  if (numero != 0 && numero != 1) {
    for (x = 1; x <= numero; x++) {
      if (numero % x === 0) {
        if (x === 1 || x === numero) {
          Salida = true;
        } else{
        return  false; // si hay algun numero cuyo resultado de módulo de cero en numeros diretentes ente 1 y el numero, se termina con false.
        }
      }
    }
  } else {
    return false;  // si el numero es igual a cero o uno, declara de inmediato que no es primo, es decir false.
  }
  if (Salida = true) {
    return true;
  }else {
    return false;
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
