//objeto
const persona={
    nombre:"wilmer",
    apellidos:"zuniga",
    edad: 35
}
console.log(Object.values(persona));
//1) Programa una función que cuente el número
//de caracteres de una cadena de texto, pe.
//miFuncion("Hola Mundo") devolverá 10. //para todo

const miFuncion = (cadena) => {
  cadena=cadena.toString();
  var cant = 0;
  for (let i = 0; i < cadena.length; i++) {
    cant++;
  }
  return cant;
};

console.log(miFuncion("Hola1234/*-sfafsga"));


//Programa una función que te devuelva el texto
//recortado según el número de caracteres indicados,
// pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const miFuncion2 = (cadena, cant) => {
  var cadena3="";
  for (const i in Object.values(cadena)){
    cadena3+=Object.values(cadena)[i];
    //cadena+=cadena.split("")[i];
  }
  cadena=cadena3;
  var cadena=cadena.toString()
  var cadena2="";  
  if (cant>cadena.length){cant=cadena.length};
  for (let i = 0; i < cant; i++) {
    cadena2+=cadena.split("")[i];
  }
  return cadena2;
};

console.log(miFuncion2("Hola putos como van 2222",12));
console.log(miFuncion2(12345679,2));
console.log(miFuncion2(persona,12));