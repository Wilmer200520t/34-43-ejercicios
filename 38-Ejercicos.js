  /*-----------------------------------------------------------------------*/
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 15 \n");
  /*-----------------------------------------------------------------------*/
  /*15) Programa una función para convertir números de base binaria a decimal y viceversa,
   pe. miFuncion(100,2) devolverá 4 base 10.*/
   const miFuncio15=(numero, base)=>{
     let val=parseInt(numero);//solo comprobar que no se ingre letras
     if(val==NaN || typeof(base)!="number")return console.log("Solo se puede Ingresar numeros");
     if(numero<0 || base<=0)return console.log("Ingresar numeros Mayores a 0");
     switch (base){
        case 2:
            //binario a numero
            numero=numero.toString();
            let bin=numero.split('');//separacion por unidad
            let resultado=0;
            for (let i = numero.length-1; i>=0 ; i--) {
                if((bin[i])!=0){ //saltar los 0
                    resultado+=Math.pow(2,i);
                }
            }
            return console.log(`${resultado} base 10`);
            break;
        case 10:
            //numero a binario
            let binario=numero.toString(2);
            return console.log(`${binario} base 2`);
            break;
        default:
        return console.log("Ingre en la base solo 2=binario y 10=Decimal");
            break;
     }
   }
   miFuncio15(0,10);
   miFuncio15('011',2);
    /*-----------------------------------------------------------------------*/
console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 16 \n");
  /*-----------------------------------------------------------------------*/
  /*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
   pe. miFuncion(1000, 20) devolverá 800. */
   const miFuncio16=(Total,Descuento)=>{
    if(typeof(Total)!="number"|| typeof(Descuento)!="number")return console.log("Solo se puede Ingresar numeros");
    if(Descuento<0 && Descuento>100){return console.log("Rango de descuento Invalido")}

    else{
        Total=Total*(1-(Descuento/100));
        return console.log(`Total con decuento aplicado: ${Total}`)};
     
   }
   miFuncio16(1000,20);
 /*-----------------------------------------------------------------------*/
console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 17 \n");
  /*-----------------------------------------------------------------------*/

  /*17) Programa una función que dada una fecha válida determine 
  cuantos años han pasado hasta el día de hoy, pe. 
  miFuncion(new Date(1984,4,23)) devolverá 38 años (en 2022).*/
 const miFuncio17=(date)=>{
    if(!date instanceof Date)return console.log("Ingrese una fecha valida");
    let fechaactua=new Date();
    let resultado=fechaactua.getTime()-date.getTime();
    let anioenMS=1000*60*60*24*365;
    resultado=Math.floor(resultado/anioenMS);
    return (resultado<0)
    ? console.log(`Falta ${Math.abs(resultado)} años para la fecha actual`)
    : console.log(`Ha transcurrido ${resultado} años`);

 }

 miFuncio17(new Date(2084,4,23));