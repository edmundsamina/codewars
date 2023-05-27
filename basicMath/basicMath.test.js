//👉 Write your tests below here:
import { weeklyAverageProfit, leastSalesDay } from "./basicMathAnswers.js"
import { test, expect } from "@jest/globals"

let ones = Math.ceil(Math.random()*5)
let negOnes = Math.ceil(Math.random()*5)*(-1)
let tens = Math.ceil(Math.random()*10)
let negTens = Math.ceil(Math.random()*10)*(-1)
let hundreds = Math.ceil(Math.random()*100)
let negHundreds = Math.ceil(Math.random()*100)*(-1)
let thousands = Math.ceil(Math.random()*10000)
let negThousands = Math.ceil(Math.random()*10000)*(-1)


//TEST FOR KATA ONE 
test.each([
  [ones, ones, thousands, hundreds, hundreds, hundreds, hundreds],
  [negOnes, ones, negTens, negThousands, hundreds, negTens, hundreds],
])('Calculates the correct average', (Mon, Tues, Wed, Thurs, Fri, Sat, Sun) => {
    const actual = weeklyAverageProfit(Mon, Tues, Wed, Thurs, Fri, Sat, Sun);
    const expected = (Mon + Tues + Wed + Thurs + Fri + Sat + Sun)/7;
    expect(actual).toBe(expected);
});

//TEST FOR KATA TWO

test.each([
    //This test has to be hardcoded:
    [6859, 8374, -1823, 9470, -85897, 5149, 7907, "Friday"],
    [485859, 8374, 1823, 570, 85897, -5149, 7907, "Saturday"],
    [3100, 5500, 6705, 657, 85, -129, -8907, "Sunday"],
    [3100, -5500, 6705, 657, -85, -129, 907, "Tuesday"],
    [-100, 500, 12305, 657, 2385, -29, 547, "Monday"],
    [34, 6934, 3946734, -2372467, 3543465, -234, 1234, "Thursday"],
    [1, -5, -305, 657, 2385, -293, 547, "Wednesday"],
  ])('Finds the day with the lowest number and brings back the name of the day as a string', (Mon, Tues, Wed, Thurs, Fri, Sat, Sun, expected) => {
      const actual = leastSalesDay(Mon, Tues, Wed, Thurs, Fri, Sat, Sun);
      expect(actual).toBe(expected);
  });

  

//edge cases with days with the same sales => if there are multiple lowest values, always
//pick the first 