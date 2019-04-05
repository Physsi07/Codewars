function findEvenIndex(arr){
  //Code goes here!
  let leftSum = 0, rightSum = 0;
  let pointerLeft = 0, pointerRight = arr.length - 1;

  for(let pointer = 0; pointer < arr.length; pointer++){
  
    while(pointerRight != pointer){
      rightSum += arr[pointerRight];
      pointerRight--;
    }
    pointerRight = arr.length - 1;;
    
    while(pointerLeft != pointer){
      leftSum += arr[pointerLeft];
      pointerLeft++;
    }
    pointerLeft = 0;
    
    if(leftSum === rightSum) return pointer;
    leftSum = 0, rightSum = 0;
  }

  return -1;
}
