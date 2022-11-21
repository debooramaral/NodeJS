//setTimerout vai rodar um função depois de x milisegundos
// função que vai rodar em 3 segundos e função que termina
const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
//pede dois parametros, o finished esta ali como referencia e não como execução, se fosse teria ()
// ao executar acontece o callback, onde após 3 segundos a função é executada  
console.log('mostrar')
// registra em memoria as linhas 3 e 4; guarda a função finished para ser chamada de volta após 3 segundos; e a linha 9 vai rodar imediatamente, após guardar a função finished (assincronismo)
 