function reverseString(str) {
  let inverse = '';
  let array = []
  for (let letterId in str) {
    array.unshift(str[letterId]);
  }
  for (let letter in array) {
    inverse += array[letter];
  }
  return inverse;
}

reverseString("hello");
