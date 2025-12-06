// const stones = [
//   {
//     name: 'Smaragd',
//     price: 1300,
//     quantity: 4,
//   },
//   {
//     name: 'Diamond',
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: 'Sapfir',
//     price: 400,
//     quantity: 7,
//   },
//   {
//     name: 'Aquamarin',
//     price: 200,
//     quantity: 2,
//   },
// ];

// function calcTotalPrice(stones, name) {
//   for (const stone of stones) {
//     if (stone.name === name) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return 'NO that stone';
// }

// console.log(calcTotalPrice(stones, 'Diamond'));
// console.log(calcTotalPrice(stones, 'Stone'));

// const Transactions = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,
//   transactions: [],

//   createTransaction(amount, type) {
//     const transaction = {
//       amount,
//       type,
//       id: Date.now(),
//     };
//     return transaction;
//   },
//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transactions.DEPOSIT);
//     this.transactions.push(transaction);
//     this.balance += amount;
//   },
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return "You don' have enough money";
//     }
//     const transaction = this.createTransaction(amount, Transactions.WITHDRAW);
//     this.transactions.push(transaction);
//     this.balance -= amount;
//   },
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionsDetails(id) {
//     for (const trans of this.transactions) {
//       if (id === trans.id) {
//         return trans;
//       }
//     }
//     return 'NOT FOUND';
//   },
//   getTransactionsTotal(type) {
//     let total = 0;
//     for (const trans of this.transactions) {
//       if (trans.type === type) {
//         total += trans.amount;
//       }
//     }
//     return total;
//   },
// };

// account.deposit(1000);
// account.deposit(2500);
// account.deposit(700);
// account.withdraw(3000);
// // account.withdraw(500);
// console.log(account);

// console.log(account.getBalance());

// // console.log(account.getTransactionsDetails(Date.now()));

// console.log(account.getTransactionsTotal(Transactions.DEPOSIT));

// {
//   name: '🍎', price:50,
// }
// {
//   name: '🍇', price:70,
// }
// {
//   name: '🍋',price:60,
// }
// {
//   name: '🍓',price:110,
// }

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   addProduct(product) {
//     const { items } = this;

//     // if (!items.length) {
//     //   items.push({ ...product, quantity: 1 });
//     //   return;
//     // }

//     for (const item of items) {
//       if (item.name === product.name) {
//         this.increaseQuantity(product.name);
//         // item.quantity += 1;
//         return;
//       }
//     }

//     items.push({ ...product, quantity: 1 });
//     return;
//   },
//   remove(productName) {
//     const { items } = this;
//     for (const item of items) {
//       if (item.name === productName) {
//         items.splice(items.indexOf(item), 1);
//         return;
//       }
//     }
//     return 'There is NO fruit with that name';
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;
//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {
//     const { items } = this;
//     for (const item of items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     const { items } = this;
//     for (const item of items) {
//       if (item.name === productName && item.quantity > 1) {
//         item.quantity -= 1;
//         return;
//       }
//       if (item.quantity === 1 && item.name === productName) {
//         this.remove(productName);
//         return;
//       }
//     }
//   },
// };

// cart.addProduct({
//   name: '🍎',
//   price: 50,
// });
// cart.addProduct({
//   name: '🍇',
//   price: 70,
// });
// cart.addProduct({
//   name: '🍋',
//   price: 60,
// });
// cart.addProduct({
//   name: '🍓',
//   price: 110,
// });
// cart.addProduct({
//   name: '🍎',
//   price: 50,
// });
// cart.addProduct({
//   name: '🍋',
//   price: 60,
// });
// cart.addProduct({
//   name: '🍋',
//   price: 60,
// });
// cart.addProduct({
//   name: '🍋',
//   price: 60,
// });
// cart.addProduct({
//   name: '🍋',
//   price: 60,
// });
// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍓');
// cart.addProduct({
//   name: '🍓',
//   price: 110,
// });
// cart.addProduct({
//   name: '🍓',
//   price: 110,
// });

// console.log(cart.countTotalPrice());

// console.table(cart.getItems());

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);

// Change code above this line

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const keys = Object.keys(object);

//   // Change code above this line
//   return keys.length;
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   salaries = Object.values(salaries);

//   for (const salary of salaries) {
//     totalSalary += salary;
//   }

//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   console.log(color);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(rgbColors);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const { name, price } of products) {
//     if (name === productName) {
//       return price;
//     }
//   }
//   return null;
// }

// function getAllPropValues(propName) {
//   const values = [];
//   for (const product of products) {
//     const keys = Object.keys(product);
//     // console.log(keys);
//     if (keys.includes(propName)) {
//       values.push(product[propName]);
//     }
//   }
//   return values;
// }

// function calculateTotalPrice(productName) {
//   for (const { name, quantity, price } of products) {
//     if (name === productName) {
//       return quantity * price;
//     }
//   }
//   return 0;
// }

// console.log(calculateTotalPrice('Droid'));

// console.log(getProductPrice('Scanner'));

// console.log(getAllPropValues('quantity'));
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   return {
//     completed,
//     priority,
//     category,
//     ...data,
//   };
// Change code above this line
// }
// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
/**
 *
//  * @param {Array} arr
//  * @param  {...any} args
//  * @returns {Array} matches
//  */
// function findMatches(arr, ...args) {
//   const matches = []; // Don't change this line

//   for (const arg of args) {
//     if (arr.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     // 'Deleting book <назва книги>';
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     const idx = this.books.indexOf(oldName);
//     this.books.splice(idx, 1, newName);
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     const idx = potions.indexOf(potionName);
//     potions.splice(idx, 1);
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     const idx = potions.indexOf(oldName);
//     potions.splice(idx, 1, newName);
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { potions } = this;

//     for (const { name } of potions) {
//       if (name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     potions.push(newPotion);
//     return;
//   },
//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === potionName) {
//         potions.splice(i, 1);
//         return;
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === oldName) {
//         potions[i].name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });

// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// atTheOldToad.removePotion('Speed potion');
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');

// console.log(atTheOldToad.getPotions());

// function transformUserName({ firstName, lastName, ...props }) {
//   // console.log(props);

//   return { fullName: `${firstName} ${lastName}`, ...props };
// }

// console.log(
//   transformUserName({
//     firstName: 'Inga',
//     lastName: 'Mostova',
//     age: 28,
//     sports: ['soccer', 'volleyball', 'tennis'],
//     id: Date.now(),
//   })
// );

// function fnA(message, callback) {
//   console.log(message);

//   callback(100);
// }

// function fnB(number) {
//   console.log('LOG form fnB', number);
// }

// fnA('Mango', fnB);

// function doMath(a, b, callback) {
//   console.log(callback(a, b));
// }

// doMath(5, 2, sum);
// doMath(5, 2, difference);
// doMath(5, 2, dobutok);
// doMath(5, 2, rest);
// doMath(5, 2, (x, y) => x / y);

// function sum(x, y) {
//   return x + y;
// }

// function difference(x, y) {
//   return x - y;
// }

// function dobutok(x, y) {
//   return x * y;
// }

// function rest(x, y) {
//   return x % y;
// }

// function filterArr(array, callback) {
//   const filteredArr = [];

//   for (const el of array) {
//     console.log(callback(el));
//     console.log(el);
//     if (callback(el)) {
//       filteredArr.push(el);
//     }
//   }
//   return filteredArr;
// }

// const first = el => el >= 3;
// const second = el => el <= 2;
// const second = el => { `
//   if (el <= 2) {
//     return true;
//   }
//   return false;
// };

// console.log(filterArr([1, 2, 3, 4, 5, 6, 7], first));
// console.log(filterArr([1, 2, 3, 4, 5, 6, 7, -2, -23, -101], second));

// const fruits = [
//   { name: '🍓', qty: 100, isFresh: true },
//   { name: '🍇', qty: 170, isFresh: false },
//   { name: '🍋', qty: 200, isFresh: true },
// ];

// function filterArr(array, callback) {
//   const filteredArr = [];

//   for (const el of array) {
//     if (callback(el.qty)) {
//       filteredArr.push(el);
//     }
//   }
//   return filteredArr;
// }

// const fn = el => el > 150;

// console.log(filterArr(fruits, fn));

// function fnA(par) {
//   const a = 'Inner variable in fnA';

//   function fnB() {
//     console.log('Call from fnB');
//     console.log(a);
//     console.log(par);
//   }

//   return fnB;
// }

// const fnC = fnA(555);
// fnC();
// console.log(fnC);

// function makeShef(name) {
//   function makeDish(dish) {
//     console.log(`${name} makes ${dish}`);
//   }

//   return makeDish;
// }

// const inga = makeShef('Inga');

// console.dir(inga);
// inga('pizza');
// inga('cake');

// const floatPoint = 3.456789;
// const someInt = Math.round(floatPoint);
// const withDec = Number(floatPoint.toFixed(2));

// function decimals(round) {
//   function fix(number) {
//     console.log(Number(number.toFixed(round)));
//   }

//   return fix;
// }

// round2 = decimals(4);
// console.dir(round2);
// round2(floatPoint);

// function countSalary(employer, baseSalary = 0) {
//   let salary = baseSalary;

//   return {
//     add(amount) {
//       salary += amount;
//       return;
//     },
//     remove(amount) {
//       salary -= amount;
//       return;
//     },
//     getCurrentSalary() {
//       return `${employer} your current salary is ${salary}`;
//     },
//   };
// }

// const salaryManager = countSalary('Inga', 20000);

// console.dir(salaryManager);

// console.log(salaryManager.getCurrentSalary());
// salaryManager.add(5000);
// console.log(salaryManager.getCurrentSalary());
// salaryManager.remove(3000);
// console.log(salaryManager.getCurrentSalary());

// const arr = [2, 6, 1, 7, 3];
// function each(arr, callback) {
//   let total = 0;

//   arr.forEach(item => {
//     total = callback(total, item);
//   });

//   return total;
// }

// const add = (a, b) => a + b;

// const sum = (a, b) => a * b;

// const division = (a, b) => a - b;

// console.log(each(arr, add));
// console.log(each(arr, division));

// const arr = [2, 6, 1, 7, 3];

// arr.forEach((item, idx, arr) => {
//   console.log(item);
//   console.log(idx);
//   console.log(arr);
// });
// const products = [
//   { name: 'apple', price: 100, quantity: 7 },
//   { name: 'lemon', price: 70, quantity: 12 },
//   { name: 'grape', price: 150, quantity: 5 },
// ];

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
// }

// const logger = obj => console.log(obj);

// const logPrice = ({ price, quantity }) => console.log(price * quantity);

// createProduct(products[2], logPrice);

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   balance: 3400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > this.balance) {
//       onError('Недостатньо коштів на балансі');
//       return;
//     }

//     if (amount > TRANSACTION_LIMIT) {
//       onError('Ліміт транзакцій перевищено');
//       return;
//     }
//     this.balance -= amount;
//     onSuccess(`${amount} успішно знято, поточний баланс - ${this.balance}`);
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount <= 0) {
//       onError('Введіть коректну суму поповнення');
//       return;
//     }

//     if (amount > TRANSACTION_LIMIT) {
//       onError('Ліміт транзакцій перевищено');
//       return;
//     }
//     this.balance += amount;
//     onSuccess(`${amount} успішно покладено, поточний баланс - ${this.balance}`);
//   },
// };

// const handleSuccess = mes => alert(mes);
// const handleError = mes => alert(mes);

// account.deposit(-700, handleSuccess, handleError);
// account.withdraw(900, handleSuccess, handleError);
// account.deposit(1500, handleSuccess, handleError);
// account.deposit(700, handleSuccess, handleError);

// function logItems(items) {
//   // console.log(items);
//   items.forEach((item, idx) => {
//     console.log(`${idx + 1} - ${item}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);

// const calculateAverage = (...args) => {
//   let total = 0;
//   args.forEach(item => (total += item));
//   return total / args.length;
// };

// console.log(calculateAverage(1, 15, 22, 43, 7));

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//   acc += number;
//   return acc;
// }, 0);

// console.log(total);

// const salary = {
//   mango: 100,
//   poly: 200,
//   ajjax: 150,
// };

// const totalSalary = Object.values(salary).reduce((acc, sal) => acc + sal, 0);
// console.log(totalSalary);

// const players = [
//   { name: 'Mango', time: 310 },
//   { name: 'Poly', time: 470 },
//   { name: 'Kiwi', time: 230 },
//   { name: 'Ajax', time: 150 },
//   { name: 'Chelsea', time: 80 },
// ];

// const totalTime = players.map(player => player.time).reduce((acc, value) => acc + value, 0);
// console.log(totalTime);

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const allTags = tweets
//   .reduce((acc, tweet) => {
//     // console.log(acc);
//     acc.push(...tweet.tags);
//     return acc;
//   }, [])
//   .filter((item, idx, arr) => {
//     if (arr.indexOf(item) === idx) {
//       return item;
//     }
//   });

// const allTags = tweets.flatMap(tweet => tweet.tags);
// console.log(allTags);

// const stats = allTags.reduce((acc, tag) => {
//   // if (acc.hasOwnProperty(tag)) {
//   //   acc[tag] += 1;
//   //   return acc;
//   // }
//   // acc[tag] = 1;
//   // console.log(acc);
//   // return acc;
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(stats);

const str = 'aaBrtwabtt';
const str2 = 'qwertqwertqwertyavsdf';

// const makeObj = str => {
//   const arr = str.split('');
//   const result = arr.reduce((acc, item) => {
//     // if (!acc.hasOwnProperty([item])) {
//     //   acc[item] = 1;
//     //   return acc;
//     // }
//     if (!(item in acc)) {
//       acc[item] = 1;
//       return acc;
//     }
//     acc[item] += 1;
//     return acc;
//   }, {});
//   return result;
// };

// const makeObj = str =>
//   str
//     .split('')
//     .reduce(
//       (acc, item) =>
//         !acc.hasOwnProperty([item]) ? { ...acc, [item]: 1 } : { ...acc, [item]: acc[item] + 1 },
//       {}
//     );

// console.log(makeObj(str2));

// const cars = ['Honda', 'Audi', 'BMW', 'Skoda', 'Ford', 'Renault'];

// const makeString = arr =>
//   arr.reduce(
//     (acc, item, idx, arr) => {
//       return acc + `${idx + 1} - ${item}\n`;
//     },
//     arr.length ? `Зашальна кількість автомобілів: ${arr.length}\n` : 'NO Cars left'
//   );

// console.log(makeString(cars));
// console.log(makeString([]));

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

const result = fruitBasket.reduce((acc, fruit) => {
  // if (acc.hasOwnProperty(fruit)) {
  //   acc[fruit] += 1;
  //   return acc;
  // }

  // acc[fruit] = 1;
  // return acc;
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(result);
