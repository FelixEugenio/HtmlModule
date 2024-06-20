const pessoa = {
    //nome:'Luiz',
    sobrenome:'Mavila',
    idade:23,
    endereco:{
        rua:'Luis De Camoes',
        numero:8
    }
}

//atribuindo valor de objecto numa variavel
const { nome = 'Nao existe',endereco,idade,sobrenome } = pessoa
console.log(nome,endereco);