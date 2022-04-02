let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

const API = "https://rickandmortyapi.com/api/character/"

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




const x = async (url_api)=>{
   try{
      const data = await fetchData(url_api)
      const character = await fetchData(`${API}${data.results[0].id}`)
      const origin = await fetchData(character.origin.url)
      console.log(data.info.count);
      console.log(character.name);
      console.log(origin.dimension);
   } catch (error){
      console.error(error);
   }
}

x(API)