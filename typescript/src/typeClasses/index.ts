export class Empresa{
  public readonly nome:string;

  constructor(nome:string){
    this.nome = nome;
  }
}

const empresa1 = new Empresa('Mavila LTD')
console.log(empresa1.nome)
