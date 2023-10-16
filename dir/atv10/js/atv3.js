function contadorVogais(string) {
    let stringsplitada = string.split('')
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let contador = 0
    stringsplitada.forEach(letra => {
        vogais.forEach(vogal => {
            if (letra == vogal){
                contador++
            }
        });
    });
    return contador + ' vogais'
}


function main(){
    let conteudo = document.querySelector('input').value
    document.querySelector('label').innerHTML = contadorVogais(conteudo)
}
