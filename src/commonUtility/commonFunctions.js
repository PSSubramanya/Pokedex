export const capitaliseFirstLetter = str => {
  const firstWord = str.substring(0, 1);
  const restOfTheWord = str.substring(1);
  return firstWord.toUpperCase() + restOfTheWord;
};
