# Codewars

### Problems that I have worked on and that I have solved or if you don't see the answer in the repo is because I am in the process of solving it. 


1. **`Printer Errors`**

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

2. **`Ones and Zeros`**

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

3. **`Complementary DNA`**

   Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

   If you want to know more http://en.wikipedia.org/wiki/DNA

   In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

   More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

   ```Javascript
   DNAStrand ("ATTGC") # return "TAACG"

   DNAStrand ("GTAT") # return "CATA"
   ```

4. **`Equal Sides of An Array`**

   
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










