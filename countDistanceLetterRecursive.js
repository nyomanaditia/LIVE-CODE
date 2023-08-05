function countDistanceLetterRecursive(sentence, letter) {

  if(sentence[0] == letter) {
    return 1;
  }
  return 1 + countDistanceLetterRecursive(sentence.slice(1), letter);

}
//the quick brown fox, 'o' => the quick bro (totalnya 13)
console.log(countDistanceLetterRecursive("12104123", "1")); // 1
console.log(countDistanceLetterRecursive("the quick brown fox", "o")); // 13
console.log(countDistanceLetterRecursive("hahaha", "a")); // 2

// wkwkw