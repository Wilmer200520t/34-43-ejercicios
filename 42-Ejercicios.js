const { default: test } = require("node:test");
const { text } = require("stream/consumers");

/*-----------------------------------------------------------------------*/
console.log(
  '-----------------------------------------------------------------------------------------------'
);
console.log(
  '-----------------------------------------------------------------------------------------------'
);
console.log('Ejericicio Numero 27 \n');

/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.-*****
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.///Listo
  - Valida que el título no rebase los 100 caracteres.//listo
  - Valida que el director no rebase los 50 caracteres. //LISTO
  - Valida que el año de estreno sea un número entero de 4 dígitos. //LISTO
  - Valida que el país o paises sea introducidos en forma de arreglo.//listo
  - Valida que los géneros sean introducidos en forma de arreglo.//listo
  - Valida que los géneros introducidos esten dentro de los géneros //listo
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.//listo
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.//listo
  - Crea un método que devuelva toda la ficha técnica de la película.//ficha tenica
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.
    
*/

class película{
    
    
    constructor({id=undefined,titulo=undefined,director=undefined,anho=undefined,paises=undefined,generos=undefined,calificacion=undefined}){
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.anho=anho;
        this.paises=paises;
        this.generos=generos;
        this.calificacion=calificacion;
        this.validadores();
    }
    //validadores
    validadores(){
        this.validadorGeneralid(this.id);
        this.validadorGeneraltitle(this.titulo);
        this.validadorGeneraldirector(this.director);
        this.validadorGeneralanho(this.anho);
        this.validadorGeneralpais(this.paises);
        this.validadorGeneralgenero(this.generos);
        this.validadorGeneralcal(this.calificacion);
    }
    //validaciones
    validarcadenas(cadena,variable){
        if(cadena==undefined)return console.warn(`Formato\n(Id, Titulo, Director, yyyy, [país o países de origen], [géneros], 0.0-10.0).\n${variable} esta vacia.`);
        if(typeof(cadena)!='string')return console.log(`${variable} debe estar entre comillas simples o comilllas dobles.`);
        return true;
    }
    //validar id
    validadorGeneralid(id){
        let expid=/^[a-zA-Z]{2}[0-9]{7}$/;
        if(this.validarcadenas(id,'Id')){
            if(!expid.test(id))return console.log('Id debe tener 2 palabras al inicio y 7 numeros a continuacion');
        }
    }

    //validar titulo
    validadorGeneraltitle(title){
        let exptit=/^[\w\s]{1,100}$/;
        if(this.validarcadenas(title,'Titulo')){
            if(!exptit.test(title))return console.log('El titulo debe tener entre 1 y 100 caracteres');
        }
    }
    //validar director
    validadorGeneraldirector(director){
        let expt=/^[\w\s]{3,50}$/;
        if(this.validarcadenas(director,'Director')){
            if(!expt.test(director))return console.log('El director debe tener entre 3 y 50 caracteres');
        }
    }
    //validar anho
    validadorGeneralanho(anho){
        let expanh=/^([1]|[2])?[0-9]{3}$/;
        if(anho==undefined){return console.log('Formato\n(Id, Titulo, Director, yyyy, [país o países de origen], [géneros], 0.0-10.0).\nEl año esta vacio');}
        else if(typeof(anho)!="number"){return console.log('El año debe estar en formato numerico')}
        else if(!expanh.test(anho)){return console.log('El año debe solo tiene 4 digitos y acepta desde 1000 a 2999');};
    }
    //validar pais
    validadorGeneralpais(pais=undefined){
        let exptit=/^[a-zA-ZñÑ\s,]+$/;
        if(pais==undefined){return console.log('Formato\n(Id, Titulo, Director, yyyy, [país o países de origen], [géneros], 0.0-10.0).\nEl campo Pais esta Vacio')}
        else if(typeof(pais)!="object"){return console.log('El o Los paises deben estar entre [ ]')}
        else if(!exptit.test(pais)){return console.log('El pais solo debe contener Letras')}
    }

    //validar Genero
    validadorGeneralgenero(generos=undefined){
        let exptit=/^[a-zA-ZñÑ\s,]+$/;
        let generosA=['action', 'adult', 'adventure', 'animation', 
              'biography', 'comedy', 'crime', 'documentary' ,'drama', 'family', 'fantasy',
              'film noir', 'game-show', 'history', 'horror', 'musical', 'music', 'mystery',
              'news', 'reality-tv', 'romance', 'sci-fi', 'short', 'sport', 'talk-show', 
              'thriller', 'war', 'western'];
        if(generos==undefined){return console.log('Formato\n(Id, Titulo, Director, yyyy, [país o países de origen], [géneros], 0.0-10.0).\nEl campo Genero esta Vacio')}
        else if(typeof(generos)!="object"){return console.log('El Campo Genero deben estar entre [ ]')}
        else if(!exptit.test(generos)){return console.log('El genero solo debe contener Letras')}
        let cont=0;
        let dif=[];
        for (let i = 0; i < generos.length; i++) {
           for (let j = 0; j < generosA.length; j++) {
             if(generos[i].toLowerCase()===generosA[j].toLowerCase()){
                cont+=1;
                break;
             }else if(j==generos.length-1){
                dif.push(generos[i]);
             }
           }
        }
        if(cont!=generos.length)return console.log(`${dif} no esta detro de los generos aceptados.`);
    }
    //Validar Calificacion
    validadorGeneralcal(calificacion=undefined){
        if(calificacion==undefined){return console.log('El campo Calificacion esta vacia')}
        else if(typeof(calificacion)!="number"){return console.log('El campo calificacion solo acepta numeros')}
        else if(calificacion<0 || calificacion>10){return console.log('La calificacion debe ser Etre 0 y 10')}
        else {this.calificacion=calificacion.toFixed(1);}//cortar a un decimal
    }
    //Generos Aceptados
    static generosAceptados(){
        let generosA=['action', 'adult', 'adventure', 'animation', 
              'biography', 'comedy', 'crime', 'documentary' ,'drama', 'family', 'fantasy',
              'film noir', 'game-show', 'history', 'horror', 'musical', 'music', 'mystery',
              'news', 'reality-tv', 'romance', 'sci-fi', 'short', 'sport', 'talk-show', 
              'thriller', 'war', 'western'];
        return console.log(`Generos Aceptados: ${generosA} \n -----------------------------------------------------------------------------------------`)
    }

    //Ficha  tenica
    fichaTecnica(){
        console.log(`Ficha Tecnica de: ${this.titulo}\n`);
        let ficha={
            id:this.id,
            titulo:this.titulo,
            director:this.director,
            anho:this.anho,
            paises:this.paises,
            generos:this.generos,
            calificacion:this.calificacion
        }
        console.log(ficha);
        return console.log('\n------------------------------------------------------------------------------------------\n------------------------------------------------------------------------------------------');
        
    }
};

película.generosAceptados();
const IMBD=[
    {id: 'aa1234567',
    titulo:'Rapidos y furiosos',
    director:'Christopher Nolan',
    anho:2000,
    paises:['Peru','Aregentina','Paraguay'],
    generos:['action','adult'],
    calificacion:5.24}
    ,
    {id: 'aa1234566',
    titulo:'Rapidos y furiosos 6',
    director:'Christopher Nolan',
    anho:2008,
    paises:['Peru','Aregentina'],
    generos:['action','adult','comedy'],
    calificacion:7.24}];

    IMBD.forEach(el => new película(el).fichaTecnica()); ///por cada arreglo el = toma la informacion de un arreglo y =>dice que hara