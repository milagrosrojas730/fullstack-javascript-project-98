import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const prime = (num) => {
  if (num <= 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const play = () => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = greetUser();
  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

  const round = 3;

  for (let i = 0; i < round; i += 1) {
    const num = Math.floor(Math.random() * 100);
    const correctAnswer = prime(num) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Pregunta: ${num}  .Tu respuesta: `).toLowerCase();
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`"${userAnswer}" no es una respuesta válida. Intenta nuevamente.`);
      return;
    }
    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${userAnswer}' es incorrecto. La respuesta correcta era '${correctAnswer}'`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }
  }
  console.log(`¡Felicidades, ${userName}!`);
};

export default play;
