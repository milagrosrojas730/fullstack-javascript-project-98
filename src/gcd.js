import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const gcd = (a, b) => {
    let num1 = a;
    let num2 = b;
    while (num2 !== 0) { 
        const temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
};

const play = () => {
    console.log('!Bienvenido a Brain Games!');
    const userName = greetUser();
    console.log(`¡Hola, ${userName}!`);
    console.log('Encuentra el máximo común divisor de los números dados.');
    
    const round = 3;

    for (let i = 0; i < round; i += 1) {
        const n1 = Math.floor(Math.random() * 100) + 1;
        const n2 = Math.floor(Math.random() * 100) + 1;

        const correctAnswer = gcd(n1, n2).toString();
        console.log(`Pregunta: ${n1} ${n2}`);
        const userAnswer = readlineSync.question('Tu respuesta: ');
        if (userAnswer === correctAnswer) {
            console.log('¡Correcto!');
        } else {
            console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
            console.log(`¡Intentémoslo de nuevo, ${userName}!`);
            return;
        }
    }
    console.log(`¡Felicidades, ${userName}!`);
};

export default play;
