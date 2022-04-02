//obtengo el objeto desde la libreria
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//url de la api
let API = "https://rickandmortyapi.com/api/character/" ;

//creo una función que simula un fetch
function fetchData(url_api,callback) {
    //instanciamos la conexión
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api,true);
    //envia nuestra peticion
    xhttp.send();
    //validación del llamado   
    xhttp.onreadystatechange = (event)=>{
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null,JSON.parse(xhttp.responseText))
            }else{
                const error = new Error("error: "+ url_api)
                return callback(error,null)
            }
            }  
        } 
    
    
    }


fetchData(API,(error,data)=>{
    if (error) console.error(error);
    //obtengo una colección de 20 objetos personajes
    fetchData(API + data.results[0].id, (error2,data2)=>{
        if(error2)console.error(error2);
        //obtengo el primer personaje de la colección 
        fetchData(data2.origin.url, (error3,data3)=>{
            //obtengo la pagina del lugar de origen
            if(data3) console.log(data3);
            if(error3)console.log(error3);
        })

    })
    
})



