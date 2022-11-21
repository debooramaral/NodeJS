//clearInterval vai cancelar um setInterval registrado
const timeOut = 1000
const checking = () => console.log('checking !')

let interval = setInterval(checking, timeOut)
//clearInterval(interval)
//registra o intervalo no 'let', o 'setInterval' vai responder para a variavel em let, um intervalo onde guarda ali.. dai eu uso o clearInterval para cancelar o interval 
//não fará nada pois imediatamente ja esta cancelando

//imaginamos uma função que ira cancelar o intervalo
setTimeout(() => clearInterval(interval), 3000 )
// no terminal apareceu apenas dois checking pq eles começaram juntos, onde o setinterval começou a contar 1 segundo e depois imprimiu, 2 segundos e depois imprimiu 3 segundos cancelou juntos