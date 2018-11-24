function answer(lines){
  let count = 0;
  let result = lines;

  result += parseInt((lines + '').split('').reverse().join(''));
  count++;
    
  while(!noDuplicates(result)){
    result += parseInt((result + '').split('').reverse().join(''));
    count++;
  }

  console.log([count, result]);
}

function noDuplicates(input){
  let number = input+'';
  let obj = [];
        
  for(let i = 0; i < number.length; i++){
    if(obj.includes(number[i])){
      return false;
    }
    obj.push(number[i]);
  }

  return true;
}
