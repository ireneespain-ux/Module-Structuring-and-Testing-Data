const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

 // 2. penceString.substring(0, penceString.length - 1)
 // Removes the last character "p", leaving "399".

 // 3. penceStringWithoutTrailingP.padStart(3, "0")
 // Makes sure the string has at least 3 characters by adding zeros at the beginning if needed.
 // "399" is already 3 characters long, so it stays the same.

 // 4. paddedPenceNumberString.substring( 0, paddedPenceNumberString.length - 2)
 // Extracts everything except the last two digits to get the pounds part: "3".

 // 5. paddedPenceNumberString.substring(paddedPenceNumberString.length - 2)
 // Extracts the last two digits to get the pence part: "99".

 // 6. .padEnd(2, "0")
 // Makes sure the pence part has at least 2 characters by adding zeros at the end if needed.
 // "99" already has 2 characters, so it stays the same.

 // 7. console.log(`£${pounds}.${pence}`)
 // Combines pounds and pence using a template literal and prints £3.99.
  
