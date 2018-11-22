function additionInPalindrome(number){
  let count = 0;
  let result = number;

  if(result === 0){
    return [0, 0];
  }
  
  result +=  parseInt((number + '').split('').reverse().join(''));
  count++;

  while(!isPalindrone(result)){
    result += parseInt((result + '').split('').reverse().join(''));
    count++;
  }

  return [count, result];
}

function isPalindrone(number){
  return (number + '').split("").reverse().join("") === number + '';
}
