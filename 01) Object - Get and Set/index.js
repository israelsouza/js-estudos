// Navegando pelo array 'users'

var users = [{nome: 'Joao', idade: 23},
             {nome: 'Vitoria', idade: 21},
             {nome: 'Eduardo', idade: 25}]

var navUsers = {
    posicao: 0,
    get atual(){
        return users[this.posicao]
    },
    set atual(posicao){
        this.posicao = posicao
    },proximo(){
        this.posicao++
    },
    anterior(){
        this.posicao--
    }
}

console.log(navUsers.atual)

navUsers.proximo()
console.log(navUsers.atual)

navUsers.proximo()
console.log(navUsers.atual)

navUsers.anterior()
console.log(navUsers.atual)

navUsers.atual = 0
console.log(navUsers.atual)

navUsers.atual = 2
console.log(navUsers.atual)