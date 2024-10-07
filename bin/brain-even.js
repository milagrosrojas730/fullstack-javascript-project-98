#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const play = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = getUserName();
    console.log(`¡Hola, ${userName}!`);
    console.log('Responde "yes" si el número es par, de lo contrario responde "no".');
}