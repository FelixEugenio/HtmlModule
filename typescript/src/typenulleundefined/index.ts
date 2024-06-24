let x;

//stricttamente de tipo

if(typeof x === 'undefined') x = 20;

function createPerson(
  firstName: string,
  lastName?:string

):{
  firstName: string,
  lastName?:string

}{
  return {
    firstName,
    lastName
  }
}


function saquare(x:any){
  // verificando o tipo de dados
  if(typeof x === 'number') return x*x;
return null;
}
