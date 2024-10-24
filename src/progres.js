import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const generateProgre = (start, step, length) => {
    const progres = [];
    for (let i = 0; i < length; i++) {
        progres.push(start + i * step);
    }
    return progres;
};

const play = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = greetUser();
    console.log(`¡Hola, ${userName}!`);
    console.log('¿Qué número falta en la progresión?');

    const round = 3;

    for (let i = 0; i < round; i++) {
        const start = Math.floor(Math.random() * 10);
        const step = Math.floor(Math.random() * 5) + 1;
        const length = 10;
        const progres = generateProgre(start, step, length);
        const hiddenIndex = Math.floor(Math.random() * length);
        const correctAnswer = progres[hiddenIndex].toString();
        progres[hiddenIndex] = '..';

        console.log(`Pregunta: ${progres.join(' ')}`);
        const userAnswer = readlineSync.question('Tu respuesta: ');

        if (userAnswer === correctAnswer) {
            console.log('¡Correcto!');
        } else {
            console.log(`'${userAnswer}' es una respuesta incorrecta. La respuesta correcta es '${correctAnswer}'.`);
            console.log(`¡Intentémoslo de nuevo, ${userName}!`);
            return;
        }
    }
    console.log(`¡Felicidades, ${userName}!`);
};

export default play;