let  x = 11
const p = new Promise((resolve, reject) => {
    if(x == 10){
        resolve('La variable es igual a 10');
    }else{
        reject('La variable no es igual a 10');
    }
});

p
.then(m=>console.log(m))
.catch(m=>console.log(m))




'funcion y esa funcion debe retornar un promesa'

function fetchData (val1, val2){
    return new Promise((res,rej)=>{
        console.log(val1, val2);
        if (val1 == val2){
            res("los datos son iguales")
        }else{
            rej("los datos son diferentes")
        }
    })
}

fetchData(10,10)
.then(m=>console.log(m))
.catch(m=>console.log(m))
//debo traer el dato
//luego debo comparar el dato que traje con uno que le asigne
// si son iguales imprima son iguales, sino son diferentes


