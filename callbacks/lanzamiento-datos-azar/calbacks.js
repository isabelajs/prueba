// Implementación con callbacks */
const doTask = (iterations, callback) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        /* Error, se ha sacado un 6 */
        callback(true,number);
        return;
      }
    }
    /* Termina bucle y no se ha sacado 6 */
    return callback(null, numbers);
  }
  
  doTask(10, function(err, result) {

    console.log(err,result);
    if (err) {
      console.error("Se ha sacado un ", result);
      return;
    }
    console.log("Tiradas correctas: ", result);
  });

