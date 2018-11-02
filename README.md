# Codewars

- Problems that I have work on and that I have solve 

1. **`Printer Errors`**
===

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
===

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

