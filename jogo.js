const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

rl.prompt();

rl.on('line', (resposta) => {
    const numeroTentativa = parseInt(resposta);

    if (numeroTentativa === numeroAleatorio) {
        console.log('Muito Bem! Você escolheu o número correto:', numeroAleatorio);
    } else {
        console.log('Número errado! Tente novamente.');
    }
});
