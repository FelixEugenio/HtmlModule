//usar valores como tipos

let a = 100 as const;

const Pessoa = {
  nome:'luiz' as const,
  idade:14
}

function escolhacor(cor:'Vermelho' | 'Amarelo' | 'Preto '):string{
  return cor;
}
