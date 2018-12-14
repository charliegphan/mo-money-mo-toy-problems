/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  const charCount = {};

  for (let i = 0; i < string.length; i++) {
    if (!charCount[string[i]]) {
      charCount[string[i]] = 1;
    } else {
      charCount[string[i]]++;
    }
  }
  
  for (let i = 0; i < string.length; i++) {
    if (charCount[string[i]] === 1) {
      return string[i];
    }
  }
};
