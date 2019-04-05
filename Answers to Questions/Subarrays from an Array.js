const subArray = (arr) => {

   let sortedArr = arr.sort((a, b) => a - b);
   let subArr = [];
   let finalArr = [];

   for(let element = 0; element < sortedArr.length; element++) {
      if(sortedArr[element] + 1 === sortedArr[element + 1]) {
         subArr.push(sortedArr[element]);
      } else{
         subArr.push(sortedArr[element]);
         finalArr.push([subArr]);
         subArr = [];
      }
   }

   return finalArr;
}
