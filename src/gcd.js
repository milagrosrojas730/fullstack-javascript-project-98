import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const gcd = (a, b) => {
    while (b !== 0) { 
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const play = () => {
    console.log('!Bienvenido a Brain Games!');
    const userName = greetUser();
    console.log(`¡Hola, ${userName}!`);
    console.log('Encuentra el máximo común divisor de los números dados.');
    
    const round = 3;

    for (let i = 0; i < round; i++) {
        const n1 = Math.floor(Math.random() * 100) + 1;
        const n2 = Math.floor(Math.random() * 100) + 1;

        const correctAnswer = gcd(n1, n2).toString();
        console.log(`Pregunta: ${n1} ${n2}`);
        const userAnswer = readlineSync.question('Tu respuesta: ');
        if (userAnswer === correctAnswer) {
            console.log('¡Correcto!');
        } else {
            console.log(`'${userAnswer}' es una respuesta incorrecta. La respuesta correcta era '${correctAnswer}'.`);
            console.log(`¡Intentésmoslo de nuevo, ${userName}!`);
            return;
        }
    }
    console.log(`¡Felicidades, ${userName}!`);
};

export default play;