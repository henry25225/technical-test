# tech test

## Overview

As discussed, here is a programming assignment for you to complete in your own time.

Here are the requirements:

- You must attempt and complete this assignment on your own
- All answers must be implemented in javascript or typescript
- The answers are to be submitted as a pull request to the master branch of this repository
- Follow the instructions about how to name and export the main function for each problem
- No `node_modules/` folder should be included in the repository. Any dependencies should be specified in a `package.json` file, such that I can install by running `npm install` locally
- Bonus points for typescript, unit tests and tsconfig specifying es2019 or similar
- If you provide tests, I should be able to run them using `npm test`

I look forward to seeing your submission.

Thanks, Elliott

### 1. Equal Sides of an Array

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}: Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}: Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.


**Question**: Write a function to implement the problem above.

**Note**: Your npm index file should export a function named `findEvenIndex(arr)`, where `arr` is an array of numbers (this is important for our testing after receiving your code).


### 2. Dumb Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

**Examples**

```javascript
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
```

**Note**: Your npm index file should export a function named `encode(str)` (this is important for our testing after receiving your code).

### 3. IP Address validation

**Question**: Write a function that will identify valid IPv4 addresses in dot-decimal format. Input to the function is guaranteed to be a single string. You should return true if valid and false if invalid.

**Note**: Your npm index file should export a function named `validateIP(address)`, where `address` is a String (this is important for our testing after receiving your code).

*Tip*: IP addresses are 4 bytes long. Remember that each byte can only store the decimal values of 0-255.

**Examples**:

```javascript
 validateIP('1.2.3.4'); // => true
 validateIP('123.45.67.89'); // => true
 validateIP('1.2.3'); // => false
 validateIP('1.2.3.4.5'); // => false
 validateIP('123.456.78.90'); // => false
 validateIP('123.045.067.089'); // => false
```

### 4. Binary Addition

**Question**: Write a function `add` which takes two binary numbers as strings and returns their sum as a string.

**Note**:

- You are not allowed to convert binary to decimal & vice versa.
- The sum should contain No leading zeroes.
- Your npm index file should export a function named `add(a, b)`, where `a` and `b` are both Strings (this is important for our testing after receiving your code).

**Examples**:

```javascript
add('111', '10'); // => '1001'
add('1101', '101'); // => '10010'
add('1101', '10111'); // => '100100'
```

### (OPTIONAL) Bonus Challenge 1: Roman Numerals Encoder

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

**Question**: Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

**Note**: Your npm index file should export a function named `romanNumeral(n)`, where `n` is a number (this is important for our testing after receiving your code).

**Example**:

```javascript
romanNumeral(1000); // should return 'M'
```

Help:

```
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
```

Remember that there can't be more than 3 identical symbols in a row.

### (OPTIONAL) Bonus Challenge 2: nth smallest hamming number

A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

**Question**: Write a function that computes the nth smallest Hamming number.

**Note**: Your npm index file should export a function named `hamming(n)`, where `n` is a number (this is important for our testing after receiving your code).

**Hint**: Be sure to check the time taken and number of call stacks used on larger factorials :)  You should be able to compute the first 5000 hamming numbers without maxing out a call stack or running timing out your test framework.

Specifically:

The first smallest Hamming number is `1 = 2^0 . 3^0 . 5^0`
The second smallest Hamming number is `2 = 2^1 . 3^0 . 5^0`
The third smallest Hamming number is `3 = 2^0 . 3^1 . 5^0`
The fourth smallest Hamming number is `4 = 2^2 . 3^0 . 5^0`
The fifth smallest Hamming number is `5 = 2^0 . 3^0 . 5^1`

The 20 smallest Hamming numbers are:

```javascript
hamming(1); // => 1
hamming(2); // => 2
hamming(3); // => 3
hamming(4); // => 4
hamming(5); // => 5
hamming(6); // => 6
hamming(7); // => 8
hamming(8); // => 9
hamming(9); // => 10
hamming(10); // => 12
hamming(11); // => 15
hamming(12); // => 16
hamming(13); // => 18
hamming(14); // => 20
hamming(15); // => 24
hamming(16); // => 25
hamming(17); // => 27
hamming(18); // => 30
hamming(19); // => 32
```
