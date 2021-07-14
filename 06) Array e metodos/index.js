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



// forEach

const bananas = ['prata', 'nanica', 'maçã', 'terra']

const tipos = bananas.forEach((index, value) => {
    console.log(`index: ${index}, value: ${value}`)
})