// Ways to create

const firstArray = Array.of(1,2,8,4)
const secundArray = Array('string', 3)
const personsList = ['Batman', 'Winchester', 'Dracula']

/* 
    Array methods 
*/



// Add and Remove itens

const frutas = ['melancia', 'banana', 'laranja']

frutas.push('maçã', 'morango') // Add to end
console.log(frutas)

frutas.unshift('uva') // add to first position
console.log(frutas)

const remove = frutas.pop() // Remove the last item
console.log(frutas, 'remove: ' + remove)

const shift = frutas.shift() // remove the first item
console.log('remove the item: ' + shift, frutas)



// Concat ; Não exclui ou altera os arrays iniciais

const salgados = ['kibe', 'coxinha', 'carne']
const doces = ['bolo', 'brigadeiro', 'refrigerante']

const docesESalgados = doces.concat(salgados)

console.log(docesESalgados)



// Slice (ñ altera a referê.) e Splice (altera a referê.)

const arr = [1,2,3,4,5,6]

console.log(arr.slice(2)) // posição 2 até o fim
console.log(arr.slice(0,4)) // do inicio ate (segundo valor -1)
console.log(arr.slice(-1)) // ultimo item
console.log(arr.slice(-3)) // tres ultimos itens


arr.splice(2)   // deleta da 2ª pos. adiante
console.log(arr) 
arr.splice(1,0,1.5) // add no index 1
arr.splice(3,0,2.5) // add na 3 pos.
console.log(arr)
 


// forEach => retorna novo arr

const bananas = ['prata', 'nanica', 'maçã', 'terra']

const tipos = bananas.forEach((value, index) => {
    console.log(`index: ${index}, value: ${value}`)
})


// map => retorna novo arr

const tabuada = [1,2,3,4,5,6,7,8,9,10]
const multiplicaPor7 = tabuada.map(value => value * 7)

console.log(multiplicaPor7)

// flat

const idades = [10,17,[21,25,29,[30,38,[49,[68]]]]];
const novasIdades = idades.flat(4) // 4 == nivel profundidade

console.log(novasIdades)

// flatMap

const operacaoComProfundidade = tabuada.flatMap( value => [[[ value * 2 ]]] )
console.log(operacaoComProfundidade)

// keys, values and entries

const exemp01 = [1,3,5]
const allKeys = exemp01.keys()

console.log(allKeys.next())
console.log(allKeys.next())
console.log(allKeys.next())
console.log(allKeys.next()) // done: false == arr já finalizado

console.log('==================================')

const exemp02 = [2,4,6,9]

const allValues = exemp02.values()
console.log(allValues.next())
console.log(allValues.next())
console.log(allValues.next())
console.log(allValues.next())
console.log(allValues.next())

console.log('==================================')

const exemp03 = [4,6,5,7,9]
const valueAndKey = exemp03.entries()

console.log(valueAndKey.next())
console.log(valueAndKey.next())
console.log(valueAndKey.next())
console.log(valueAndKey.next())
console.log(valueAndKey.next())
console.log(valueAndKey.next())



// find     => retorna primeiro item aprovado condição
// findIndex => retorna apenas o index do item

const comidas = [
    {   nome: 'batata frita', sabor: 'salgado'    },
    {   nome: 'hamburguer',   sabor: 'salgado'    },
    {   nome: 'bolo',         sabor: 'doce',      },
    {   nome: 'coxinha',      sabor: 'salgada',   },
    {   nome: 'beijinho',     sabor: 'doce',      },
    {   nome: 'banana',       sabor: 'doce',      }
]

const encontrePrimeiroDoce = comidas.find( value => value.sabor === 'salgado')
console.log(encontrePrimeiroDoce) 

const encontreOIndex = comidas.findIndex( value => value.sabor === 'salgado')
console.log(encontreOIndex)

// filter =>  retorna tds elem. aprovados na condição em novo array

const todosOsDoces = comidas.filter(value =>  value.sabor === 'doce' )
console.log(todosOsDoces)

// indexOf => index do primeiro numero encontrado
// lastIndexOf => index do ultimo numero encontrado

const ramdomNumbers = [1,5,6,5,7, 32,11]
console.log(ramdomNumbers.indexOf(5))   // 1
console.log(ramdomNumbers.lastIndexOf(5))   // 4

// includes => verifica se há o elem. no arr, retornando true ou false

console.log(ramdomNumbers.includes(3)) // false
console.log(ramdomNumbers.includes(7)) // true

// some => retorna true ou false se algum elem. é aprovado na condição

const numeroPar = ramdomNumbers.some(value => value % 2 === 0)
console.log(numeroPar) // true

// sort => ordenar (altera o arr original)
const menoresPrimeiro = ramdomNumbers.sort((n1, n2) => n1 - n2)
console.log(menoresPrimeiro)

// reverse => inverte a sequencia / altera arr origem

const ultimoPrimeiro = ramdomNumbers.reverse()
console.log(ultimoPrimeiro)

// join => transforma arr em string, podendo alterar o carac. separador / ñ altera origem

const string = ramdomNumbers.join(' | ')
console.log(string)

// reduce

alunos = [{nome: 'Ana', nota:8}, {nome:'joao', nota:6},
          {nome: 'Edu', nota:7}]

const somaDoTotal = alunos.reduce((total, aluno) => total += aluno.nota, 0)
console.log(somaDoTotal / alunos.length) // retorna a media

const nomeAlunos = alunos.reduce((allNames, alunos) => allNames += alunos.nome + ' ', '' )
console.log(nomeAlunos) // retorna nome dos alunos 