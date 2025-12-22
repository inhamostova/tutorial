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
console.log('inga'.charCodeAt(0));
