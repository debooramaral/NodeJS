//na correção ele chama a function de getFlagValue e o nome do arquivo de 'flags'

function getFlags(flag) {
    const index = process.argv.indexOf(flag) + 1 //procura o número da flag ali dentro, mas colocando o resultado com 'const index' dizendo qual é a posição do array no argv da flag +1 que é a proxima ocorrencia, vai buscando dentro da lista as posições
    return process.argv[index] //pega o resultado desta forma
}
module.exports = getFlags;
//exportando a function

