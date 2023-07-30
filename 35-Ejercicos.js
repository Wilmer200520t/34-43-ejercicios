/*-----------------------------------------------------------------------*/
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log("Ejericicio Numero 5 \n");
/*-----------------------------------------------------------------------*/
/*5) Programa una función que invierta las palabras 
de una cadena de texto, pe.
 miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
const miFuncion5 = (cadena) => {
  let array = [];
  let arrayinvertido = "";
  let cont = -1;
  //separar la cadena de texto
  for (let i = 0; i < cadena.length; i++) {
    array.push(cadena.split("")[i]);
    cont += 1;
  }

  //revertir la cadena de texto
  for (let i = cont; i >= 0; i--) {
    if (i === cont && array[i] === " ") {
    } else {
      arrayinvertido += array[i];
    }
  }
  return arrayinvertido;
};
console.log(miFuncion5("Hola que tal como van "));

/*-----------------------------------------------------------------------*/
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log("Ejericicio Numero 6 \n");
/*-----------------------------------------------------------------------*/
/*6) Programa una función para contar el número
 de veces que se repite una palabra en un texto largo, 
 pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */
const miFuncion6 = (cadena, buscar) => {
  let cont = 0;
  let posicion = cadena.indexOf(buscar);
  while (posicion !== -1) {
    cont += 1;
    posicion = cadena.indexOf(buscar, posicion + 1);
  }
  return cont;
};
console.log(miFuncion6("hola mundo adios mundo", "o"));

/*-----------------------------------------------------------------------*/
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log("Ejericicio Numero 7 \n");
/*-----------------------------------------------------------------------*/
/* 7) Programa una función que valide si una palabra o frase dada,
 es un palíndromo (que se lee igual en un sentido que en otro), 
 pe. mifuncion("Salas") devolverá true.*/
const miFuncion7 = (palabra) => {
  palabra = palabra.toLowerCase();
  let Array = [];
  let cont = -1;
  //separar
  for (let i = 0; i < palabra.length; i++) {
    Array.push(palabra.split("")[i]);
    cont += 1;
  }
  //invertir
  let palabraiver = "";
  for (let j = cont; j >= 0; j--) {
    palabraiver += Array[j];
  }

  //comporbar si son polidromos
  let boleam = false;
  if (palabra === palabraiver) {
    boleam = true;
  }
  return boleam;
};

console.log(miFuncion7("ala"));
/*-----------------------------------------------------------------------*/
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log("Ejericicio Numero 8 \n");
/*-----------------------------------------------------------------------*/
/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
  devolverá  "1, 2, 3, 4 y 5. */

const miFuncion8 = (cadena, patron) => {
  let cantidad = patron.length;
  let posicion = cadena.indexOf(patron);
  let array = [];
  while (posicion !== -1) {
    //destructuracion de cadena
    let cont=0;
    for (let i = 0; i < cadena.length; i++) {
      array.push(cadena.split("")[i]);
      cont++;
    }
    //eliminacion del patron
    for (let j = 0; j <  cantidad; j++) { //repeticiones por la cantidad de palabras que tiene el patron
      //splice actua como una pila (osea si se elimina una posicion la siguiente toma esa posicion)
      array.splice(posicion, 1); //elimina la posicion donde se encontro la primera coinciendica 

    }
    //estructuracion de cadena
    cadena="";
    for (let i = 0; i < (cont-cantidad); i++) {
      cadena+=(array[i]);
    }
    //reinicio array
    array=[];
    //consulto si hay mas coincidencias
    posicion=cadena.indexOf(patron);
  }
  return cadena;
};

console.log(miFuncion8("xyz1, xyz2, xyz3, xyz4 y xyz5", "xy"));
