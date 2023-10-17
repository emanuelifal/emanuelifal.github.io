function contadorVogais(string) {
    let stringsplitada = string.split('')
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'á', 'é', 'í', 'ó', 'ú', 'à', 'è', 'ì', 'ò', 'ù', 'ã', 'ẽ', 'ĩ', 'õ', 'ũ', 'â', 'ê', 'î', 'ô', 'û', 'Á', 'É', 'Í', 'Ó', 'Ú', 'À', 'È', 'Ì', 'Ò', 'Ù', 'Ã', 'Ẽ', 'Ĩ', 'Õ', 'Ũ', 'Â', 'Ê', 'Î', 'Ô', 'Û']
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
