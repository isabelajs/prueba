let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let url = "https://rickandmortyapi.com/api/character/";

//realizo una función normal
function fetchData(url) {
  return new Promise((res, rej) => {
    const xml = new XMLHttpRequest();
    xml.open("GET", url, true);
    xml.send();
    xml.onreadystatechange = () => {
      if (xml.readyState === 4) {
        xml.status === 200
          ? res(JSON.parse(xml.responseText))
          : rej(new Error("Error: " + url));
      }
    };
  });
}

//utilizo una función para inicializar la anterior
function start (url){
  return fetchData(url)
}

// Call start
(async() => {
  console.log('before start');
  //obtengo los personajes
  let y = await start(url);
  //obtengo el primer personaje
  let x = await start(url + y.results[0].id)
  //obtengo el origen del primer personaje
  let z = await start(x.origin.url)
  console.log(z);
  
  console.log('after start');
})();