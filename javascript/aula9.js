//classes 

class Pessoa {
   constructor(nome , sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
   }

   falar(){
    console.log(`${this.nome} estas falando`)
   }
}

const p1 = new Pessoa('Felix','Mavila')

console.log(p1.falar())