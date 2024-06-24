// retornar mais de um tipo de retorno

function addOrConca(a:number | string,b:number | string):number{
 if(typeof a === 'number' && typeof b === 'number') return a +b;
 return `${a}${b}`;
}
