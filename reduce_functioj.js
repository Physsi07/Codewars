let arr = [3, 4, 9, 1, 4];
const addAll = () => arr.reduce((total, number) => total + number , 0)
addAll(arr) !== 21 ? console.log("Failed: ❌") : console.log("Passed: ✅");




/*
  QUESTION: Giving an array of numbers, return the the addition of all of them
  SOLUTIONS:
  1. Using 'For of'
     -------------
     const addAll = () => {
        let total = 0;
        for(number of arr){
           total += number;
        }
        return total;
     }

  2. Using 'forEach'
     --------------
     const addAll = () => {
        let total = 0;
        input.forEach(number => total += number)
        return total;
     }

  3. Using 'Reduce'
     -------------
     const addAll = () => arr.reduce((total, number) => total + number , 0)
*/


/*
  TESTING:
  -------
  let input = [
    [3, 4, 9, 1, 4],
    [50, 71, 85, 30, 40],
    [2, 64, 90, 85, 35],
    [5, 75, 25, 80, 1],
    [63, 59, 17, 27, 88]
  ]

  for(arr of input){
    addAll(arr) !== 21 ? console.log("Failed: ❌") : console.log("Passed: ✅");
    addAll(arr) !== 276 ? console.log("Failed: ❌") : console.log("Passed: ✅");
    addAll(arr) !== 276 ? console.log("Failed: ❌") : console.log("Passed: ✅");
    addAll(arr) !== 186 ? console.log("Failed: ❌") : console.log("Passed: ✅");
    addAll(arr) !== 254 ? console.log("Failed: ❌") : console.log("Passed: ✅");
  }
*/
