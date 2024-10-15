import readlineSync from 'readline-sync';

const greetUser = () => {
  const userName = readlineSync.question('¿Cuál es tu nombre? ');
  return userName;
};

export default greetUser;