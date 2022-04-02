function suma(val1, val2){
    return new Promise((res,rej)=>{
        random = Math.random()*3000
        setTimeout(()=>{
            const sum = val1+val2
        },random)
    })
}

function addToArray (data, array) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function() {
      array.push(data)
      resolve(array)
    }, 1000);
    
    if (!array) {
      reject(new Error('No existe un array'))
    }
  })
  
  return promise
}


const array = [1, 2, 3]
addToArray(4)
  .then( m => addToArray(5, m))
  .then( m=>addToArray(6,m))
  .then (()=>console.log(array))
  .catch(error=>console.log(error.message))

