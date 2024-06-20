// funcao map 
const numeros = [1,2,3,56,7,8,999,98,9]

//dobre os valores dos arrays


//funcao map retorna o valor mas altera
const dobroDoNumero = numeros.map(function(valor,indice,array){
return valor ** 2 * indice
});

const pessoas = [
    { nome:'Felix Mavila',idade:25},
    { nome:'Felix Mavila',idade:25},
    { nome:'Felix Mavila',idade:25},
    { nome:'Felix Mavila',idade:25},
    { nome:'Felix Mavila',idade:25},
]

//const nomes = pessoas.map((valor)=>  (idade:valor.idade))
const comIds = pessoas.map(function(obj,indice){
    obj.id = (indice + 1) * 1000
    return obj;
})

console.log(comIds)
