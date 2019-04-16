const binaryArrayToNumber = arr => {
  // your code
  let result = 0;
  let x = 0;
  for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i] === 1) result += Math.pow(2, x);
    x++;
  }
  
  return result;
};
