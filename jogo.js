
const readline = require('readline');

const MINIMUM = 1;
const MAXIMUM = 10;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNumber = Math.floor(Math.random() * (MAXIMUM - MINIMUM + 1)) + MINIMUM;

let attempts = 0;

console.log('Jogo de adivinhação!');
console.log(`Tente adivinhar o número secreto de ${MINIMUM} a ${MAXIMUM}.`);

rl.setPrompt('Digite seu palpite: ');
rl.prompt();

rl.on('line', (answer) => {
    const guess = Number(answer.trim());

    if (!Number.isInteger(guess) || guess < MINIMUM || guess > MAXIMUM) {
        console.log(`Entrada inválida! Digite um número inteiro de ${MINIMUM} a ${MAXIMUM}.`);
        rl.prompt();
    } else {
        attempts++;

        if (guess === randomNumber) {
            console.log('Muito bem! Você acertou o número:', randomNumber);
            console.log('Número de tentativas:', attempts);
            rl.close();
        } else {
            console.log('Número errado! Tente novamente.');

            if (guess < randomNumber) {
                console.log('Dica: o número secreto é maior.');
            } else {
                console.log('Dica: o número secreto é menor.');
            }

            rl.prompt();
        }
    }
});
