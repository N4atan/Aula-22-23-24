function manipularStrings(str1, str2) {
    
    let resultado = str1 + str2
    
    resultado = resultado.toUpperCase()
    
    resultado = resultado.replace(/A/g, '#').replace(/a/g, '#')
    
    return resultado
}


console.log(manipularStrings('banana', 'abacate'))
