import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const operations = ['+', '-', '*'];

const play = () => {
const userName = greetUser();
console.log('¿Cuál es el resultado de la expresión?');

    const round = 3;
    for (let i = 0; i < round; i++) {
       
    }
    console.log(`¡Felicidades, ${userName}!`);
};

export default play;