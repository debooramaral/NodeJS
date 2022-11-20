//perguntas ao final de cada dia para olharmos
const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?",
]

//função que faz perguntas   
const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " > ")
}

//começar o aplicativo chamando o ask
ask()

//pego os dados em "data" transformo em string e uso trim para remover qualquer espaço no começo ou no fim; 
// a função => sera executada toda vez que tiver entrada de usuario
const answers = []
process.stdin.on("data", (data) => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    } else{
        console.log(answers)
        process.exit()
    }
});
// preciso de um array de respostas 'const answers = []' e depois utilizar apenas a conversao para string e remover espaços 
// e chamar a proxima pergunta com if/else e depois ve-las com console.log, mas poderia ser o prcess.stdout tambem 

//o processo pode ouvir eventos

process.on('exit', () => {
    console.log(`
        Bacana Débora
        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu e você poderia melhorar foi:
        ${answers[1]}

        Você ajudou ${answers[3]} pessoas hoje!

        Volte amanhã para novas reflexões
    `)
})
