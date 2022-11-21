//clearTimeout vai cancelar um timeOut
const timeOut = 3000
const finished = () => console.log('done!')

//guardar o timerout; recebe a resposta do setTimerout e guarda em Timer
let timer = setTimeout(finished, timeOut)
//posso usar em qualquer momento da aplicação
clearTimeout(timer)
//no terminal nem aparece pois é bem rapido isso, leu e ja guardou e em seguida cancelou

 