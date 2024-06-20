//Arrays Reduce 

const numeros = [1,2,3,56,7,8,999,98,9]
//somando todos os valores do arrays com reduce
const total = numeros.reduce(function(acumulador, valor,indice, array){
 return acumulador += valor;
},0)

console.log(total)

const pessoas = [
    { nome:'Felix Mavila',idade:25},
    { nome:'Felix Mavila',idade:5},
    { nome:'Felix Mavila',idade:275},
    { nome:'Felix Mavila',idade:29},
    { nome:'Felix Mavila',idade:259},
]

const maisVelha = pessoas.reduce(function(acumulador , valor){
  if(acumulador.idade > valor.idade) return acumulador
  return valor
},0)

console.log(maisVelha)