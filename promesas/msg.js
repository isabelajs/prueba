
let mensaje = new Promise((resolve, reject)=>{
    setTimeout( ()=> resolve('Este es el mensaje'),2000);
})
mensaje
.then(m => console.log(m))
.catch(()=> console.log('error'))