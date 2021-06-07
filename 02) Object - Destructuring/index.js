var livros = {
    musica: 'Hip Hop',
    mPreferida: 'Instrumental',
    informativos: {
        comoLer: 'M. Adler',
        comoPensar: {
            arteGuerra: 'Sun Tzu',
            arteLogica: 'Trivium',
        },
        comoFortalecer: 'Meu Sistema',
    },
}

// DESTRUCTURING => copiar um valor dentro OBJ e armazenar em uma VAR
// var { prop } = obj

var { musica } = livros

console.log(musica) // 'Hip Hop';

/* ================================ */

// copiar valor OBJ e armazenar em VAR com outro nome
// var { prop: nameVAR } = Obj

var { mPreferida: estiloPreferido, } = livros

console.log(estiloPreferido) // 'Instrumental';

/* ================================ */

// copiaar valor em OBJ ANINHADO

var { informativos: {comoPensar: { arteLogica: educacao }} } = livros
console.log(educacao) // 'Trivium';

/* ================================ */

// criar valor Default caso a prop inserida não exista

var { esporteFav = 'value undefined' } = livros
var {seriesAssistidas = 23} = livros
var { informativos: {comoLer = 'com Inteligencia'}} = livros

console.log(esporteFav)         // Propriedade não existente, logo valor default aceito
console.log(seriesAssistidas)   // valor default aceito
console.log(comoLer)            // valor default recusado, pois prop já existente

/* ================================ */

// aplicar destruction de OBJ em uma FUNCTION ( + valor default )

var usuarioValores = {
    nome: 'Joao',
    idade: 21,
    sexo: 'M',
    fuma: false,
}

valoresOBJ(usuarioValores)

function valoresOBJ({ nome, idade, pais = 'Japan'}) {
    console.log(nome); console.log(idade); console.log(pais);
}

/* ================================ */

// metodo retorna prop OBJ em formato ARRAY // e values OBJ em formato ARRAY

var usuarioValores = {
    nome: 'Joao',
    idade: 21,
    sexo: 'M',
    fuma: false,
}

 var livros = {
     musica: 'Hip Hop',
     mPreferida: 'Instrumental',
     informativos: {
         comoLer: 'M. Adler',
         comoPensar: {
             arteGuerra: 'Sun Tzu',
             arteLogica: 'Trivium',
         },
         comoFortalecer: 'Meu Sistema',
     },
 }

var con = console.log

con(Object.keys(livros))
con(Object.values(livros))

con(Object.keys(usuarioValores))
con(Object.values(usuarioValores))

/* ================================ */

// pegar prop e valor dentro OBJ com loop FOR

con = console.log

var props = Object.keys(usuarioValores); con(props) // props formato array

for (i = 0; i < props.length ; i++ ) {
    con(props[i], usuarioValores[props[i]]) // props e values de OBJ
}

for (var c of props) { con(usuarioValores[c]) } // values

for (c in usuarioValores) { 
    if(usuarioValores.hasOwnProperty(c)){
        con(c, usuarioValores[c])
    } } // props e values

/* ================================ */