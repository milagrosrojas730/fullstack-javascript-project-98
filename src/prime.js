import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const prime = (num) => num > 1 && ![... Array(num).keys()].slice(2).some(i => num % i === 0);

const play = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = greetUser();
    console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

    for (let i = 0; i < 3; i+=1) {
        const num = Math.floor(Math.random() * 100) + 1;
        const correctAnswer = prime(num) ? 'yes' : 'no';
        const userAnswer = readlineSync.question(`Pregunta: ${num}  .Tu respuesta: `).toLowerCase();
    if (userAnswer === correctAnswer) console.log('¡Correcto!');
    else return console.log(`'${userAnswer}' es incorrecto. La respuesta correcta era '${correctAnswer}'. ¡Intentémoslo de nuevo, ${userName}!`);
    }
  console.log(`¡Felicidades, ${userName}!`);
}

export default play;