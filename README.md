# codewars

KATA 1 - FIND THE AVERAGE PROFIT

You work at a shop and your task is to calculate the average profit for the week based on the daily sales. The daily sales can be either a positive or negative integer representing the profit or loss for that day.

Write a function called findAverageProfit that accepts an array dailySales as its parameter. The dailySales array contains the daily sales for the week.

Your task is to calculate and return the average profit for the week.

Function Signature:
function findAverageProfit(dailySales) => number

Input:
- The parameter dailySales is an array of integers. Each integer represents the profit or loss for that day.

Output:
- The function should return a single number, which is the average profit for the week. The average should be rounded to two decimal places.

Example:
findAverageProfit([100, -50, 200, -30, 500, -20, -100]) => 100.00

Explanation: The sum of the daily sales is 600. The average profit for the week is 600 divided by 7, which is approximately 85.71. Rounded to two decimal places, the average profit is 85.71.

Constraints:
The length of the dailySales array will be between 1 and 1000.
Each element in the dailySales array will be an integer between -1000 and 1000 (inclusive).

Note:
- You can assume that the dailySales array will always contain at least one element.