// You should log "Hello! I'm your coding fun fact guide!" to the console as a greeting message to the user.
// You should create three variables: botName, botLocation, and favoriteLanguage, that store the bot's name, where it's from, and its favorite coding language, respectively.
// You should log "My name is (botName) and I live on (botLocation)." to the console.
// You should log "My favorite programming language is (favoriteLanguage)." to the console.
// You should use let to create a codingFact variable and assign it a string that is a fun fact about your bot's favorite coding language and include the use of the favoriteLanguage variable.
// You should log the codingFact to the console.
// You should reassign the codingFact variable to a new fact about the bot's favorite language using the favoriteLanguage variable again.
// You should log the codingFact to the console again.
// You should reassign the codingFact variable again to another new fact about the bot's favorite language using the favoriteLanguage variable.
// You should log the codingFact to the console a third time.
// You should log "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." to the console as a farewell statement from the bot.

// console.log("Hello! I'm your coding fun fact guide!");
// const botName = 'Inga';
// const botLocation = 'Lviv';
// const favoriteLanguage = 'JS';
// console.log(`My name is ${botName} and I live on ${botLocation}.`);
// console.log(`My favorite programming language is ${favoriteLanguage}.`);
// let codingFact = 'I love ' + favoriteLanguage;
// console.log(codingFact);
// codingFact = 'I am 28 years old and love ' + favoriteLanguage;
// console.log(codingFact);
// codingFact = 'I love playing football and  ' + favoriteLanguage;
// console.log(codingFact);
// console.log(`It was fun sharing these facts with you. Goodbye! - ${botName} from ${botLocation}.`);

// In this lab, you will create two different stories using a sentence template. You will use variables to store different parts of the story and then output the stories to the console.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should declare the following variables using let:

// You should assign the above variables some string values of your choice.

// You should declare a firstStory variable.

// You should use the following story template to create the first story and assign it to the firstStory variable: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].";

// You should output your first story to the console using the message "First story: [firstStory]".

// You should assign new values to your adjective, noun, verb, place, adjective2, and noun2 variables.

// You should declare a secondStory variable.

// Create another story using the same template and assign it to the secondStory variable.

// You should output your second story to the console using the message "Second story: [secondStory]".

// adjective
// noun
// verb
// place
// adjective2
// noun2

// let adjective = 'small';
// let noun = 'cat';
// let verb = 'bite';
// let place = 'hotel';
// let adjective2 = 'cute';
// let noun2 = 'dog';

// const firstStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;
// console.log(`First story: ${firstStory}`);

// adjective = 'funny';
// noun = 'dragon';
// verb = 'arguing';
// place = 'tower';
// adjective2 = 'huge';
// noun2 = 'bird';

// const secondStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;
// console.log(`Second story: ${secondStory}`);

// function calcDays(depth) {
//   const metersPerDay = 7;
//   const metersPerNight = 2;
//   let total = 0;
//   let days = 0;

//   while (depth > total) {
//     total += metersPerDay;
//     days += 1;
//     if (depth > total) {
//       total -= metersPerNight;
//     }
//   }
//   console.log(days);
//   //   for (let total = 0; total < depth; total += metersPerDay) {
//   //     days += 1;
//   //     if (total <= depth) {
//   //       total -= metersPerNight;
//   //     }
//   //   }
//   //   console.log(days);
//   //   const res = Math.round(depth / (metersPerDay - metersPerNight));
//   //   console.log(res);
// }

// calcDays(42); //8 days
// calcDays(17); //3 days
// calcDays(18); //4 days

// let counterModule = (function () {
//   let instance;
//   let counter = 0;

//   let getCounter = function () {
//     return counter;
//   };

//   let increaseCounter = function () {
//     counter++;
//   };

//   let createInstance = function () {
//     return {
//       getCounter: getCounter,
//       increaseCounter: increaseCounter,
//     };
//   };

//   return {
//     getInstance: function () {
//       return instance || (instance = createInstance());
//     },
//   };
// })();

// const counter = counterModule.getInstance();
// counter.increaseCounter();
// counter.increaseCounter();
// counter.increaseCounter();
// let counter2 = counterModule.getInstance();
// console.log(counter2.getCounter());

// const str = 'asakdcjkadeafadmcackad';

// function makeObj(string) {
//   const arr = string.split('');
//   //   console.log(arr);
//   return arr.reduce((acc, item) => {
//     if (!acc[item]) {
//       //   acc = { ...acc, [item]: 1 };
//       //   return acc;
//       return { ...acc, [item]: 1 };
//     }
//     acc[item] += 1;
//     return acc;
//   }, {});
// }
// const name = 'Inga';
// console.log(makeObj(name));
// const str = 'JavaScript';
// console.log(str.indexOf('r'));

// let sentence = 'JavaScript is awesome!';
// let position = sentence.indexOf('awesome!');
// console.log(position); // 14

// let sentence = 'JavaScript is awesome, and JavaScript is powerful!';
// let position = sentence.indexOf('JavaScript', 10);
// console.log(position); // 27

// const str = 'I am learning JavaScript.';
// console.log(str.indexOf('Javascript'));
// console.log('Hi there!');
// const botName = 'teacherBot';
// const greeting = `My name is ${botName}`;
// console.log(greeting);
// const subject = 'JavaScript';
// const topic = 'strings';

// const sentence = `Today, you will learn about ${topic} in ${subject}.`;
// console.log(sentence);

// const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
// console.log(strLengthIntro);
// console.log(subject.length);

// console.log(`Here is an example of using the length property on the word ${topic}.`);
// console.log(topic.length);
// console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
// console.log(subject[0]);
// console.log(`Here is an example of accessing the last letter in the word ${subject}.`);
// const lastCharacter = subject[subject.length - 1];
// console.log(lastCharacter);
// const learningIsFunSentence = 'Learning is fun.';
// console.log('Here are examples of finding the positions of substrings in the sentence.');
// console.log(learningIsFunSentence.indexOf('learning'));
// console.log(String.fromCharCode(33));
// console.log(String.fromCharCode(66));

// let sentence = 'Learning JavaScript is fun!';
// let extracted = sentence.slice(9, -5);

// console.log(extracted);

// const fccSentence = 'freeCodeCamp is a great place to learn web development.';
// console.log('Here are some examples of the includes() method:');
// const hasFreeCodeCamp = fccSentence.includes('freeCodeCamp');
// console.log(
//   `fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`
// );

// const hasJavaScript = fccSentence.includes('JavaScript');
// console.log(
//   `fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`
// );

// const hasLowercaseFCC = fccSentence.includes('freecodecamp');
// console.log(
//   `fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`
// );

// const message = 'Welcome to freeCodeCamp!';
// console.log('Here are some examples of the slice() method:');
// const platform = message.slice(11, 23);
// console.log(`The word "${platform}" was sliced from the message.`);

// const greetingWord = message.slice(0, 7);
// console.log(`The first word is "${greetingWord}".`);

// const endPunctuation = message.slice(-1);
// console.log(`The ending punctuation mark is a "${endPunctuation}"`);
// console.log('Workshop complete! You now know how to use includes() and slice().');

// let message = '   Hello!   ';
// let trimmedMessage = message.trim();
// console.log(message); // "   Hello!   "
// console.log(trimmedMessage); // "Hello!"

// const userInput = '   Hello World!   ';
// console.log('Original input:');
// console.log(userInput);
// const cleanedInput = userInput.trim();
// console.log('Result of trimming whitespace from both ends:');
// console.log(cleanedInput);
// const trimmedStart = userInput.trimStart();
// console.log('After using the trimStart() method, leading spaces removed:');
// console.log(trimmedStart);
// const trimmedEnd = userInput.trimEnd();
// console.log('After using the trimEnd() method, trailing spaces removed:');
// console.log(trimmedEnd);
// console.log('Result of using the toUpperCase() method:');
// console.log();

// const lowerCaseInput = cleanedInput.toLowerCase();
// console.log('Result of using the toLowerCase() method:');
// console.log(lowerCaseInput);

// const lowercaseWord = 'camelcase';
// const camelCasedVersion =
//   lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(-3);
// console.log('Camel cased version:');
// console.log(camelCasedVersion);

// const originalString = 'I love cats.';
// console.log('Original string:');
// console.log(originalString);
// const replacedString = originalString.replace('cats', 'dogs');
// console.log('After using the replace() method:');
// console.log(replacedString);

// const exampleSentence = 'I love cats and cats are so much fun!';
// console.log('Original sentence:');
// console.log(exampleSentence);

// const dogsOnlySentence = exampleSentence.replace('cats', 'dogs');
// console.log('Replacing all occurrences of cats with dogs:');
// console.log(dogsOnlySentence);

// const learningSentence = 'I love learning!';
// console.log('Original learning sentence:');
// console.log(learningSentence);

// const repeatedLove = 'love '.repeat(3);
// console.log(repeatedLove);

// const newSentence = `I ${repeatedLove} learning`;
// console.log(newSentence);
// User Stories:

// You should have a variable named firstResult that correctly adds the numbers 5 and 10 to produce the value 15.
// You should have a variable named secondResult that correctly subtracts 5 from 8 to produce the value 3.
// You should have a variable named thirdResult that produces the value 6 by adding two numbers. Replace the boolean currently used in the expression with a number.
// You should have a variable named fourthResult that produces the value 8 by adding two numbers. Replace the boolean currently used in the expression with a number.
// You should have a variable named fifthResult that correctly multiplies two numbers to get the product 20. Replace the string currently used in the expression with a number.
// You should have a variable named sixthResult that correctly adds two numbers to produce the value 22. Replace the null currently used in the expression with a number.

// const firstResult = 5 + 10;
// console.log(`5 + 10 = ${firstResult}`);

// const secondResult = 8 - 5;
// console.log(`8 - 5 = ${secondResult}`);

// const thirdResult = 1 + 5;
// console.log(`1 + 5 = ${thirdResult}`);

// const fourthResult = 0 + 8;
// console.log(`0 + 8 = ${fourthResult}`);

// const fifthResult = 10 * 2;
// console.log(`10 * 2 = ${fifthResult}`);

// const sixthResult = 0 + 22;
// console.log(`0 + 22 = ${sixthResult}`);

// let a, b;
// a = b = 5;

// console.log(a); // 5
// console.log(b); // 5
// console.log(a + b); // 10
// let x = 5;

// console.log(x++); // 6
// console.log(x); // 6
// User Stories:

// You should have a variable named updatedCounter that correctly produces the value 11 by using the increment operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
// You should have a variable named finalScore that correctly produces the value 8 by using the increment operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
// You should have a variable named updatedCoins that correctly produces the value 2 by using the decrement operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
// You should have a variable named newHealth that correctly produces the value 7 by using the decrement operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.

// let counter = 10;
// console.log(`Counter is currently ${counter}`);

// let updatedCounter = ++counter;
// console.log(`Counter is now ${updatedCounter}`);

// let score = 8;
// console.log(`Score is currently ${score}`);

// let finalScore = score++;
// console.log(`Score is still ${finalScore}`);

// let coins = 3;
// console.log(`Coins is currently ${coins}`);

// let updatedCoins = --coins;
// console.log(`Coins is now ${updatedCoins}`);

// let health = 7;
// console.log(`Health is currently ${health}`);

// let newHealth = health--;
// console.log(`Health is still ${newHealth}`);

// const hasDeveloperJob = true;

// if (hasDeveloperJob) {
//   console.log('Timmy is employed as a developer.');
// }

// const isTimmyAGamer = false;
// if (isTimmyAGamer) {
//   console.log('Timmy loves to play World of Warcraft.');
// }
// const timmyAge = 18;

// if (timmyAge >= 16) {
//   console.log('Timmy is old enough to drive.');
// } else {
//   console.log('Timmy is not old enough to drive.');
// }
// let a = 5; // Binary: 101
// let b = 3; // Binary: 011
// console.log(a | b);
// let x = 8; // Binary: 1000
// console.log(x << 2);
// const max = 10;
// const min = 0;
// const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);

// const botName = 'MathBot';
// const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
// console.log(greeting);
// console.log(
//   'The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.'
// );
// const randomNum = Math.random();
// console.log(randomNum);
// console.log('Now, generate a random number between two values.');
// const min = 1;
// const max = 100;

// const randomNum2 = Math.floor(Math.random() * (max - min) + min);
// console.log(randomNum2);

// console.log('The Math.floor() method rounds the value down to the nearest whole integer.');

// const numRoundedDown = Math.floor(6.7);
// console.log(numRoundedDown);
// console.log('Now, generate a random integer between two values.');

// const randomInt = Math.floor(Math.random() * (max - min) + min);
// console.log(randomInt);
// console.log('The Math.ceil() method rounds the value up to the nearest whole integer.');
// const numRoundedUp = Math.ceil(3.2);
// console.log(numRoundedUp);
// console.log('The Math.round() method rounds the value to the nearest whole integer.');

// const numRounded = Math.round(2.7);
// console.log(numRounded);
// const numRounded2 = Math.round(11.2);
// console.log(numRounded2);
// console.log(
//   'The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.'
// );
// console.log('It was fun learning about the different Math methods with you!');

// User Stories:

// You should initialize the five variables fortune1, fortune2, fortune3, fortune4, and fortune5 with a string value of your choice. You can use the below options if you like:

// "Your cat will look very cuddly today."
// "The weather will be nice tomorrow."
// "Be cautious of your new neighbors."
// "You will find a new hobby soon."
// "It would be wise to avoid the color red today."
// You should select a random number between 1 and 5, inclusive, and assign it to the variable randomNumber.

// You should create a selectedFortune variable and assign the appropriate fortune based on these rules:

// If randomNumber is 1, assign the value of fortune1 to selectedFortune.
// If randomNumber is 2, assign the value of fortune2 to selectedFortune.
// If randomNumber is 3, assign the value of fortune3 to selectedFortune.
// If randomNumber is 4, assign the value of fortune4 to selectedFortune.
// If randomNumber is 5, assign the value of fortune5 to selectedFortune.
// You should log the selectedFortune to the console.

// const fortune1 = 'Your cat will look very cuddly today.';
// const fortune2 = 'The weather will be nice tomorrow.';
// const fortune3 = 'Be cautious of your new neighbors.';
// const fortune4 = 'You will find a new hobby soon.';
// const fortune5 = 'It would be wise to avoid the color red today.';

// const max = 5;
// const min = 1;
// const randomNumber = Math.floor(Math.random() * (max - min) + min);
// console.log(randomNumber);

// let selectedFortune;
// if (randomNumber === 1) {
//   selectedFortune = fortune1;
// } else if (randomNumber === 2) {
//   selectedFortune = fortune2;
// } else if (randomNumber === 3) {
//   selectedFortune = fortune3;
// } else if (randomNumber === 4) {
//   selectedFortune = fortune4;
// } else {
//   selectedFortune = fortune2;
// }

// console.log(selectedFortune);
// console.log(2 ** 3);
// const result3 = 2 ** (3 ** 2);

// console.log(result3);
// const num = 2;

// switch (num) {
//   case 3:
//     console.log('This is 3');
//     break;
//   case 5:
//     console.log('This is 5');
//     break;
//   case 7:
//     console.log('This is 7');
//     break;
//   default:
//     console.log('Default');
// }
// console.log(5 === 2 + 3 || 4 == 2);
// const a = 2;
// if (1 == '1') {
//   let b = 3;
//   console.log(a + b);
// }
// console.log(b);
// greeting('Bilyash');
// function greeting(name) {
//   console.log(`Hello, ${name}`);
// }

// const add = (num1, num2) => num1 + num2;
// console.log(add(7, 13));

// function addTwoAndSeven() {
//   return 2 + 7;
// }

// console.log(addTwoAndSeven());

// const addThreeAndFour = () => {
//   return 3 + 4;
// };
// console.log(addThreeAndFour());

// function calculateSum(num1, num2) {
//   return num1 + num2;
// }

// console.log(calculateSum(2, 5));

// function calculateDifference(num1, num2) {
//   return num1 - num2;
// }
// console.log(calculateDifference(22, 5));
// console.log(calculateDifference(12, 1));
// console.log(calculateDifference(17, 9));

// const calculateProduct = (num1, num2) => num1 * num2;
// console.log(calculateProduct(13, 5));

// const calculateQuotient = (num1, num2) => {
//   if (!num2) {
//     return 'Error: Division by zero';
//   }
//   return num1 / num2;
// };
// console.log(calculateQuotient(7, 11));
// console.log(calculateQuotient(3, 0));

// function calculateSquare(num) {
//   return Math.pow(num, 2);
// }
// console.log(calculateSquare(2));
// console.log(calculateSquare(9));

// const calculateSquareRoot = num => Math.sqrt(num);
// console.log(calculateSquareRoot(25));
// console.log(calculateSquareRoot(100));

// function booWho(par) {
//   if (typeof par === 'boolean') {
//     return true;
//   }

//   return false;
// }

// console.log(booWho(5));

// function maskEmail(email) {
//   const idx = email.indexOf('@');

//   const str = email.slice(1, idx - 1);

//   return email.replace(str, '*'.repeat(str.length));
// }
// const foo = function (a, b) {
//   return a * b;
// };

// console.log(foo(7, 3));

// console.log('LearnJS');
// ['Learn', 'JS'].forEach(alert);

// alert('Hello');
// let age = 18;
// let newAge = 25;

// // age = newAge;
// console.log(age, 'age');
// console.log(newAge, 'newAge');

// const colorEyes = 'brown';

// let user;
// let userName;

// userName = 'vasya';
// user = userName;
// console.log(user);

// let user;
// console.log(typeof user);
// user = 'qwerty';
// console.log(typeof user);
// user = 58;
// console.log(typeof user);

// const block = document.querySelector('.block');
// console.log(block);
// console.log(typeof block);

// const inf = -59 / 0;
// console.log(inf);
// console.log(typeof inf);

// const bigInteger = 12339418385748520495109483190584390309493482378427384n;
// console.log(bigInteger);
// console.log(typeof bigInteger);

// const foo = function (a, b) {
//   return a * b;
// };

// console.log(typeof foo);

// const user = '58a';

// const user1 = Number(user);
// console.log(user1);
// console.log(typeof user1);

// const a = '10';
// const b = '25';

// console.log(a + b);
// console.log(+a + +b);

// let a = 0;
// console.log(a++);
// console.log(a);

// let name;

// console.log(name ?? 'Noname');

// console.log('35' + -'22'); //13
// console.log('35' * '22'); //770
// console.log('558' > 22++);  //true

// let userCounter = 0;
// let newUsers = userCounter++;
// console.log(newUsers); //1

// console.log((!false && 11) || (18 && !'')); //18

// let name = 0;
// console.log(name ?? 'NoName');

// if (true) console.log(555);

// const num = 30;

// switch (num) {
//   case 40:
//     console.log(40);
//     break;
//   case 30:
//     console.log(30);
//     break;
//   case 20:
//     console.log(20);
//     break;
//   default:
//     console.log('noone');
// }

// if (1 === '1') {
//   console.log('True');
// } else {
//   console.log('False'); //False
// }

// if (5 == '5') {
//   console.log('True');
// } else {
//   console.log('False'); //true
// }

// let message = 92 > '11' && 58 < 100 ? 'True' : 'False';
// console.log(message); //true

// if (0) {
//   console.log('False');
// } else if (' ') {
//   console.log('True'); //true
// }

// for (let i = 0; i <= 5; i += 1) {
//   if (i === 2) continue;
//   console.log(i);
// }

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i += 1;
// }

// do {
//   console.log(i);
//   i += 1;
// } while (i <= 5);

// let num = 8;
// while (num) {
//   console.log(num);
//   num--;
// }

// for (let num = 0; num < 3; num += 1) {
//   console.log(`Number: ${num}`);
// }

// let num = 0;
// while (num < 3) {
//   console.log(`Number: ${num}`);
//   num += 1;
// }

// forOne: for (let num = 0; num < 3; num += 1) {
//   for (let size = 0; size < 3; size += 1) {
//     if (size === 1) break forOne;
//     console.log(size);
//   }
// }

// function foo(a, b, more, less) {
//   const total = a + b;

//   if (total > 3) {
//     more();
//   } else {
//     less();
//   }
// }

// function showMore() {
//   console.log('More than 3');
// }

// function showLess() {
//   console.log('Less than 3');
// }

// foo(5, 7, showMore, showLess);

// function boo(a, b) {
//   return a + b;
// }

// const total = boo(3, 7);
// console.log(total);

// function calcSum(numOne, numTwo) {
//   let result = 1;
//   for (let i = 0; i < numTwo; i += 1) {
//     result *= numOne;
//   }
//   return result;
// }

// console.log(calcSum(2, 3));

// function calcSum(numOne, numTwo) {
//   if (numTwo === 1) {
//     return numOne;
//   }
//   return numOne * calcSum(numOne, numTwo - 1);
// }

// console.log(calcSum(2, 3));

// const showMes = (text, name) => console.log(`${text}, ${name}`);

// setInterval(showMes, 2500, 'Hello', 'Tanya');

// function showName() {
//   console.log('Vasya');
// }
// setTimeout(showName, 0);
// console.log('Kolya');

// let foo;
// if (2 > 1) {
//   function showMes() {
//     console.log('Message');
//   }

//   foo = showMes;
// }

// foo();

// const minIncomeForDuplex = 60000;
// const minCreditScoreForDuplex = 700;
// const minIncomeForCondo = 45000;
// const minCreditScoreForCondo = 680;
// const minIncomeForCar = 30000;
// const minCreditScoreForCar = 650;

// function getLoanMessage(annualIncome, creditScore) {
//   if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
//     return 'You qualify for a duplex, condo, and car loan.';
//   }
//   if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
//     return 'You qualify for a condo and car loan.';
//   }
//   if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
//     return 'You qualify for a car loan.';
//   }
//   return "You don't qualify for any loans.";
// }

// const duplexLoanMsg = getLoanMessage(85000, 850);
// const condoLoanMsg = getLoanMessage(65000, 690);
// const carLoanMsg = getLoanMessage(45000, 660);
// const noLoanMsg = getLoanMessage(25000, 550);

// console.log(duplexLoanMsg);
// console.log(condoLoanMsg);
// console.log(carLoanMsg);
// console.log(noLoanMsg);

// function convertCtoF(degree) {
//   return Number(degree * (9 / 5) + 32);
// }
// (10, 'J', 'Q', 'K', 'A');
// let count = 0;

// function cardCounter(card) {
//   if (card >= 2 && card <= 6) {
//     count += 1;
//   }
//   if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
//     count -= 1;
//   }

//   return count > 0 ? `${count} Bet` : `${count} Hold`;
// }
// [year] is a leap year.

// const year = 1900;

// function isLeapYear(number) {
//   if (!(number % 4) && !(number % 100) && !(number % 400)) {
//     return `${number} is a leap year.`;
//   } else if (!(number % 4) && !(number % 100)) {
//     return `${number} is not a leap year.`;
//   } else if (!(number % 4)) {
//     return `${number} is a leap year.`;
//   } else {
//     return `${number} is not a leap year.`;
//   }
// }

// const result = isLeapYear(year);
// console.log(result);

// let year = 1900;
// function isLeapYear(year) {
//   if (year % 4 == 0 && year % 400 == 0) {
//     return `${year} is a leap year.`;
//   } else if (year % 4 == 0 && year % 100 == 0) {
//     return `${year} is not a leap year.`;
//   } else if (year % 4 == 0 && year % 100 != 0) {
//     return `${year} is a leap year.`;
//   } else {
//     return `${year} is not a leap year.`;
//   }
// }
// let result = isLeapYear();
// console.log(result);

// function truncateString(str, num) {
//   if (str.length > num) {
//     return `${str.slice(0, num)}...`;
//   }
//   return str;
// }

// console.log(truncateString('qwertyqwerty', 12));
// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
// console.log(truncateString('A-', 1));

// const str = 'qwerty';
// console.log(str.slice(0, str.length));

// function confirmEnding(str, sub) {
//   if (str.slice(-sub.length) === sub) {
//     return true;
//   }
//   return false;
// }

// console.log(confirmEnding('Inga', 'g'));
// const exampleFunction = (param1, param2) => param1 + param2;
// console.log(exampleFunction(3, 'Something'));
// const divideTwoNumbers = (num1, num2) => num1 / num2;
// console.log(divideTwoNumbers(3, 0));
// const max = 50;
// const min = 5;
// const num = Number((Math.random() * (max - min) + min).toFixed());
// console.log(num);

// let weight = '88,3';
// let height = '1.75';

// weight = Number(weight.replace(',', '.'));

// height = Number(height);

// const bmi = Number((weight / height ** 2).toFixed(1));
// console.log(bmi);

// const stars = 2;
// let price;

// if (stars === 1) {
//   price = 10;
// } else if (stars === 2) {
//   price = 20;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 100;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   price = 0;
//   console.log('There are no stars');
// }

// switch (stars) {
//   case 1:
//   case 2:
//     price = 10;
//     break;
//   // case 2:
//   //   price = 20;
//   //   break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 100;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     price = 0;
//     console.log('There are no stars');
// }

// console.log(price);

// const str = 'string';

// for (let i = 0; i < str.length; i += 1) {
//   console.log(str[i]);
// }

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

// const employees = 10;
// let total = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const sal = Number((Math.random() * (5000 - 500) + 500).toFixed());
//   total += sal;
//   console.log(`${i} - ${sal}`);
//   console.log(total);
// }

// console.log(total);

// const min = 0;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2) {
//     continue;
//   }
//   console.log(i);
//   total += i;
// }

// console.log(total);

// let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
// let [first, second, ...a] = fruits;

// const newArr = [...fruits];

// console.log(first); // "apple"
// console.log(second); // "banana"
// console.log(a); // ["orange", "mango", "kiwi"]
// console.log(newArr);
// console.log(fruits === newArr);

// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02;
//   console.log(`bronze partner , discount - ${discount}`);
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 0.05;
//   console.log(`silver partner , discount - ${discount}`);
// } else if (totalSpent >= 5000) {
//   discount = 0.1;
//   console.log(`gold partner , discount - ${discount}`);
// } else {
//   console.log('no discount');
// }

// console.log(`Your purchase ${payment * (1 - discount)} with ${discount * 100}%`);

// const deadline = Number(prompt('How many days?') ?? NaN);

// if (isNaN(deadline)) {
//   console.log('INCORRECT');
// } else {
//   if (deadline === 0) {
//     console.log('Today');
//   } else if (deadline === 1) {
//     console.log('Tomorrow');
//   } else if (deadline === 2) {
//     console.log('after Tomorrow');
//   } else {
//     console.log('Date in the future');
//   }
// }

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5) {
//     // console.log(i % 5);
//     continue;
//   }
//   console.log(i);
// }

// console.log('Grocery shopping list');
// const shoppingList = [];
// console.log('It will be nice to have some fruit to eat.');
// shoppingList.push('Apples');

// function getShoppingListMsg(arr) {
//   return `Current Shopping List: ${arr}`;
// }

// console.log(getShoppingListMsg(shoppingList));
// shoppingList.push('Grapes');
// console.log(getShoppingListMsg(shoppingList));
// console.log('It looks like we need to get some cooking oil.');
// shoppingList.unshift('Vegetable Oil');
// console.log(getShoppingListMsg(shoppingList));
// shoppingList.push('Popcorn', 'Beef Jerky', 'Potato Chips');
// console.log(getShoppingListMsg(shoppingList));
// console.log('This looks like too much junk food.');
// shoppingList.pop();
// console.log(getShoppingListMsg(shoppingList));
// console.log('It might be nice to get a dessert.');
// shoppingList.unshift('Chocolate Cake');
// console.log(getShoppingListMsg(shoppingList));
// console.log('On second thought, maybe we should be more health conscious.');
// shoppingList.shift();
// console.log(getShoppingListMsg(shoppingList));
// shoppingList[0] = 'Canola Oil';

// const lunches = ['Stew', 'Soup', 'Toast'];

// for (const lunch of lunches) {
//   console.log(lunch);
// }

// function getRandom(max, min) {
//   return Number((Math.random() * (max - min) + min).toFixed());
// }

// function addLunchToEnd(arr, str) {
//   arr.push(str);
//   console.log(`${str} added to the end of the lunch menu.`);
//   return arr;
// }

// function addLunchToStart(arr, str) {
//   arr.unshift(str);
//   console.log(`${str} added to the start of the lunch menu.`);
//   return arr;
// }

// function removeLastLunch(arr) {
//   if (arr.length) {
//     console.log(`${arr.pop()} removed from the end of the lunch menu.`);
//     // arr.pop();
//   } else {
//     console.log('No lunches to remove.');
//   }
//   return arr;
// }

// function removeFirstLunch(arr) {
//   if (arr.length) {
//     console.log(`${arr[0]} removed from the start of the lunch menu.`);
//     arr.shift();
//   } else {
//     console.log('No lunches to remove.');
//   }
//   return arr;
// }

// function getRandomLunch(arr) {
//   if (arr.length) {
//     console.log(`Randomly selected lunch: ${arr[getRandom(arr.length - 1, 0)]}`);
//   } else {
//     console.log('No lunches available.');
//   }
// }

// function showLunchMenu(arr) {
//   if (arr.length) {
//     console.log(`Menu items: ${arr.join(', ')}`);
//   } else {
//     console.log('The menu is empty.');
//   }
// }

// console.log(addLunchToEnd(['Pizza', 'Tacos'], 'Burger'));
// console.log(addLunchToStart(['Burger', 'Sushi'], 'Pizza'));

// console.log(removeLastLunch(['Stew', 'Soup', 'Toast']));
// console.log(removeLastLunch(['Sushi', 'Pizza', 'Noodles']));
// console.log(getRandomLunch(['Sushi', 'Pizza', 'Noodles']));
// console.log(showLunchMenu(['Greens', 'Corns', 'Beans']));

// function golfScore(par, strokes) {
//   if (strokes === 1) {
//     return 'Hole-in-one!';
//   } else if (strokes <= par - 2) {
//     return 'Eagle';
//   } else if (strokes === par - 1) {
//     return 'Birdie';
//   } else if (strokes === par) {
//     return 'Par';
//   } else if (strokes === par + 1) {
//     return 'Bogey';
//   } else if (strokes === par + 2) {
//     return 'Double Bogey';
//   } else if (strokes >= par + 3) {
//     return 'Go Home!';
//   } else {
//     return ')';
//   }
// }

// console.log(golfScore(4, 3));

const string = 'javascript';

for (const character of string) {
  console.log(character);
}
