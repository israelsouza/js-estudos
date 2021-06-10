// # Desestruturamento
// ## Function com 2 objtos como parametros

const suco = {
    sabor: 'uva',
    quantidade: '500ml'
}

const doce = {
    primeiroTipo: 'açucar',
    segundoTipo: 'adoçante'
}

// Por serem dois objetos é necessário separar com ',' o desestruturamento e add dois parametros na chamada
function descreveSuco({sabor,quantidade}, {primeiroTipo}) {
    return `O suco é de sabor ${sabor} com ${quantidade}, adocicado com ${primeiroTipo}.`
}

console.log(descreveSuco(suco, doce))

/* ============================================ */

// ## Em array
// Antigamente:
const cores = ['azul', 'vermelho', 'cinza', 'preto', 'rosa']
console.log(cores[0]) // azul
console.log(cores[4]) // rosa

// Com o ECMAS. 6:
const [cor1,,,,cor2] = cores
console.log(cor1) // azul
console.log(cor2) // rosa



const contatos = [
  {
    nome: 'Fael',
    numero: '1234-0000',
  }, 
  {
    nome: 'Ana',
    numero: '1111-1111',
  },
  {
    nome: 'João',
    numero: '2222-2222'
  }
]

// Forma 01
const [,Ana] = contatos

function mostraNumero({numero}){
    console.log(numero)
}

mostraNumero(Ana) 


// Forma 02
function mostraNumero([,{numero}]){
    console.log(numero)
}

mostraNumero(contatos)

const rotas = {
    rapidas: ['rodovia', 'estradaX', 'estradaY']
}

const {rapidas:[rod,,y]} = rotas

console.log(`${rod} ${y}`)