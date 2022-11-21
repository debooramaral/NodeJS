//setInterval vai rodar uma função N vezes
// depois de X milisegundos
const timeOut = 1000
const checking = () => console.log('checking !')

setInterval(checking, timeOut)
//imagine um fiscal (a função e milisegundos, espeficicamente), onde o setInterval vai registrar um fiscal que vai passar por um setor da loja conferindo os produtos a cada segundo
//no terminal executa sem parar, ou até apertar crtl + c
