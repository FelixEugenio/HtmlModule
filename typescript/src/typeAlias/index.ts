// criar um apelido

type Idade = number;
//contrato
type Pessoa = {
  nome:string,
  idade:Idade,
  salario:number,
  corPreferida:string
}

type CorRGB = 'Vermelo' | 'Preta' | 'Branca'
type CorCMK = ' ciano ' | 'agua marinha'
type CorFavorita = CorCMK | CorRGB

const pessoa : Pessoa ={
idade:30,
nome:'felix',
salario: 200_000,
corPreferida:'verde'
}

export function setCorPreferida(pessoa:Pessoa,cor:CorFavorita):Pessoa{
  return {...pessoa,corPreferida:cor};
}
