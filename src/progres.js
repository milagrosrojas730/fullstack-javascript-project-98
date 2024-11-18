import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const generateProgression = (start, step, length) => {
    if (length <= 0) throw new Error('La longitud de la progresión debe ser mayor que 0');
    const progression = [];
    for (let i = 0; i < length; i+= 1) {
        progression.push(start + i * step);
    }
    return progression;
};

const play = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = greetUser();
    console.log(`¡Hola, ${userName}!`);
    console.log('¿Qué número falta en la progresión?');

    const round = 3;

    for (let i = 0; i < round; i += 1) {
        const start = Math.floor(Math.random() * 10);
        const step = Math.floor(Math.random() * 5) + 1;
        const length = 10;
        const progres = generateProgression(start, step, length);

        const hiddenIndex = Math.floor(Math.random() * length);
        const correctAnswer = progression[hiddenIndex].toString();
        progression[hiddenIndex] = '..';

        console.log(`Pregunta: ${progression.join(' ')}`);
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