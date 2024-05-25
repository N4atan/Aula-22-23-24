const minhaLista = ["Banana", "Lasanha", "Pizza"]
const outraLista = ["Macarrão", "Maça", "Banana"]


function verificarComidasIguais(lista1, lista2) {
    let temComidaIgual = false

    for (let comida of lista1) {
     
        if (lista2.includes(comida)) {
            temComidaIgual = true
            break
        }
    }

    if (temComidaIgual) {
        console.log("As duas listas têm comidas iguais.")
    } else {
        console.log("As listas não têm comidas iguais.")
    }
}


verificarComidasIguais(minhaLista, outraLista)
