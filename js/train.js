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

// const newPhoneBook = {
//   name: 'NEW',
//   contacts: [],
// };

// phonebook.add.call(newPhoneBook, {
//   name: 'Mango',
//   list: 'friends',
//   email: 'mango@mail.com',
// });

// console.log(newPhoneBook);

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

//   calculateTotalPrice(stoneName) {
//     // return this.stones.reduce((acc, { name, price, quantity }) => {
//     //   if (stoneName === name) {
//     //     return price * quantity;
//     //   }
//     //   return acc;
//     // }, 0);

//     const { price, quantity } = this.stones.find(({ name }) => name === stoneName);
//     return price * quantity;
//   },
// };

// console.log(chopShop.calculateTotalPrice('Diamond'));

// const chopShop2 = {
//   stones: [
//     {
//       name: 'Stone',
//       price: 200,
//       quantity: 5,
//     },
//     {
//       name: 'Chulk',
//       price: 250,
//       quantity: 3,
//     },
//   ],
// };

// console.log(chopShop.calculateTotalPrice.call(chopShop2, 'Chulk'));
// const foo = chopShop.calculateTotalPrice.bind(chopShop2);

// console.log(foo('Stone'));

// const phonebook1 = {
//   contacts: [],
//   add(contact) {
//     const generateId = () => {
//       // console.log(this);
//       return '_' + Math.random().toString(36).substr(2, 9);
//     };

//     const getDate = () => {
//       return Date.now();
//     };
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: generateId(),
//       createdAt: getDate(),
//     };

//     this.contacts.push(newContact);
//     return this;
//   },
// };

// const newPhoneBook = {
//   name: 'NEW',
//   contacts: [],
// };

// console.log(
//   phonebook1.add.call(newPhoneBook, {
//     name: 'Mango',
//     list: 'friends',
//     email: 'mango@mail.com',
//   })
// );

// phonebook1.add.call(newPhoneBook, {
//   name: 'Mango',
//   list: 'friends',
//   email: 'mango@mail.com',
// });

// console.log(
//   phonebook1.add({
//     name: 'Mango',
//     list: 'friends',
//     email: 'mango@mail.com',
//   })
// );

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Charlie';

// console.log(dog);

// for (const key in dog) {
//   console.log(key);
//   console.log(dog[key]);
// }

// const keys = Object.keys(dog);
// console.log(keys);

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

// getEmail() {
//   return this.#email;
// }

// changeEmail(newEmail) {
//   this.#email = newEmail;
// }
//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Mango', email: 'mango@mail.com' });
// console.log(mango);

// const poly = new User({ name: 'Poly', email: 'poly@mail.com' });
// console.log(poly);

// console.log(poly.getEmail());
// console.log(poly.email);
// poly.changeEmail('poly1234@gmail.com');
// console.log(poly);

// poly.email = 'poly1234@gmail.com';
// console.log(poly.email);

// const objC = {
//   c: 5,
// };

// console.log(objC);
// console.log(objC.hasOwnProperty('c'));

// const objB = Object.create(objC);
// objB.b = 7;

// console.log(objB);
// console.log(objB.c);

// const objA = Object.create(objB);
// objA.a = 3;

// console.log(objA);
// console.log(objA.a);
// console.log(objA.b);
// console.log(objA.c);

// const Car = function ({ mark, model, price, amount } = {}) {
//   this.mark = mark;
//   this.model = model;
//   this.price = price;
//   this.amount = amount;
// };

// Car.prototype.getCarPrice = function () {
//   return this.price;
// };
// const car1 = new Car({ mark: 'volkswagen', model: 'JETTA', price: 12000, amount: 10 });
// const car2 = new Car({ mark: 'toyota', model: 'RAV4', price: 17000, amount: 7 });
// console.log(car1.getCarPrice());
// console.log(car2);

// class Car {
//   static Number = 550;

//   static isEvenNumber() {
//     console.log(this);
//     return !(this.Number % 2) ? true : false;
//   }

//   #mark;
//   #model;
//   constructor({ mark, model, price, amount } = {}) {
//     this.#mark = mark;
//     this.#model = model;
//     this.price = price;
//     this.amount = amount;
//   }

//   getModel() {
//     return this.#model;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   get mark() {
//     return this.#mark;
//   }

//   set mark(newMark) {
//     if (!newMark) {
//       console.log('ERROR');
//       return;
//     }
//     this.#mark = newMark;
//   }
// }

// const car1 = new Car({ mark: 'volkswagen', model: 'JETTA', price: 12000, amount: 10 });
// console.log(Car.isEvenNumber());
// console.log(car1.hasOwnProperty('model'));
// console.log(car1);
// console.log(car1.getModel());
// car1.changePrice(10000);
// console.log(car1);
// console.log(car1.mark);
// car1.mark = '';
// console.log(car1);

// class User {
//   #email;
//   constructor({ email }) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class Editor extends User {
//   constructor({ email, name }) {
//     super(email);
//     this.name = name;
//   }
// }

// const mango = new Editor({ name: 'Mango', email: 'mango@mail.com' });
// console.log(mango);

// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} отримує ${amount} очок досвіду`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor({ name, xp, weapon = 'knuckles' }) {
//     super({ name, xp });
//     // console.log(config);
//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} attacks with ${this.weapon}`);
//   }
// }

// class Mage extends Hero {
//   constructor({ spells = [], ...restProps }) {
//     super(restProps);

//     this.spells = spells;
//   }

//   doSpell() {
//     console.log(`${this.name} is doing ${this.spells[0]}`);
//   }
// }

// const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'dagger' });

// const poly = new Mage({ name: 'Poly', xp: 3000, spells: ['Avadakedavea', 'Expecto Patronus'] });

// console.log(mango);
// mango.gainXp(700);
// mango.attack();
// console.log(Object.getPrototypeOf(mango) === Warrior.prototype);
// console.log(Warrior.prototype.__proto__ === Hero.prototype);

// console.log(poly);
// poly.doSpell();
// console.log('Warrior prototype', Warrior.prototype);

// console.log('Hero prototype', Hero.prototype);

// const obj = {
//   name: 'User',
//   sayHello() {
//     console.log(`Hello, ${this.name}`);
//   },
// };

// const objA = Object.create(obj);
// objA.name = 'Inga';
// objA.age = 28;
// objA.getAge = function () {
//   return this.age;
// };

// console.log(objA);

// objA.sayHello();

// console.log(obj.isPrototypeOf(objA));

// const objB = Object.create(objA);
// objB.age = 35;
// console.log(objB);

// console.log(objB.getAge());
// const arr = [1, 2, 3, 4];
// // console.log(arr);

// Array.prototype.sayHello = function (name) {
//   console.log(`Hello, my name is ${name}`);
// };

// const str = 'Inga';
// [1, 2].sayHello(str);

// console.log(arr);

// class User {
//   #password;
//   constructor({ name, email, password } = {}) {
//     this.name = name;
//     this.email = email;
//     this.#password = password;
//   }

//   get mail() {
//     return this.email;
//   }

//   set mail(newEmail) {
//     if (!newEmail) {
//       return 'Email cant be empty string';
//     }
//     this.email = newEmail;
//   }

//   get password() {
//     return this.#password;
//   }

//   set password(newPassword) {
//     if (newPassword.length < 4) {
//       return 'New password must be at least 4 symbols';
//     }

//     this.#password = newPassword;
//   }
// }

// const inga = new User({ name: 'Inga', email: 'inga@gmail.com', password: '12345678' });

// console.log(inga);
// inga.mail = 'ingo4ka@mail.com';
// inga.password = 'NEWPASSWORD';
// console.log(inga);

// class Blogger {
//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     console.log(`User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`);
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango);
// mango.getInfo();
// mango.updatePostCount(5);
// console.log(mango);

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     if (this.items.includes(itemToRemove)) {
//       this.items.splice(this.items.indexOf(itemToRemove), 1);
//       return;
//     }
//     console.log('There is no ITEM');
//     return;
//   }
// }

// const storage = new Storage(['🍓', '🍋', '🍇', '🍎']);

// console.log(storage.getItems());
// storage.addItem('🍌');
// console.log(storage.getItems());
// storage.removeItem('🍋');
// console.log(storage.getItems());
// storage.removeItem('🍋');

// class User {
//   #email;
//   #password;

//   constructor({ email, password }) {
//     this.#email = email;
//     this.#password = password;
//   }

//   get mail() {
//     return this.#email;
//   }

//   set mail(newEmail) {
//     this.#email = newEmail;
//   }

//   get uesrPassword() {
//     return this.#password;
//   }

//   set uesrPassword(newPassword) {
//     this.#password = newPassword;
//   }
// }

// const mango = new User({ email: 'mango@woof.com', password: '12345678' });
// console.log(mango.mail);
// mango.mail = 'M4NgO@com';
// console.log(mango.mail);

// console.log(mango.uesrPassword);
// mango.uesrPassword = 'qwerty';
// console.log(mango.uesrPassword);

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(notes) {
//     this.items = notes;
//   }

//   addNote(newNote) {
//     this.items.push(newNote);
//   }

//   removeNote(text) {
//     this.items.forEach(item => {
//       if (item.text === text) {
//         const idx = this.items.indexOf(item);
//         this.items.splice(idx, 1);
//         return;
//       }
//       console.log('There is no such NOTE');
//     });
//     return;
//   }

//   updatePriority(text, newPriority) {
//     const idx = this.items.findIndex(item => item.text === text);
//     if (!!~idx) {
//       this.items[idx] = { ...this.items[idx], priority: newPriority };
//       return;
//     }
//     console.log('NO NOTE');
//   }
// }

// const myNotes = new Notes([]);
// myNotes.addNote({
//   text: 'My first note',
//   priority: Notes.Priority.LOW,
// });
// myNotes.addNote({ text: 'My second note', priority: Notes.Priority.NORMAL });

// console.log(myNotes);
// myNotes.updatePriority('My first note', Notes.Priority.HIGH);
// myNotes.updatePriority('My second note', Notes.Priority.HIGH);
// myNotes.updatePriority('My third note', Notes.Priority.HIGH);
// console.log(myNotes);

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }

//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle);

// const secondToggle = new Toggle();
// console.log(secondToggle.on);

// class Blogger {
//   constructor({ email, age, numberOfPosts, topics = [] } = {}) {
//     this.email = email;
//     this.age = age;

//     this.numberOfPosts = numberOfPosts;

//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCout(value) {
//     this.numberOfPosts += value;
//     return this;
//   }
// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 28,
//   numberOfPosts: 343,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango.updatePostCout(10));

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(items = []) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const idx = this.items.findIndex(item => item.text === text);
//     if (!!~idx) {
//       this.items.splice(idx, 1);
//       return;
//     }
//     console.log('There is no NOTE');
//   }

//   updatePriority(text, newPriority) {
//     const el = this.items.find(item => item.text === text);
//     const idx = this.items.indexOf(el);
//     if (!!~idx) {
//       this.items.splice(idx, 1, { ...el, priority: newPriority });
//       return;
//     }
//     console.log('NO NOTE');
//   }
// }

// const myNotes = new Notes([]);
// myNotes.addNote({ text: 'My first note', priority: Notes.Priority.LOW });
// myNotes.addNote({ text: 'My second note', priority: Notes.Priority.NORMAL });
// console.log(myNotes);
// myNotes.updatePriority('My first note', Notes.Priority.HIGH);
// console.log(myNotes);

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Change code below this line

// const child = Object.create(parent);
// // Change code above this line
// child.name = 'Jason';
// child.age = 27;

// console.log(child);
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     const idx = this.items.findIndex(item => item === itemToRemove);
//     if (!!~idx) {
//       this.items.splice(idx, 1);
//       return;
//     }

//     console.log('NO ITEM');
//   }
// }
// Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = `${str}${this.value}`;
//   }

//   padBoth(str) {
//     this.value = `${str}${this.value}${str}`;
//   }
// }
// Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   // Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   // Change code above this line
// }

// const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(car);
// const car2 = new Car({ brand: 'bmw', model: 'X5', price: 58900 });

// const car3 = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

// getBrand() {
//   return this.#brand;
// }

// changeBrand(newBrand) {
//   this.#brand = newBrand;
// }
// get brand() {
//   return this.#brand;
// }

// set brand(newBrand) {
//   this.#brand = newBrand;
// }

// get model() {
//   return this.#model;
// }

// set model(newModel) {
//   this.#model = newModel;
// }

// get price() {
//   return this.#price;
// }

// set price(newPrice) {
//   this.#price = newPrice;
// }

// getModel() {
//   return this.model;
// }

// updateModel(newModel) {
//   this.model = newModel;
// }

// getPrice() {
//   return this.price;
// }

// setPrice(newPrice) {
//   this.price = newPrice;
// }
// Change code above this line
// }

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Error! Price exceeds the maximum';
//     }
//     return 'Success! Price is within acceptable limits';
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
// }

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, accessLevel, blacklistedEmails = [] }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = blacklistedEmails;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email) ? true : false;
  }
  // Change code above this line
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
