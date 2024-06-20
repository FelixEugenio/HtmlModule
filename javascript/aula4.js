// filter , map , reduce

const numeros = [1,2,3,56,7,8,999,98,9]

const NumerosFiltrados = numeros.filter((valor,index,array)=>valor > 10)
//console.log(NumerosFiltrados)

//funcao filter retorna um boleano ou verdadeiro ou falso
// criando uma funcao de callback
//refatorando
/*
function callBackFilter(valor,index,array){
if(valor > 10 ){
 return true
}else{
    return false;
}
}
*/
/*
function callBackFilter(valor,index,array){
   return valor > 10 
    
    }
   */

//const NumerosFiltrados = numeros.filter(callBackFilter)
console.log(NumerosFiltrados)
