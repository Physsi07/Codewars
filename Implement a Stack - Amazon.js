class Stack{
   let index = 0;
   let stack = {};

   this.push = value => {
      stack[index] = value;
      index++;
      console.log(`${value} was pushed`)
   }

   this.pop = () => {
      this.isEmpty() ? console.log('Stack is empty') :
      console.log(`${stack[inxex - 1]} was pop`)
      delete stack[index - 1];
      index--;
   }

   this.max = () => {
      let maxVal = 0;
      for(let number in stack){
         if(stack[number] > maxVal) maxVal = stack[number];
      }
      console.log(`${maxVal} is the maximun value in the stack`);
   }

   this.isEmpty = () => (index === 0) ? true : false;
}
