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

forOne: for (let num = 0; num < 2; num += 1) {
  for (let size = 0; size < 3; size += 1) {
    if (size === 1) break forOne;
    console.log(size);
  }
}
