const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Array = Object.keys(object1);
  let object2Array = Object.keys(object2);
  if (object1Array.length !== object2Array.length) {
    return false;
  } else {
    for (let key in object1) {
      if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};
module.exports = eqObjects;
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);

// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
