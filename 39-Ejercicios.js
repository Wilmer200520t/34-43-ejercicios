 /*-----------------------------------------------------------------------*/
 console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 19 \n");
  /*-----------------------------------------------------------------------*/
  /*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
   pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */ 
   const miFuncion18=(palabra)=>{
     palabra=palabra.toString();
     palabra=palabra.split("");//separar palbras
     let contp=0;
     let contv=0;
     let contn=0;
     let contc=0;
     let expc=/[A-Za-z]/;
     let expv=/[aeiouAEIOU]/;
     let expn=/[0-9]/;
     
     for(let i=0;i<palabra.length;i++){
        
        if(expv.test((palabra[i]))==true){
          contv++;
        }else if(expc.test((palabra[i]))==true){
          contp++;
        }else if(expn.test((palabra[i]))==true){
          contn++;
        }else{
          contc++;
        }
     }
     return console.log(`Consonantes: ${contp}, Vocales: ${contv}, Numeros: ${contn}, Caracteres o espacios: ${contc}`);
   }
   miFuncion18("Hola Mundo123");
   /*-----------------------------------------------------------------------*/
console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 20 \n");
  /*-----------------------------------------------------------------------*/
   /*19) Programa una función que valide que un texto sea un nombre válido,
    pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/ 
    const miFuncion19=(palabra)=>{
      let contp=0;
      let expp=/[a-zA-ZÑñ \s]/;// \s espacios
      palabra=palabra.toString().split("");
      for(let i=0; i<palabra.length; i++){
        if(!expp.test(palabra[i])){
          contp++;
        }
      }
      return (contp>0)?console.log("Falso"):console.log("Verdadero");
    }
    miFuncion19("franco");
   /*-----------------------------------------------------------------------*/
console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 21 \n");
  /*-----------------------------------------------------------------------*/
   /*20) Programa una función que valide que un texto sea un email válido,
    pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/
    const miFuncion20=(palabra)=>{
      let expp=/[-\w.%+]+[@][a-zA-Z]+[\.][a-zA-Z]{1,3}/;// 
      return (expp.test(palabra))?console.log("Verdadero"):console.log("Falso");
      
    }
    miFuncion20("jonm-ir-cha@gmail.com");
