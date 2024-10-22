import readlineSync from 'readline-sync';

const greetUser = () => {
  const userName = readlineSync.question(' ¿Cual es tu nombre? ');
  return userName;
};

export default greetUser;