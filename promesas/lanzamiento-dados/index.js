const doTask = (iterations) => new Promise((res,rej)=>{
    const numbers = [];
    for (let i = 1; i <= iterations; i++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);

        if (number === 6) {
            let msg1 = `Has sacado el número 6 y llevas ${i} intentos, tus números fueron ${numbers}`
            rej(msg1)
        } 
    }
    res(`tus números son: ${numbers}`)
    
})
        

doTask(10)
.then(m=>console.log(m))
.catch(m=>console.log(m))