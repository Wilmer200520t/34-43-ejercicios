/*-----------------------------------------------------------------------*/
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log("Ejericicio Numero 9 \n");
/*-----------------------------------------------------------------------*/
/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
const miFuncion9 = (repeticiones) => {
  if (typeof repeticiones !== "number")
    return console.warn("No Ingresaste un Numero");
  if (repeticiones < 0) return console.warn("Ingresa un numero postivo");
  for (let i = 0; i < repeticiones; i++) {
    //random entres 2 numeros *(max-min)+min
    let numero = Math.round(Math.random() * (600 - 501) + 501);
    console.log(numero);
  }
};
miFuncion9(1);

/*-----------------------------------------------------------------------*/
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log("Ejericicio Numero 10 \n");
/*-----------------------------------------------------------------------*/
/*10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/
const miFuncion10 = (Numero) => {
  if (typeof Numero != "number") return console.warn("Ingresa un Numero");
  let numrevert = "";
  numrevert = Numero.toString();
  numrevert = numrevert.split("").reverse().join("");
  if (Numero == numrevert) {
    return console.info(true);
  } else {
    return console.info(false);
  }
};

miFuncion10(2002);

/*-----------------------------------------------------------------------*/
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log(
  "-----------------------------------------------------------------------------------------------"
);
console.log("Ejericicio Numero 11 \n");
/*-----------------------------------------------------------------------*/
/*11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, 
se define como el producto de todos los números enteros positivos desde 1 hasta n)
, pe. miFuncion(5) devolverá 120.*/

const miFuncion11 = (numero) => {
  if (typeof numero != "number") return console.warn("Introduzca un numero");
  if (numero < 0) return console.warn("Introduzca un numero Positivo");
  let num = Math.round(numero);
  if (numero != num) {
    return console.warn("Introduzca un Numero Entero");
  } else {
    let resultado = 1; //empieza de 1 xq la respuesta menor de un factorial de un número entero positivo
    for (let i = 1; i <= numero; i++) {
      resultado = resultado * i;
    }
    return console.log(resultado);
  }
};

miFuncion11("aa");
