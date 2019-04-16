function amountOfSets(N){

  let count = 0;
  let addition = 0;
  let j = 1;

  for(let i = 1; i <= N; i++){
    if(addition === N) {
      count++;
      addition = 0;
      j++;
      i = j;
    }

    if(addition > N){
      addition = 0;
      j++;
      i = j;
    }

    addition += i;

  }

  return count;
}
