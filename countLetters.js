const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(string) {
  const letterCount = {};
  const lowercaseString = string.toLowerCase();
  for (let letter of lowercaseString) {
    if (letter !== " ") {
      if (letterCount[letter] === undefined) {
        letterCount[letter] = 1;
      } else {
        letterCount[letter]++;
      }
    }
  }
  return letterCount;
};