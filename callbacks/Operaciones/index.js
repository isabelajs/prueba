function suma(val1, val2,callback) {
    setTimeout(
        ()=>{
            const sum = val1 + val2;
            let msg = `el resultado de tu suma es ${sum}`
            console.log(msg);
            let val3
            callback(sum,val3,callback)

        },
        Math.floor(Math.random()*3000)
    );
}


function multiplicación(val1, val2,callback) {
    setTimeout(
        ()=>{
            const mult = val1 * val2;
            let msg = `el resultado de tu multiplicación es ${mult}`
            console.log(msg);
            let val4;
            callback(mult,val4,callback)
        },
        Math.floor(Math.random()*3000)
    );
}

function resta(val1, val2,callback) {
    setTimeout(
        ()=>{
            const rest = val1 - val2;
            let msg = `el resultado de tu resta es ${rest}`
            console.log(msg);
            let val5
            callback(rest,val5,callback)
        },
        Math.floor(Math.random()*3000)
    );
}


function print(params) {
    console.log(params);
}


suma(3,4, resultado1=>{

    multiplicación(resultado1,3, resultado2 => {

        resta(resultado2,resultado1,(resultado3)=>{
            
            suma(resultado3,resultado1,print)

        })
    })
})






