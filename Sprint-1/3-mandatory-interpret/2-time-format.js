const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program.

// b) How many function calls are there?
// There are 1 function calls in this program. Line 12: console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It calculates the remaining seconds of the movie after dividing by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It subtracts the remaining seconds from movieLength and divides by 60 to calculate the total number of complete minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The result variable stores the movie length in hours, minutes and seconds (H:M:S).
// A better name could be formattedMovieLength.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
 // No, it does not work correctly for all values.
 // It works for non-negative whole numbers of seconds,but it does not add leading zeros.
 // For example, 3661 seconds displays as 1:1:1 instead of 1:01:01.
 // Decimal or negative values can also produce unexpected results.