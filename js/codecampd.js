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
