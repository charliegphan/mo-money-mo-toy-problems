/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */
const comparator = (tuple1, tuple2) => {
  return tuple1[0] > tuple2[0];
}

var characterFrequency = function(string) {
  const charCount = {};

  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (!charCount[string[i]]) {
      charCount[string[i]] = 1;
    } else {
      charCount[string[i]]++;
    }
  }

  const tuples = [];

  for (let key in charCount) {
    tuples.push([key, charCount[key]]);
  }

  return tuples;
};

console.log(characterFrequency('miaaiaaippi'));