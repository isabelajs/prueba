
const iterations = 10;
const numbers = [];
let attempts = 0

for (let i = 1; i <= iterations; i++){
    attempts = i;
    const number = 1 + Math.floor(Math.random()*6);
    numbers.push(number);
    if(number == 6){
        console.log("ERROR");
        break
    }
}
console.log( ` número de intentos ${attempts}, array de elementos [${numbers}]`);