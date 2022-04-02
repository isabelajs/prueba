let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let url = "https://rickandmortyapi.com/api/character/";

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

// fetchData(url)
//   .then((objeto) => {
//     fetchData(url + objeto.results[0].id).then((objeto1) => {
//       fetchData(objeto1.origin.url).then((objeto2) => console.log(objeto2));
//     });
//   })
//   .catch((m) => console.log(m));
