const path= require('path');
const fs= require('fs');
const marked= require('marked');
const cheerio = require('cheerio');
const fetch= require('fetch');
//guardo en una variable mi path predeterminado ... por ahora! 8-)
let inputTesting='./calis.txt';


//----5 Funcion que validará los links
const linksValidation =(urlArray)=>{
  //for(let i=0;i<urlArray.length;i++){
    //let url= urlArray[i];
    fetch(urlArray[0])
      .then((response)=>{
        return response.text();
      })
      .then((data)=>{
        console.log('data = ', data);
      })
      .catch(function(err) {
        console.error(err);
      });
    
  //}
  
}




//----4 Funcion que filtrara los elementos <a> y arrojara los links
const searchElementsA = (htmlA)=>{
  $ = cheerio.load(htmlA);
  let links = [];

  $('a').each((i,element)=> {
      links[i]= $(element).attr("href");   
  })
  console.log(links, +' '+ links.length);
  linksValidation(links);
};//4 termina funcion para extraer links

//----3 Funcion que convierte readFile a elementos HTML
const convertingHtml= (markdownText)=>{
  let htmlelements= marked(markdownText);
  console.log(htmlelements);
  searchElementsA(htmlelements);
};
//termina 3 Funcion que convierte el texto de md a elementos html




//----2 Función que leerá el archivo en caso de ser .md
const readingFileMd= (finalFileMd)=>{
  fs.readFile(finalFileMd, 'utf-8', (err, data) => {
   if(err) {
     console.log('error: ', err);
   } else {
     console.log(data);
     convertingHtml(data);
   }
 });
 };//Termina funcion2 y es llamada en la seccion 3



//----1 Función que verifica si el path que ingresaron contiene archivos con extension .md
const chekingIfPathHasMdFiles = (userMdFile)=>{
  let inputCheking= path.extname(userMdFile);
  if(inputCheking === '.md'){
    true;
    console.log(`A continuacion se leera tu archivo md.`);
    readingFileMd(userMdFile);//llama funcion 2 de lectura
  }else{ console.log(false, 'El path que ingresaste no contiene archivos .md o no existe: definitivamente ruta invalida')};
};

chekingIfPathHasMdFiles(inputTesting);//----Termina seccion 1 y es llamada la seccion 2
 



















//1const path= require('path');

/*2const readline= require('readline');

//Deja ingresar al usuario una ruta
let rl= readline.createInterface(process.stdin, process.stdout);
rl.question('Ingrese una ruta:', (answer) => {
  console.log(`La ruta ingresada es: ${answer}`);
  //otraFunction(resp)//Lo agrego Flore diciendome que en esta funcion deberia de agregar 
  //lo de la linea7 que es lo que ya habiamos hecho en espacio de Laboratoria
  //isThereAValidPath(respuesta);
  process.exit();
});*/

/*1
const gettingPath = (filePath)=>{
  let namePathObj= path.parse(filePath,__filename);
  let dirPathObj= path.parse(filePath,__dirname);
  console.log(namePathObj);
  console.log(dirPathObj);
}
gettingPath('/Escritorio/LaboratoriaW/GDL003-md-links/README.md');
*/



  














/*console.log(process.arvg);//Lo agrego Flore diciendo creo que el proceso de preguntar en consola

//mdLinks
module.exports= (filePath)=>{
  if(path.extname(filePath) === '.md'){
    return true
  }else{
    return false
  }
} 

//crear una interfaz para el modulo
//let rl= readline.createInterface(process.stdin, process.stdout);

rl.question('Que actividades harás cuando la negra se vaya? ', (respuesta) => {
  console.log(`Tu festin será: ${respuesta}`);
  //otraFunction(resp)//Lo agrego Flore diciendome que en esta funcion deberia de agregar 
  //lo de la linea7 que es lo que ya habiamos hecho en espacio de Laboratoria
  process.exit();

});

*/


/*let fs = require('fs');


fs.readFile('/README.md', 'utf-8', (err, data) => {
  if(err) {
    console.log('error: ', err);
  } else {
    console.log(data);
  }
});
*/


/*

//module.exports = () => {
  // ...

  myName='Cinthia';
  lastName='Sánchez de Tagle';

  function writeName(nombre,apellido){
    return console.log(`Tu nombre es ${nombre} y tu primer apellido es ${apellido}`);
  }
  writeName('Cesar','Tagle');
//};


let util= require('util');//usando el modulo de utilities
let nam= 'Karen Tagle';
let age=32;
let texto= util.format('Hola %s, tienes %d añitos apenas', nam, age);//usando el modulo de util-format /para timestamp
console.log(texto);


let v8=require('v8');
console.log(v8.getHeapStatistics());


let readline= require('readline');
//crear una interfaz para el modulo

let rl= readline.createInterface(process.stdin, process.stdout);

rl.question('Cual es tu pokemon favorito? ', (resp) => {
  console.log(`Tu pokemon favorito es ${resp}`);
  process.exit();

});


let path = require('path');//la variable path hace referencia a require y este llama al modulo path, 
//path controla toda la parte de archivos o direcciones
//en terminal solamente se va a llamar node nombreDeMiArchivo


const noDeTaller=5; 
console.log(`El taller de hoy es el número: ${noDeTaller}!!!`);
const nombre= 'MANEJO DE CONFLICTOS ';
console.log(`El nombre del taller es: ${nombre}`);


console.log(__dirname);//variables globales 

console.log(__filename);//variables globales

console.log(path.basename(__filename));//mando a llamar a una funcion que existe dentro del modulo path que se llama basename
console.log(process.argv);//node js funciona de forma asincrona, ventajas las solicitudes se almacenan en una cola de espera, 
//se puede trabajar sin esperar a que otra actividad termine  **process.argv devuelve un arreglo con dos elementos 1desde donde se ejecuta el proceso es decir donde esta instalado el node y 2esta ejecutando desde la carpeta donde estoy


function parametros(p){
  let index=process.argv.indexOf(p);
  
  return process.argv[index+1];
}

let name= parametros('--nombre');
let edad= parametros('--edad');
console.log(`Tu nombre es :${name} y tu edad es ${edad}, que rucaila!`) ;



let preguntas=['Cual es tu nombre?',
              'Cuál es tu color favorito?',
              'Cómo vas con tu proyecto?'];
let respuestas= [];


function  pregunta(i){
  process.stdout.write(preguntas[i]);

}



process.stdin.on('data',function(data){
  respuestas.push(data.toString().trim());// el trim() quita el salto de linea

  if (respuestas.length< preguntas.length){
    pregunta(respuestas.length);
  }else{process.exit()}
});

pregunta(0);//empiezas con la primer pregunta del array
*/

//pruebas para la implementacion de marked

  /*const mdOptions = {
    // whether to conform to original MD implementation
    pedantic: false,
    // Github Flavoured Markdown
    gfm: true,
    // tables extension
    tables: true,
    // smarter list behavior
    smartLists: true,
    // "smart" typographic punctuation for things like quotes and dashes
    smartypants: true,
    // ... other options
  }*/
  /*
  const renderer = new marked.Renderer();
  // inicia primer opcion donde retorna etiquetas
  renderer.listitem =(text) => {
    if (text.includes('type="checkbox"')) {
      return `<li style="list-style: none">${text}</li>`
    }else return `<li>${text}</li>`
  }
  renderer.link = (href, title, text) => {
    if (href.startsWith("http://") || href.startsWith("https://")) {
      if (!text) {
        text = href;
      }
      return `<a target="_blank" href="${href}" title="${title}">${text}</a>`
    }
    return `[${text}](${href})`
  }
  //marked.setOptions(mdOptions);
  return console.log(marked(markdownText, { renderer }));*/

  //termina primera opcion donde retorna etiquetas
/*  
//incia segunda opcion para podre traer texto a elementos html con marked 
// Get reference
//const renderer = new marked.Renderer();

// Override function
renderer.heading = function (text, level) {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

  return `
          <h${level}>
            <a name="${escapedText}" class="anchor" href="#${escapedText}">
              <span class="header-link"></span>
            </a>
            ${text}
          </h${level}>`;
};

// Run marked
console.log(marked(markdownText, { renderer: renderer }));*/

