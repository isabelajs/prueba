// const funcion_asincrona = async () => console.log(42);;


// const value = funcion_asincrona();             // Promise { <fulfilled>: 42 }
// const asyncValue = async ()=>{
//     await funcion_asincrona()}   // 42


//obtiene el nombre de un pokemon de acuerdo a su id
const fetch = require("node-fetch");

function obtener_pokemon(id){
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;
    return fetch(url).then(res => {return res.json()});
}

async function nombrar_pokemones() {
    for (let i = 1; i < 6; i++) {
        let pokemon = await obtener_pokemon(i);
        console.log(pokemon.name);
    }
}

nombrar_pokemones()



function obtener_pokemones(){
    let url = "https://pokeapi.co/api/v2/pokemon/";
    return fetch(url).then(res => {return res.json()});
}

async function nombrar_pokemones() {
    let pokemones = await obtener_pokemones();
    pokemones.results.forEach(pokemon => {
        console.log(pokemon.name)
    })
}

nombrar_pokemones()