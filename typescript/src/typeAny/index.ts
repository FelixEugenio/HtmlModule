function showMessage(msg:string){
  return msg;
}

function semRetorno(...args:string[]):void{
  console.log(args.join(' '))
}

semRetorno('felix','Mavila');



const pessoa = {
  nome:'Luiz',
  sobrenome:'mavila',

  exibirNome():void{
  console.log(this.nome + ' ' + this.sobrenome)
  }
}

pessoa.exibirNome()

export {pessoa}

