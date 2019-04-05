function highAndLow(numbers){
  
  let array = numbers.split(' ');
  let highest = array[0];
  let lowest = array[0];

  array.forEach(el => {
    if(parseInt(highest) < parseInt(el)) highest = el;
    if(parseInt(lowest) > parseInt(el)) lowest = el;
  })
  
  return highest + " " + lowest;
}
