/* You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.

Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.

You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.

Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation or template literals. */


const fuelBudget = 175;
const tripDistance = 1500;
const costOfFuelPerGal = 3;

const rate55 = 30;
const rate60 = 28;
const rate75 = 23;

//Calculations for 55mph 
const totalFuel55 = tripDistance/rate55;

console.log("Total gallons at 55mph for entire trip: " +totalFuel55 + " Gallons");

let inBudget = fuelBudget>=(totalFuel55*costOfFuelPerGal);
console.log("If travelling at 55mph will I be in budget: " +inBudget);

let timeOfTrip = tripDistance/55
console.log("This is how long the trip would take at 55mph: " +timeOfTrip +" hours");

//Calculations for 60mph
const totalFuel60 = tripDistance/rate60;

console.log("Total gallons at 60mph for entire trip: " +totalFuel60+ " Gallons");

inBudget = fuelBudget>=(totalFuel60*costOfFuelPerGal);
console.log("If travelling at 60mph will I be in budget: " +inBudget);

timeOfTrip = tripDistance/60
console.log("This is how long the trip would take at 60mph: " +timeOfTrip +" hours");

//Calculations for 75mph
const totalFuel75 = tripDistance/rate75;

console.log("Total gallons at 75mph for entire trip: " +totalFuel75+ " Gallons");

inBudget = fuelBudget>=(totalFuel75*costOfFuelPerGal);
console.log("If travelling at 75 mph will I be in budget: " +inBudget);

timeOfTrip = tripDistance/75
console.log("This is how long the trip would take at 75mph: " +timeOfTrip +" hours");

console.log("Travelling at 60mph would make the most sense as it is the fastest option without going over budget.");