let idade = 20
let habilitacao = TextTrackCueList

if (idade >= 18 && habilitacao) {
    console.log("Pode dirigir.")
} else if (idade < 18 && habilitacao) {
    console.log("ONDE CONSEGUIU ESSA HABILITAÇÃO?")
} else if (idade < 18 && !habilitacao) {
    console.log("Não pode dirigir.")
}
