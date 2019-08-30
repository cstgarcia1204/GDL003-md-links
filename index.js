const path= require('path');
const fs= require('fs');
const marked= require('marked');
const cheerio = require('cheerio');
const fetch= require('node-fetch');




//guardo en una variable mi path predeterminado ... por ahora! 8-)
let inputTesting='./README.md';

//----5 Funcion que validará los links
const linksValidation =(urlArray)=>{
  let cont=0;
  urlArray.forEach((element,i) => {
 
    fetch(urlArray[i])
      .then((response)=>{
        cont+=1;
        return console.log
        ('Respuesta OK: ',response.ok,'| Status: ',response.status,'| StatusText: ', response.statusText,'| ',urlArray[i]);
      }).then((response)=>{
        console.log(cont);
      })
      .catch(function(err) {
        console.log('--->Error, Broken Link!!!', err.message);
        //return console.error(err);
      });
  });
  console.log(cont);
}// 5 termina la funcion que valida los links

//----4 Funcion que filtrara los elementos <a> y arrojara los links
const searchElementsA = (htmlA)=>{
  const $ = cheerio.load(htmlA);
  let links = [];

  $('a').each((i,element)=> {
      links[i]= $(element).attr("href");   
  })
  console.log(links);
  console.log('El número de links encontrados: ',links.length)
  linksValidation(links);
  return links;
};//4 termina funcion para extraer links y llamada de funcion 5 para validar links

//----3 Funcion que convierte readFile a elementos HTML
const convertingHtml= (markdownText)=>{
  let htmlelements= marked(markdownText);
  console.log(htmlelements);
  searchElementsA(htmlelements);
  return htmlelements;
};
//termina 3 Funcion que convierte el texto de md a elementos html y llamada de funcion 4 para extraer links




//----2 Función que leerá el archivo en caso de ser .md
const readingFileMd= (finalFileMd)=>{
  fs.readFile(finalFileMd, 'utf-8', (err, data) => {
   if(err) {
     return console.log('error: ', err);
   } else {
     console.log(data);
     convertingHtml(data);
     return data;
   }
 });
 };//Termina funcion2 y es llamada en la seccion 3



//----1 Función que verifica si el path que ingresaron contiene archivos con extension .md
const chekingIfPathHasMdFiles = (userMdFile)=>{
  let inputCheking= path.extname(userMdFile);
  if(inputCheking === '.md'){
    console.log('A continuacion se leerá tu archivo md... ');
    readingFileMd(userMdFile);//llama funcion 2 de lectura
    return true;
  }else{ 
    console.log('El path que ingresaste no contiene archivos .md o no existe: definitivamente ruta invalida');
    return false;
  }
};

chekingIfPathHasMdFiles(inputTesting);//----Termina seccion 1 y es llamada la seccion 2
 



module.exports={
  chekingIfPathHasMdFiles: chekingIfPathHasMdFiles,
  readingFileMd: readingFileMd,
  convertingHtml: convertingHtml,
  searchElementsA: searchElementsA,
  linksValidation: linksValidation,

}



