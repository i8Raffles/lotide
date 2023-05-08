const without = function(source, itemsToRemove) {
  for (let i = 0; i < itemsToRemove.length; i++) {
    for(let j = 0; j < source.length; j++) {
      if (source[j] === itemsToRemove[i]) {
        source.splice(j, 1);
      }
    }
  }
  return source;
}
// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
module.exports = without;