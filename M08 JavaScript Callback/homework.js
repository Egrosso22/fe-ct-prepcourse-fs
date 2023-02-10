/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   return nombre[0].toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes retornar nada.
   cb();
   
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   var suma = 0;
   for(var i = 0; i < arrayOfNumbers.length ; i++){
      suma = suma + arrayOfNumbers[i];
   }
   cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.

   // ForEach ejecuta la función callback una vez por cada elemento del array , este siempre devuelve el valor undefined y no es encadenable.
   // El típico uso es ejecutar los efectos secundarios al final de la cadena.

   var nuevoArreglo = [];
   array.forEach(elemento => {
      nuevoElemento = cb(elemento);
      nuevoArreglo.push(nuevoElemento);
   });

   return nuevoArreglo;

}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.

   // Map se usa cuando tenemos un array y queremos obtener a partir de este un nuevoArray de otra cosa.

   var nuevoArreglo = [];
   array.map(elemento =>{
      nuevoElemento = cb(elemento);
      nuevoArreglo.push(nuevoElemento);
   });

   return nuevoArreglo;

}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Filter es como una maquina que toma cada elemento de un array y va decidiendo si cada uno pasa al nuevo array, si el elemento en cuestion no cumple con
   // cierta condicion, entonces lo descarta
   return arrayOfStrings.filter(elemento =>elemento[0] === 'a');

   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
