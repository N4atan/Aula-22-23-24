function calcularAnoNascimento(pessoa) {    
    const anoAtual = 2024

    const anoNascimento = anoAtual - pessoa.idade

    console.log(`${pessoa.nome} tem ${pessoa.idade} anos e nasceu em ${anoNascimento}.`)
}


const pessoaExemplo = {
    nome: "Natan"   ,
    idade: 17
}


calcularAnoNascimento(pessoaExemplo)
