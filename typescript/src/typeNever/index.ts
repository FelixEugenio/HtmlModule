//never

function criaErro(): never{
  throw new Error('Erro')
}

criaErro()
