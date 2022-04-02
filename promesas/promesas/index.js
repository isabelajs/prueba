// /* Implementación con promesas */
// const doTask = (iterations) => new Promise((resolve, reject) => {
//     const numbers = [];
//     for (let i = 0; i < iterations; i++) {
//       const number = 1 + Math.floor(Math.random() * 6);
//       numbers.push(number);
//       if (number === 6) {
//         reject({
//           error: true,
//           message: "Se ha sacado un 6"
//         });
//       }
//     }
//     resolve({
//       error: false,
//       value: numbers
//     });
//   });



// let mensaje = new Promise((resolve, reject)=>{
//     setTimeout( ()=> resolve('Este es el mensaje'),2000);
// })
// mensaje
// .then(m => console.log(m))
// .catch(()=> console.log('error'))

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




//debo traer el dato
function fetchData(value){
    let random = Math.random()*3000

    return new Promise((res,rej)=>{
     setTimeout(()=>{
        if (value){
            res(value)
        }else{
            rej('no se recibio nada')
        }
     },random)  

    })
}
fetchData()
.then(m=>{
    if(m == 10){
        console.log('son iguales');
    }else{
        console.log('no son iguales');
    }
})
.catch(m=>console.log(m))



//luego debo comparar el dato que traje con uno que le asigne
// si son iguales imprima son iguales, sino son diferentes


