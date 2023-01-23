// Exercise: Level 1

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript";

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 2));
console.log(challenge.substring(0, 2));

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3, 21));

// Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));

// Split the string into an array using split() method
console.log(challenge.split());

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let socialMedia = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(socialMedia.split(", "));

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"));

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(5));

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(5));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence =
  "You cannot end a sentence with because because because is a conjunction";

console.log(sentence.indexOf("because"));

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf("because"));

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search("because"));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim(" "));

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("Script"));

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match("a"));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const firstPart = "30 Days of ";
const secondPart = "JavaScript";

console.log(firstPart.concat(secondPart));

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

// Exercise: Level 2

// Using console.log() print out the following statement:
// Using console.log() print out the following quote by Mother Teresa:

const statement =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
const MTquote =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";

console.log(statement, MTquote);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let number = "10";
let num = parseInt(number);

console.log(typeof num);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let PI = parseFloat("9.8");

console.log(Math.round(PI) == 10);

// Check if 'on' is found in both python and jargon

let value1 = "Python";
let value2 = "Jargon";

console.log(`${value1 + " " + value2}`.includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.

const sentence2 = "I hope this course is not full of jargon";

console.log(sentence2.includes("jargon"));

// Generate a random number between 0 and 100 inclusively.

let randomNum1 = Math.random();
let numBtn0and100 = randomNum1 * 101;

console.log(Math.floor(numBtn0and100));

// Generate a random number between 50 and 100 inclusively.

let randomNum2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum2);

// Generate a random number between 0 and 255 inclusively.

let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3);

// Access the 'JavaScript' string characters using a random number.

let string = "JavaScript";
let numberRandom = Math.floor(Math.random() * 11);
let character = string[numberRandom];

console.log(character);

// Use console.log() and escape characters to print the following pattern.

let pattern1 = "1 1 1 1 1";
let pattern2 = "\n2 1 2 4 8";
let pattern3 = "\n3 1 3 9 27";
let pattern4 = "\n4 1 4 16 64";
let pattern5 = "\n5 1 5 25 125";

let allPatterns = pattern1 + pattern2 + pattern3 + pattern4 + pattern5;

console.log(allPatterns);

let values = ("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

console.log(values);

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.substring(31, 54));

// Level 3

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let sentence3 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

console.log(sentence3.split("love").length);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.match(/because/gi).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const newSentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

const changedSentence = newSentence.replace(/[^\w\s]+/gi, "");
console.log(changedSentence);

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

const textNumbers = text.match(/\d+/g);

const annualIncome = +textNumbers[0] + +textNumbers[2] * 12 + +textNumbers[1];
console.log(annualIncome);
