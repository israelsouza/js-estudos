/* Fonte: Livro "ECMAScript 6 - Entre de cabeça no futuro do JavaScript" */

// Criando MAP 

var map = new Map()
function funcao() {}
var obj = {}

map.set("string", "eu sou uma string, olá!")
map.set(funcao, "Eu sou uma função, beleza?")
map.set(obj, 'Eu sou um objeto, suave na nave')

console.log(map) // Map (3)

// Resgatando valores
console.log(map.get("string") + map.get(obj))

// Tamanho
console.log(map.size)

// Verificar se possui tal chave
console.log(map.has(obj)) // true
console.log(map.has("strin")) // false

// Deletar tal chave
map.delete(funcao)
map.delete(cor) // Erro, prop COR não existe

console.log(map) // Map (2)

// Limpar mapa / Deixar vazio
map.clear()
console.log(map.size) // 0

// Possivel Iterar com laço FOR...OF
for (chave of map.entries()) { // PROPS + VALUES
    console.log(chave)
}

for (index of map.keys()) { // Props
    console.log(index)
}

for (value of map.values()) { // Value
    console.log(value)
}

/* ============================  WeakMap ============================   */

// Aceita HAS, GET, SET e DELETE (method)
// Prop só aceita obj
var weakMap = new WeakMap()
var element1 = window // aceita
var element2 = 44     // da erro

weakMap.set(element1, "Olá, eu sou o window")   // aceita
weakMap.set(element2, "Olá, eu sou o body")     // da erro

console.log(weakMap.get(element1))
console.log(weakMap.get(element2))

console.log(weakMap)
 

/* ============================  SET ============================   */

var musicas = new Set([
    "Enquanto é tempo", "Ainda é cedo", "Colibre", "Crônico"
]);

// musicas.add('Eduardo e Monica')
// musicas.delete('Colibre')
// musicas.clear()

console.log(`Há ${musicas.size} músicas, são elas:`)

for (const musica of musicas) {
    console.log(musica);
} 

/* ============================  Objeto literal ============================   */
// (declaração, ecmascript 6) 

var nome = 'Joao'
var sobreNome = 'Lima'
var ultimoNome = 'Santos'


var pessoa = {
    nome,
    sobreNome,
    ultimoNome,
    apresentar(){
        console.log(`Olá, me chamo ${this.nome} ${sobreNome} do ${ultimoNome}`)
    }
}

console.log(pessoa)
pessoa.apresentar()