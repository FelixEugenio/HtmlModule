// temos duas manierasde criar um array co generics ou com conchetes
//Aray<T> - T[]

function multiplicaArgs(...args:Array<number>):number{

return args.reduce((acumulador,valor) => acumulador * valor,1)
}

const result = multiplicaArgs(1,2,3);

console.log(result)

// outra maneira concatena string

function concatenaStrings(...args:string[]):string[]{
  //return args.reduce((ac,valor)=>ac+valor)
  return args.map((valor)=>valor.toUpperCase())
}

const result1 = concatenaStrings('a','b');

console.log(result1)
