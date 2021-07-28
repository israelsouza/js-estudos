// Promise => estrutura

const count = 3+1

let p = new Promise((resolve, rejected) => {
    let number = 1 + 1
    if (number === 2) {
        resolve('Sucesso, ocorreu tudo conforme planejado')
    } else {
        rejected('Erro encontrado')
    }
})

p
.then((message) => {
    console.log(message + ' :D')
})
.then(() => {
    console.log(count + ' é igual a 4, confere ai!')
})
.catch((err)=> {
    console.log('Ops, ' + err)
})


// Transformar function em promise

const thePet = 'cat'

function whoPetIs() {
    return new Promise((resolve, rejected) => {
        if (thePet == 'dog'|| thePet == 'fish' || thePet != 'cat') {
            rejected({
                petName: 'the name is wrong, try again',
                tip: 'the pet is fluffy'
            })
        } else {
            resolve({
                petName: 'Yeah, catlovers win!!'
            })
        }
    })
}

whoPetIs()
  .then((message) => {
    console.log(message)
  })
  .then(() => {
      console.log('I knew you will find the answer')
  })
  .catch((err) => {
      console.log('Ops', err)
  })


// Promise all

const videoOne = new Promise((resolve) => {
    resolve('The video one was upload')
})

const videoTwo = new Promise((resolve) => {
    resolve('The video two was upload')
})

const videoThree = new Promise((resolve) => {
    resolve('The video three was upload')
})

Promise.all([videoOne, videoTwo, videoThree])
  .then((msg) => {console.log(msg)})
  .catch(() => { console.log('Ops, erro encontrado!') })