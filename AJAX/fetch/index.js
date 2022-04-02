const fetch = require("node-fetch")

let url = "https://rickandmortyapi.com/api/character/";

const request =  fetch(url)
//con then se obtiene resuelto
                     .then(res=> res.json())
                     .then(body => console.log(body))

