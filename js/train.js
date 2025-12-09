// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     return this.pizzas.includes(pizzaName)
//       ? onSuccess(pizzaName)
//       : onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   //   for (let i = 0; i < orderedItems.length; i += 1) {
//   //     totalPrice += orderedItems[i];
//   //   }
//   orderedItems.forEach(element => (totalPrice += element));

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] > value) {
//   //       filteredNumbers.push(numbers[i]);
//   //     }
//   //   }
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
// Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }
//   firstArray.forEach(el => {
//     if (secondArray.includes(el)) {
//       commonElements.push(el);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// };

// function changeEven(numbers, value) {
//   const newArr = [];

//   numbers.forEach(number => {
//     !(number % 2) ? newArr.push(number + value) : newArr.push(number);
//   });

//   return newArr;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));

// const people = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getSortedFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((friend, idx, arr) => arr.indexOf(friend) === idx)
//         .sort((a, b) => a.localeCompare(b));

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((acc, us) => {
//       return acc + us.balance;
//     }, 0);
// };

// console.log(getTotalBalanceByGender(people, 'female'));
// const getUserNames = users => users.map(user => user.name);

// const getUserEmails = users => users.map(user => user.email);

// console.log(getUserEmails(people));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// const allGenres = books.flatMap(({ genres }) => genres);

// const uniqueGenres = allGenres.filter((genre, idx, arr) => {
//   if (arr.indexOf(genre) === idx) {
//     return genre;
//   }
// });

// console.log(uniqueGenres);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, item) => {
//   acc += item;
//   return acc;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, { playtime, gamesPlayed }) => {
//   return acc + playtime / gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// Change code below this line

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));
// Change code below this line
// console.log(names);

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAscendingRating);

// const chopShop = {
//   stones: [
//     {
//       name: 'Emerald',
//       price: 1300,
//       quantity: 4,
//     },
//     {
//       name: 'Diamond',
//       price: 2700,
//       quantity: 3,
//     },
//     {
//       name: 'Sapphire',
//       price: 1400,
//       quantity: 7,
//     },
//     {
//       name: 'Ruby',
//       price: 800,
//       quantity: 2,
//     },
//   ],

//   calcTotalPrice(stoneName) {
//     // let total;
//     // this.stones.forEach(({ name, price, quantity }) => {
//     //   if (name === stoneName) {
//     //     total = price * quantity;
//     //   }
//     // });

//     // return total;

//     // return this.stones.reduce(
//     //   (acc, { name, price, quantity }) => (name === stoneName ? price * quantity : acc),
//     //   0
//     // );

//     const obj = this.stones.find(({ name }) => name === stoneName);
//     const { price, quantity } = obj;
//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); //5200
// console.log(chopShop.calcTotalPrice('Diamond')); //8100
// console.log(chopShop.calcTotalPrice('Sapphire')); //9800

const phonebook = {
  contacts: [],
  add(contact) {
    const generateId = () => {
      return '_' + Math.random().toString(36).substr(2, 9);
    };

    const getDate = () => {
      return Date.now();
    };
    const newContact = {
      list: 'default',
      ...contact,
      id: generateId(),
      createdAt: getDate(),
    };

    this.contacts.push(newContact);
    return this.contacts;
  },

  // generateId() {
  //   return '_' + Math.random().toString(36).substr(2, 9);
  // },

  // getDate() {
  //   return Date.now();
  // },
};

// const phonebook1 = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//     return this.contacts;
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// console.log(phonebook.add({ name: 'Mango', list: 'friends', email: 'mango@mail.com' }));

const newPhoneBook = {
  name: 'NEW',
  contacts: [],
};

phonebook.add.call(newPhoneBook, {
  name: 'Mango',
  list: 'friends',
  email: 'mango@mail.com',
});

console.log(newPhoneBook);

// const calculator = {
//   create(a, b) {
//     this.a = a;
//     this.b = b;

//     // const add = () => this[a] + this[b];
//     // console.log(add());

//     // const mult = () => this[a] * this[b];
//     // console.log(mult());
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.create(29, 352);
// console.log(calculator);
// calculator.create(7, 2);
// console.log(calculator.add());
// console.log(calculator.mult());
