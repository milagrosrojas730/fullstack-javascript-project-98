#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const play = () => {
    console.log('¡Bienvenido a Brain Games!');
    const useName = getUserName();
    console.log(`¡Hola, ${useName}!`);
    console.log('Responde "yes" si el número es par, de lo contrario responde "no".');
const round = 3;
    for (let i=0; i < round; i++) {
        const randNum = Math.floor(Math.random() * 100);
        console.log(`Pregunta: ${randNum}`);
        const useAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();
        const correctAnswer = isEven(randNum) ? 'yes' : 'no';
        if (useAnswer !== 'yes' && useAnswer !== 'no') { 
            console.log(`'${useAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
            console.log(`¡Intentemoslo de nuevo, ${useName}!`);
            return;
        }
        if (useAnswer === correctAnswer){
            console.log('¡Correcto!');
        } else {
            console.log(`'${useAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
            console.log(`¡Intentemoslo de nuevo, ${useName}!`);
            return;
        }
    }
    console.log();
};

export default play();