//creo una variable que me permita acceder a la libreria de node, revisar antes si descargue la libreria en node
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//creo un nuevo objeto de tipo xml
var oReq = new XMLHttpRequest();
//preparo una peticion a http
oReq.open("GET", "https://rickandmortyapi.com/api/character");
//envio la peticion hecha con open
oReq.send();

//escuchador de evento, si el estado de readyState cambia ejecuta lo que le asigne
oReq.addEventListener("readystatechange", () =>{
    //si el estado es  finalizado, y el estatus es ok se imprime mi información
if (oReq.readyState === 4 && oReq.status ===200){
    console.log(oReq.responseText)
}
})
  
  


