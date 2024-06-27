// Promises
function rand(min,max){
   min *=1000
   max*= 1000
   return Math.floor(Math.random() * (max -min) -min)
}
function espera(msg,tmp){
    setTimeout(() => {
        console.log(msg)
    })

}

espera('Chega',rand(1,3));
espera('Chega',rand(1,3));
espera('Chega',rand(1,3));
espera('Chega',rand(1,3));
