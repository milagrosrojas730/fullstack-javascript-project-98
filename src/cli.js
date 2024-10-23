import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = readlineSync.question('¿Cual es tu nombre?');
  console.log(`¡Hola, ${userName}!`);
  return userName;
};

export default greetUser;