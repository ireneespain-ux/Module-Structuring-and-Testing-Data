let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls in this file. 
// Line 4: carPrice.replaceAll(",", ""), and replaceAll(",", "")
// Line 5: priceAfterOneYear.replaceAll("," "")
// Line 8: (priceDifference / carPrice) * 100
// Line 10: console.log(`The percentage change is ${percentageChange}`)
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The line has error is line 5.The error is missing one comma in the replaceAll method.
// To fix this, we can add a missing comma, it shoule be: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// c) Identify all the lines that are variable reassignment statements
// Line 4 and 5
// d) Identify all the lines that are variable declarations
// Line 1, 2, 7, 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression will remove all the commas from the string value of carPrice and convert it to a number.
// This can be useful when we want to perform mathermatic operations of the carPrice.