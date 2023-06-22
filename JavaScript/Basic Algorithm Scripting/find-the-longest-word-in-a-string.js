function findLongestWordLength(str) {
  let longest = 0;
  const arr = str.split(" ");
  console.log(arr.length);
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > longest){
      longest = arr[i].length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");