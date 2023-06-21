function factorialize(num) {
  let factorial = 1;
  if(num < 0) {
    return 'num has to be equal or greater than 0'
  }else if(num == 0){
    return 1;
  }else if(num > 0){
    for(let i = num; i > 1; i--){
      factorial *= i;
    }
    return factorial;
  }
}

factorialize(5);