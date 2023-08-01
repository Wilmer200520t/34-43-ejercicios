 /*-----------------------------------------------------------------------*/
 console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 24 \n");
  /*24) Programa una función que dado un arreglo
   de números devuelva un objeto con dos arreglos, 
   el primero tendrá los numeros ordenados en forma ascendente
    y el segundo de forma descendiente, 
    pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/
    const miFuncion24=(array=[])=>{
        if(typeof(array)=="number")return console.log("Ingresa un Array [n1,n2,n...]");
        let des=[];
        for (let i = 0; i < array.length; i++) {
            
            for (let j = 0; j <= i; j++) {
                
                if(array[i]>=des[j]){//si encuentra una coincidencia
                    for (let k = des.length; k >=j ; k--) {//se ordena desde arriba;
                        (k!=j)
                        ?des[k]=des[k-1]
                        :des[k]=array[i];
                    }
                    j=i+1;
                }else if(j==i){//si no encuentra
                    des[j]=array[i];
                }
                
            }
        }
        //agregar objeto
        let desc=des.join().toString(); //uno y lo convierto a string
        const asc=desc.split(',').reverse(); //separo y lo revierto
        desc=desc.split(',');
        //arreglo.map(num=>).sort(). //para ordenar asendentemte
        const numeros={
          desc,
          asc
        };

        return console.log(numeros);
      }

      miFuncion24([7,5,7,8,6,-2]);
   /*-----------------------------------------------------------------------*/
console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 25 \n");
  /*25) Programa una función que dado un arreglo de elementos,
    elimine los duplicados,
    pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true])
    devolverá ["x", 10, 2, "10", true]. */
    //mas facil usa filter y indexOf
   const miFuncion25=(arreglo=[])=>{
     for (let i = 0; i < arreglo.length; i++) {
        for (let j = i+1; j < arreglo.length; j++) {
            if(arreglo[i]===arreglo[j]) {
                arreglo.splice(j,1);
            }
        }
        
     }
     return console.log(arreglo);
   }
   miFuncion25(["x", 10, "x", 2, "10", 10,"10",10,true, true]);
   /*-----------------------------------------------------------------------*/
console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------------------------------------"
  );
  console.log("Ejericicio Numero 26 \n");

  /*26) Programa una función que dado un arreglo de números obtenga el promedio,
   pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

   const miFuncion26=(array=[])=>{
    if(typeof(array)=="number")return console.log("Ingresa un Array [n1,n2,n...]");
    let sum=0;
    for (let i = 0; i < array.length; i++) {
       sum+=array[i];
    }
     let prom=sum/array.length;
     return console.log(`Promedio: ${prom}`)
   }

   miFuncion26([9,8,7,6,5,4,3,2,1,0]);