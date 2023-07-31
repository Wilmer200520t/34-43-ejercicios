/*-----------------------------------------------------------------------*/
console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 21 \n");
  /*-----------------------------------------------------------------------*/
/*21) Programa una función que dado un array numérico 
devuelve otro array con los números elevados al cuadrado,
 pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/
 const miFuncion21=(Array=[])=>{
    if(typeof(Array)=="number")return console.log("Ingresa un Array [n1,n2,n...]");
    for(let i=0; i<Array.length; i++){
        Array[i] = Math.pow(Array[i],2);
    }
    return console.log(Array);
 }
 miFuncion21([1,4,5]);
  /*-----------------------------------------------------------------------*/
console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 22 \n");
  /*-----------------------------------------------------------------------*/
 /*22) Programa una función que dado un array devuelva el número mas alto
  y el más bajo de dicho array,
  pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */
  const miFuncion22=(Array=[])=>{
    if(typeof(Array)=="number")return console.log("Ingresa un Array [n1,n2,n...]");
    resultado=[-999999,999999];//0 mayor 1 menor
    for(let i=0; i<Array.length; i++){
        if((Array[i])<resultado[1]){//numero menor
            resultado[1]=Array[i];
        }
        if((Array[i])>resultado[0]){//numero mayor
            resultado[0]=Array[i];
        }
    }
    return console.log(resultado);
 }
 miFuncion22([1, 4, 5, 99, -60]);
  /*-----------------------------------------------------------------------*/
console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 23 \n");
  /*-----------------------------------------------------------------------*/
  /*23) Programa una función que dado un array de números devuelva 
  un objeto con 2 arreglos en el primero almacena los números pares 
  y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
  devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
  const miFuncion23=(array=[])=>{
    if(typeof(array)=="number")return console.log("Ingresa un Array [n1,n2,n...]");
    let impares=[],pares=[];
    for (let i = 0; i < array.length; i++) {
       (array[i]%2==0)
       ?pares.push(array[i]):impares.push(array[i]);
    }
    return console.log(`Pares:[${pares}] impares: [${impares}]`);
  }
  miFuncion23([1,2,3,4,5,6,7,8,9,0]);