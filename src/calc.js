import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const operation = ['+', '-', '*'];
const randomOperation = () => operation[Math.floor(Math.random() * operation.length)];
const calculate = (n1, n2, operation) => {
    switch (operation) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        default: 
            throw new Error(`Operación Desconocida: $(operation)`)
    }
};
const play = () => {
 //   const userName = greetUser();
 //   console.log('¿Cuál es el resultado de la expresión?');

    const round = 3;
    for (let i=0; i < round; i++) {
        const n1 = Math.floor(Math.random() * 100);
        const n2 = Math.floor(Math.random() * 100);
        const operation = randomOperation();

        const correctAnswer = calculate(n1, n2, operation).toString();
        
        console.log(`Pregunta: ${n1} ${operation} ${n2}`);
        const useAnswer = readlineSync.question('Tu respuesta: ');

        if (useAnswer === correctAnswer) {
            console.log('¡Correcto!');
        } else {
            console.log(`'${useAnswer}' es una respuesta incorrecta. La respuesta correcta era '${correctAnswer}'.`);
            console.log(`¡Intentémoslo de nuevo, ${userName}!`);
            return;
        }
    }
    console.log(`¡Felicidades, ${userName}!`);
};

export default play;