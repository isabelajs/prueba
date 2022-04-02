const doSomethingAsync = ()=>{
   return new Promise((res,rej)=>{
      (true)
         ? setTimeout(()=> res("do something Async"),3000)
         : rej (new Error ("test error"))
   })

}


const doSomething = async ()=>{
   const something = await doSomethingAsync();
   console.log(something);
}

console.log("before");
doSomething()
console.log("after");

const anotherFunction = async ()=>{
   try{
      const something = await doSomethingAsync();
      console.log(something);
   } catch (error){
      console.error(error);
   }
}

console.log("before1");
anotherFunction()
console.log("after1");