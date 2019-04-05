function isPalindrone(integer){
  
  let number = integer + '';
  let right = number.length - 1;
  
  for(let left = 0; left < Math.ceil(number.length/2); left++){
    if(number[left] !== number[right])
      return false;
    right--;
  }

  return true;
}

