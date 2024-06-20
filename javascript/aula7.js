// combinando map + reducer + filter 

const numeros = [1,2,3,56,7,8,999,98,9]

const Pares = numeros.filter(function(valor){
    return valor % 2 === 0
}).map(function(valor){
    return valor 
    * 2
}).reduce(function(ac,valor){
    return ac + valor
},0)

console.log(Pares)