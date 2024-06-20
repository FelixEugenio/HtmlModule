//funcoes 
//declaracao de funcao normal unsando function
// function hoisting = 
function Fala(){
    console.log('ói')
}

// funcao e um objecto de primera classe
//functiion expression 
const souUmDado = function(){
    console.log('Sou um dado')
}

souUmDado();
Fala();

function executaFuncao(funcao){
    funcao()
}

executaFuncao(souUmDado)

//arrow function
const funcaoArrow = () =>{
    console.log('sou uma arrow function')
}

funcaoArrow()

// dentro de um objecto posso ter uma funcao 

const obj = {
    falar(){
        console.log('Estou falando')
    }
}

obj.falar()