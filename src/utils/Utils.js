export const getRandomSixNumber = () => {
  const numberArray = [];

  while (numberArray.length < 6) {
    const number = Math.floor(Math.random() * 45) + 1;

    const hadNumber = numberArray.filter((prev) => prev === number).length > 0;

    if (!hadNumber) {
      numberArray.push(number);
    }
  }

  return numberArray.sort((a, b) => a - b);
};
