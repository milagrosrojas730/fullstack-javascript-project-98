import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const operations = ['+', '-', '*'];
const randomOperation = () => operations[Math.floor(Math.random() * operations.length)];
const calculate = (n1, n2, operator) => {
    switch (operator) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        default: 
            throw new Error(`Operación Desconocida: $(operation)`);
    }
};
const play = () => {
const userName = greetUser();
console.log('¿Cuál es el resultado de la expresión?');

    const round = 3;
    for (let i=0; i < round; i++) {
       
    }
    console.log(`¡Felicidades, ${userName}!`);
};

export default play;