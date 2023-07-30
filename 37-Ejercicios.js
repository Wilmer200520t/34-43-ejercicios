/*-----------------------------------------------------------------------*/
console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 12 \n");
  /*-----------------------------------------------------------------------*/
/*12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no,
 pe. miFuncion(7) devolverá true*/
 const miFuncion12=(numero)=>{
    if(typeof(numero)!="number")return console.warn("Introduzca un numero");
    cont = 0;
    for (let i = 1; i <= numero; i++) {
        if(numero%i==0){
            cont += 1;
        }
    }
    return (cont<=2)
        ? console.log(true)
        : console.log(false);
 }

 miFuncion12(-6);

  /*-----------------------------------------------------------------------*/
console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 13 \n");
  /*-----------------------------------------------------------------------*/
/*13) Programa una función que determine si un número es par o impar,
 pe. miFuncion(29) devolverá Impar.*/
 const miFuncion13=(numero)=>{
    if(typeof(numero)!="number")return console.warn("Introduzca un numero");
    if(numero<=0)return console.log("Itroduzca un numero Positivo");
    return (numero%2==0)
        ? console.log("Numero Par")
        : console.log("Numero Impar");
 }
 miFuncion13(13);
  /*-----------------------------------------------------------------------*/
console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 14 \n");
  /*-----------------------------------------------------------------------*/
/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
 pe. miFuncion(0,"C") devolverá 32°F.*/

const miFuncion14=(numero,convercion)=>{
    if(typeof(numero)!="number")return console.warn("Introduzca un numero");
    convercion=convercion.toLowerCase();
    if(typeof(convercion)!="string"){
        if(convercion!="f"|| convercion!="c")return console.log("Introduzca 'C' o 'F' ");
    }else{
        let resultado=0;
        if(convercion=="c"){
            resultado=(numero*9/5) + 32;
            return console.log(`${resultado} °F`);
        }else if(convercion=="f"){
            resultado=(numero-32) * 5/9;
            return console.log(`${resultado} °C`);
        }
    }
}

miFuncion14(12,"c");
miFuncion14(12,"f");