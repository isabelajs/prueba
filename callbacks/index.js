
// ejemplo de una función asincrona 
// setTimeout(()=>console.log("he ejecutado la función"),2000);
// console.log("probando");

//que internamente haga lo que haga se demore 10 segundos en devolver la informacion
// la suma se multiplique al final se imprima


//SIEMPRE DEVUELVE UN ERROR, RESULTADO
//imprime ese resultado
function suma(a,b,callback){


    console.log("recibiendo dato -> ", new Date().getSeconds()," ", new Date().getMilliseconds());

    setTimeout(()=>{
        const sum = a+b
        console.log("Devolviendo suma -> ",new Date().getSeconds()," ", new Date().getMilliseconds());
        callback(sum)
    },Math.floor(Math.random()*8000));
    
}

//la funcion potencia recibe 2 numeros y los suma, y ejecuta la potencia del 3 numero, ??? 
function potencia(valor,potencia,callback) {

    console.log("recibiendo suma-> ", new Date().getSeconds(), " ", new Date().getMilliseconds());

    setTimeout(() => {
        let resultado = valor ** potencia
        console.log("devolviendo potencia -> ",new Date().getSeconds()," ", new Date().getMilliseconds());
        callback(resultado)
    }, Math.floor(Math.random()*8000));


}

suma(3,3,(result1)=>[

    potencia(result1,3,(result2)=>{

        console.log("resultado final-> ",result2, " -> ", new Date().getSeconds()," ", new Date().getMilliseconds());
    })
])



function encontrar(callback){
    lista = [{nombre:"juanito"},{nombre:"isabela"}]

    for (let usuario of lista){

        if (callback(usuario)){
            return usuario
        }
    }
}


console.log(encontrar(resultado => resultado.nombre = "juanito")); 




