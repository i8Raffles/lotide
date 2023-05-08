const flatten = function(array) {
  let flatArray = [];
  for (let entry of array) {
    if (Array.isArray(entry)) {
      for (item of entry) {
        flatArray.push(item);
      }
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};
module.exports = flatten;