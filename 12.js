let pessoa1 = {
    nome: "Adrian",
    idade: 21
};

let pessoa2 = {
    nome: "Natan",
    idade: 17
};

if (pessoa1.idade > pessoa2.idade) {
    console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}`)
} else if (pessoa2.idade > pessoa1.idade) {
    console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa1.nome}`)
} else {
    console.log("Ambos têm a mesma idade.")
}
