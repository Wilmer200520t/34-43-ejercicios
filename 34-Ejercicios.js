//objeto
const persona = {
  nombre: "wilmer",
  apellidos: "zuniga",
  edad: 35,
};
/*-----------------------------------------------------------------------*/
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log("Ejericicio Numero 1 \n");
/*-----------------------------------------------------------------------*/
//1) Programa una función que cuente el número
//de caracteres de una cadena de texto, pe.
//miFuncion("Hola Mundo") devolverá 10.

const miFuncion = (cadena) => {
  //conversion a String por si la entrada es Numerica
  cadena = cadena.toString();
  let cant = 0;
  //conteos de la longitudad de la cadena de texto
  for (let i = 0; i < cadena.length; i++) {
    cant++;
  }
  return cant;
};

console.log(miFuncion("Hola1234/*-sfafsga"));

/*-----------------------------------------------------------------------*/
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log("Ejericicio Numero 2 \n");
/*-----------------------------------------------------------------------*/
//Programa una función que te devuelva el texto
//recortado según el número de caracteres indicados,
// pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const miFuncion2 = (cadena, cant) => {
  if (typeof cadena === "number") {
    //convertir a String la cadena
    cadena = cadena.toString();
  } else {
    //union de cadenas tanto String como Objetos
    let cadena3 = "";
    for (const i in Object.values(cadena)) {
      cadena3 += Object.values(cadena)[i];
    }
    cadena = cadena3;
  }

  let cadena2 = "";
  //la particion no sea mayor a la cantidad de caracteres de la cadena
  if (cant > cadena.length) {
    cant = cadena.length;
  }
  //Partcicon de la cadena
  for (let i = 0; i < cant; i++) {
    cadena2 += cadena.split("")[i];
  }
  return cadena2;
};
console.log(miFuncion2("Hola putos como van 2222", 12));
console.log(miFuncion2(12345679, 4));
console.log(miFuncion2(persona, 12));

/*-----------------------------------------------------------------------*/
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log("Ejericicio Numero 3 \n");
/*-----------------------------------------------------------------------*/
//3) Programa una función que dada una String te devuelva un Array de textos separados
//por cierto caracter,
//pe. miFuncion('hola que tal', ' ')
//devolverá ['hola', 'que', 'tal'].

const miFuncion3 = (cadena, separador) => {
  cadena = cadena.toString();
  let array = [];
  //contar cuantos separaciones hay
  //primera posicion
  let cant = 0;
  let posicion = cadena.indexOf(separador);
  //comprobar si hay mas coiincidencias
  do {
    cant++;
    //comprobar mas coiciendencias
    posicion = cadena.indexOf(separador, posicion + 1);
  } while (posicion !== -1);
  //agregar split al Array
  for (let i = 0; i <= cant; i++) {
    //comprobar que el utlimo split no sea vacio
    if (cadena.split(separador)[i] != "") {
      array.push(cadena.split(separador)[i]);
    }
  }

  return array;
};

console.log(miFuncion3("Hola que tal tala lala", "a"));

/*-----------------------------------------------------------------------*/
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log("Ejericicio Numero 4 \n");
/*-----------------------------------------------------------------------*/