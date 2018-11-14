# Problem Solving

- [x] **`Printer Errors`**

   In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

   The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

   Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

   You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

   The string has a length greater or equal to one and contains only letters from ato z.

   *Examples:*
   ```Javascript
   s="aaabbbbhaijjjm"
   error_printer(s) => "0/14"

   s="aaaxbbbbyyhwawiwjjjwwm"
   error_printer(s) => "8/22"
   ``` 

- [x] **`Ones and Zeros`**

   Given an array of one's and zero's convert the equivalent binary value to an integer.
   Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

   *Examples:*
   ```Javascript
   Testing: [0, 0, 0, 1] ==> 1
   Testing: [0, 0, 1, 0] ==> 2
   Testing: [0, 1, 0, 1] ==> 5
   Testing: [1, 0, 0, 1] ==> 9
   Testing: [0, 0, 1, 0] ==> 2
   Testing: [0, 1, 1, 0] ==> 6
   Testing: [1, 1, 1, 1] ==> 15
   Testing: [1, 0, 1, 1] ==> 11
   ```
   However, the arrays can have varying lengths, not just limited to 4.

- [x] **`Complementary DNA`**

   Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

   If you want to know more http://en.wikipedia.org/wiki/DNA

   In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

   More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

   ```Javascript
   DNAStrand ("ATTGC") # return "TAACG"

   DNAStrand ("GTAT") # return "CATA"
   ```

- [x] **`Equal Sides of An Array`**

   
   You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

   - For example:
   Let's say you are given the array {1,2,3,4,3,2,1}:
   Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

   Let's look at another one. 
   You are given the array {1,100,50,-51,1,1}: 
   Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

   - Last one:
   You are given the array {20,10,-80,10,10,15,35}
   At index 0 the left side is {}
   The right side is {10,-80,10,10,15,35}
   They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
   Index 0 is the place where the left side and right side are equal.

   Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

   - Input:
   An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

   - Output:
   The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

   - Note:
   If you are given an array with multiple answers, return the lowest correct index.
   An empty array should be treated like a 0 in this problem.

- [x] **`Don't Give me Five`**

   In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

   Examples:
   ```Javascript
   1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
   4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
   ```

   The result may contain fives. ;-)
   The start number will always be smaller than the end number. Both numbers can be also negative!

- [ ] **`Highest and Lowest`**

   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

   Example:
   ```Javascript
   highAndLow("1 2 3 4 5"); // return "5 1"
   highAndLow("1 2 -3 4 5"); // return "5 -3"
   highAndLow("1 9 3 4 -5"); // return "9 -5"
   ```

   Notes:

   All numbers are valid Int32, no need to validate them.
   There will always be at least one number in the input string.
   Output string must be two numbers separated by a single space, and highest number is first.

- [ ] **`Your order, please`**

   Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

   Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

   If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

   Examples:
   ```Javascript
   "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
   "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
   ""  -->  ""
   ```


















