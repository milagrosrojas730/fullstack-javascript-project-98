import readlineSync from 'readline-sync';
import chalk from 'chalk';
import greetUser from './cli.js';

const isEven = (num) => num % 2 === 0;
const play = () => {
    console.log('¡Bienvenido a Brain Games!');
    const useName = greetUser();
    console.log(`¡Hola, ${useName}!`);
    console.log('Responde "yes" si el número es par, de lo contrario responde "no".');
const round = 3;
    for (let i=0; i < round; i+=1) {
        const randNum = Math.floor(Math.random() * 100);
        console.log(`Pregunta: ${randNum}`);
        const useAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();
        const correctAnswer = isEven(randNum) ? 'yes' : 'no';
        if (useAnswer !== 'yes' && useAnswer !== 'no') { 
            console.log(chalk.red(`'${useAnswer}' es una respuesta incorrecta. La respuesta correcta era '${correctAnswer}'.`));
            console.log(`¡Intentémoslo de nuevo, ${useName}!`);
            return;
        }
        if (useAnswer === correctAnswer){
            console.log(chalk.green('¡Correcto!'));
        } else {
            console.log(chalk.red(`'${useAnswer}' es una respuesta incorrecta. La respuesta correcta era '${correctAnswer}'.`));
            console.log(`¡Intentémoslo de nuevo, ${useName}!`);
            return;
        }
    }
    console.log(chalk.magenta(`¡Felicidades, ${useName}!`));
};

export default play;