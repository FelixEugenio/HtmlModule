// metodos estaticos

class ControleRemoto{
    constructor(tv){
   this.tv = tv;
   this.volume = 0;
    }
// metodos de instacia
    aumentarVolume(){
     this.volume +=2;
    }

    diminuirVolume(){
        this.volume -=2;
       }
   //metdos de estatico
     static  trocarPilha(){
   console.log('pilha trocada')
       }
}

const contrle1 = new ControleRemoto('LG')
contrle1.aumentarVolume()
contrle1.diminuirVolume()
contrle1.aumentarVolume()
ControleRemoto.trocarPilha()

console.log(contrle1)