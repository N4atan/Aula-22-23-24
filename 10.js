let ask = require('readline-sync')

let soma = 0
let quantia = 3

for(let i = 0; i < quantia; i++){
    let numero = Number(ask.question('DIga um numero: '))
    soma+= numero
}

let media = soma / quantia
console.log(`A media dos numeros digitados e: ${media}`)