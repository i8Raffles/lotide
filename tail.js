const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};

// const input = ["Hello", "Lighthouse", "Labs"];
// const expected = ["Lighthouse", "Labs"];
// const result = tail(input);
// for (let i = 0; i < result.length; i++) {
//   assertEqual(result[i], expected[i]);
// }

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

module.exports = tail;