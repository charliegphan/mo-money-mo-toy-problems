/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  const anagrams = [];
  
  const generateAnagram = (anagram, leftoverStr) => {
    if (leftoverStr.length === 0) {
      anagrams.push(anagram);
      return;
    }

    for (let i = 0; i < leftoverStr.length; i++) {
      let newAnagram = anagram + leftoverStr[i];
      generateAnagram(newAnagram, 
        leftoverStr.slice(0, i) + leftoverStr.slice(i + 1)
      );
    }
  }
  
  generateAnagram('', string);
  return anagrams
};