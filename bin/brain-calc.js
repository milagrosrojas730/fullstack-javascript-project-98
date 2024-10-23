#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const operations = ['+', '-', '*'];
const randomOperation = () => operations[Math.floor(Math.random() * operations.length)];
const calculate = (n1, n2, operator) => {
    switch (operator) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        default: 
            throw new Error(`Operación Desconocida: $(operator)`);
    }
};
const play = () => {
const userName = greetUser();
console.log('¿Cuál es el resultado de la expresión?');

    const round = 3;
    for (let i=0; i < round; i++) {
        const n1 = Math.floor(Math.random() * 100);
        const n2 = Math.floor(Math.random() * 100);
        const operator = randomOperation();

        const correctAnswer = calculate(n1, n2, operator).toString();
        
        console.log(`Pregunta: ${n1} ${operator} ${n2}`);
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

 play();