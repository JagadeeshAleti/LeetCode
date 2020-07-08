/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [9,9]
Output: [1,0,0]
Explanation: The array represents the integer 4321.
*/

const plusOne = digits=>(BigInt(digits.join(""))+BigInt(1)).toString().split("");

const result = plusOne([9, 9])
console.log(result)