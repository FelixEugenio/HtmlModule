// type enum
//ESTRUTURA DE DADOS ÈNUM
enum Cores {
   VERMELHO,//0
  AZUL,//1
  AMARELO = 'Amarelo'//2
}

function escolhaCor(cor:Cores):void{
  console.log(Cores[cor])
}

console.log(Cores)
console.log(Cores.AMARELO)

escolhaCor(1)

