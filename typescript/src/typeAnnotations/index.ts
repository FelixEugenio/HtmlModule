// basics type annotations in typescript

let nome: string = 'Luiz'
let idade : number = 30;
let adulto : boolean = true;
let simbolo : symbol = Symbol('qualquer-simbol');
let big: bigint = 10n;

//Arrays
let arrayOfNumbers: Array<number> = [1,2,3,4]
let arrayOfStrings: Array<string> = ['felix','mavila']

// outra maneira
let arrayOfNumbers1:  number[] = [1,2,3,4]
let arrayOfStrings1: string[] = ['felix','mavila']

// objectos
let person :{nome:string,idade:number,adulto?:boolean} = {
  idade:30,
  nome:'felix',
  adulto:true
}

//funcoes
function sum(x:number,y:number):number{
return x+y
}

// tipagem inteira , type alias

const sum1: (x:number,y:number) => number = (x,y) => x+y;





