// class Car {
//   static descr = 'This is STATIC option';
//   static logInfo(carObj) {
//     console.log('carObj', carObj);
//   }

//   constructor({ model, brand, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// const car1 = new Car({ brand: 'Audi', model: 'Q5', price: 35000 });
// console.log(Car.descr);
// Car.logInfo(car1);

// console.log(car1);

// const user = {
//   name: 'Inga',
//   age: 28,

//   getInfo() {
//     return `My name is ${this.name}. I'm ${this.age} years old`;
//   },
// };
// const fn = user.getInfo;
// console.log(fn());
// console.log(user.getInfo());

// const Car = function ({ brand, price } = {}) {
//   this.brand = brand;
//   this.price = price;
// };

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// const car1 = new Car({ brand: 'Audi', price: 35000 });
// const car2 = new Car({ brand: 'BMW', price: 25000 });
// console.log(car2.getPrice());

// class Counter {
//   constructor() {
//     this.value = 0;
//   }

//   increment() {
//     this.value++;
//   }
// }

// const counter = new Counter();
// const fn = counter.increment;
// counter.increment();
// console.log(counter);

// class BankAccount {
//   #balance;

//   constructor({ balance } = {}) {
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       return 'Недостатньо коштів';
//     }
//     this.#balance -= amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount({ balance: 1200 });
// account.deposit(300);
// console.log(account.withdraw(700));
// console.log(account.getBalance());

// 7. Наслідування

// Створи:

// клас User

// name

// email

// клас Admin, який наслідує User

// role

// метод deleteUser(userName)

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// class Admin extends User {
//   constructor({ name, email }) {
//     super(name, email);

//     this.role = 'ADMIN';
//   }
// }
// const admin = new Admin({ name: 'Inga', email: 'inga@mail.com' });
// console.log(admin);

// Створи клас Product:

// name

// price

// І клас Cart:

// масив товарів

// методи:

// addProduct(product)

// removeProduct(name)

// getTotalPrice()

// class Product {
//   constructor({ name, price }) {
//     this.name = name;
//     this.price = price;
//   }
// }

// const apple = new Product({ name: 'apple', price: 10 });
// const lemon = new Product({ name: 'lemon', price: 7 });

// class Cart {
//   constructor(items) {
//     this.items = items;
//   }

//   getTotalPrice() {
//     return this.items.reduce((acc, { price, qty }) => (acc += price * qty), 0);
//   }

//   addProduct(product) {
//     for (const { name } of this.items) {
//       if (name === product.name) {
//         this.increment(name);
//         return;
//       }
//     }

//     this.items.push({ ...product, qty: 1 });
//   }

//   removeProduct(name) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       if (name === this.items[i].name) {
//         this.items.splice(i, 1);
//         return 'Продукт успішно видалений';
//       }
//     }
//     return 'Такого продукту немає в корзині';
//   }

//   increment(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.qty += 1;
//         return;
//       }
//     }
//   }

//   decrement(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         if (item.qty === 1) {
//           this.removeProduct(item.name);
//           return;
//         }
//         item.qty -= 1;
//       }
//     }
//   }
// }

// const cart = new Cart([]);

// cart.addProduct(apple);
// cart.addProduct(lemon);
// cart.addProduct(apple);

// console.log(cart.removeProduct('lemon'));
// cart.decrement('apple');
// cart.decrement('apple');

// console.log(cart.getTotalPrice());

// class Counter {
//   constructor() {
//     this.value = 0;
//   }

//   increment() {
//     this.value++;
//   }
// }

// const counter = new Counter();
// const fn = () => counter.increment();

// fn();
// console.log(counter);

// class Hero {
//   constructor(name = 'hero', xp = 0) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     this.xp += amount;
//     return `${this.name} gain ${amount} experience`;
//   }
// }

// class Warrior extends Hero {
//   constructor({ name, xp, weapon } = {}) {
//     super(name, xp);
//     this.weapon = weapon;
//   }

//   attack() {
//     return `${this.name} attacks with ${this.weapon}`;
//   }
// }

// const mango = new Warrior({ name: 'Mango', weapon: 'knight' });
// console.log(mango.gainXp(1000));
// console.log(mango.attack());
// const objA = {
//   a: 10,
// };
// console.log(objA);

// console.log([1, 2, 3].hasOwnProperty('name'));

// class User {
//   constructor(val1, val2) {
//     this.name = val1;
//     this.email = val2;
//   }

//   getEmail() {
//     return this.email;
//   }
// }

// const user1 = new User('Inga', 'inga@mail.com');
// console.log(user1.getEmail());

// class Blogger {
//   constructor({ email, age, numberOfPosts, topics } = {}) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostsCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo());
// mango.updatePostsCount(5);
// console.log(mango);

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     if (this.items.includes(newItem)) {
//       return `${newItem} is already in Storage`;
//     }
//     this.items.push(newItem);
//     return this.items;
//   }

//   removeItem(itemToRemove) {
//     const idx = this.items.findIndex(item => item === itemToRemove);
//     // console.log(!!~idx);

//     if (!!~idx) {
//       this.items.splice(idx, 1);
//       return `${itemToRemove} succesfully deleted`;
//     }

//     return `${itemToRemove} is NOT found`;
//   }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// console.log(storage.addItem('🍓'));
// console.log(storage.addItem('🍓'));

// console.log(storage.removeItem('apple'));
// console.log(storage.getItems());

// class User {
//   #email;
//   #login;
//   constructor({ email, login }) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const mango = new User({ email: 'mango@mail.com', login: 'Mango' });
// mango.login = 'qwerty';
// console.log(mango.login);

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(arr) {
//     this.items = arr;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const idx = this.items.findIndex(item => item.text === text);

//     if (!!~idx) {
//       this.items.splice(idx, 1);
//       return 'Note succesfully remove';
//     }

//     return `Note NOT found`;
//   }

//   updatePriority(text, newPriority) {
//     const noteToUpdate = this.items.find(item => item.text === text);

//     if (noteToUpdate) {
//       noteToUpdate.priority = newPriority;
//       return 'Note succesfully update';
//     }

//     return 'Note is NOT found';
//   }
// }

// const myNotes = new Notes([]);
// myNotes.addNote({ text: 'My first Note', priority: Notes.Priority.LOW });
// myNotes.addNote({ text: 'My second Note', priority: Notes.Priority.HIGH });
// myNotes.addNote({ text: 'My third Note', priority: Notes.Priority.NORMAL });

// console.log(myNotes.updatePriority('My first Not', Notes.Priority.NORMAL));
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
// // console.log(firstToggle);

// const secondToggle = new Toggle();
// secondToggle.toggle();
// console.log(secondToggle);

// const Foo = function ({ name, age }) {
//   this.name = name;
//   this.age = age;
// };

// Foo.prototype.sayHello = function () {
//   return `Hello from Foo, ${this.name}`;
// };

// const a = new Foo({ name: 'AAA', age: 30 });
// console.log(a.sayHello());

// console.log(Object.getPrototypeOf(a) === Foo.prototype);

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
// padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
// padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.

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
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// class Storage {
//   constructor(arr) {
//     this.items = arr;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     const idx = this.items.indexOf(itemToRemove);

//     if (!!~idx) {
//       this.items.splice(idx, 1);
//     }
//   }
// }

// const numbers = [5, 10, 15, 20, 25];

// const numbersGraterTen = numbers.filter(number => number > 10);
// console.log(numbersGraterTen);
// const total = numbers.reduce((acc, num) => acc + num, 0);
// console.log(total);

// const calculator = {
//   value: 0,
//   add(num) {
//     this.value += num;
//   },
//   subtract(num) {
//     this.value -= num;
//   },
//   getValue() {
//     return this.value;
//   },
// };

// calculator.add(10);
// calculator.subtract(3);
// console.log(calculator.getValue());

// const players = [
//   { name: 'Mango', score: 80 },
//   { name: 'Poly', score: 120 },
//   { name: 'Ajax', score: 100 },
// ];

// const playerWithHighestScore = players.reduce((acc, player) => {
//   if (acc.score < player.score) {
//     return player;
//   }
//   return acc;
// });
// const names = players.map(player => player.name);
// const playerWithHighestScore = players.reduce((acc, player) =>
//   acc.score < player.score ? player : acc
// );

// console.log(playerWithHighestScore);
// Методи:

// getValue() → повертає рядок

// padEnd(str)

// padStart(str)

// padBoth(str)

// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.padEnd(str);
//     this.padStart(str);
//   }
// }

// const builder = new StringBuilder('.');
// builder.padStart('^');
// builder.padEnd('^');
// builder.padBoth('-');

// console.log(builder.getValue());

// const numbers = [1, 2, 3, 4, 5];

// const obj = numbers.reduce(
//   (acc, num) => {
//     if (num % 2) {
//       acc.odd += num;
//       return acc;
//     }
//     acc.even += num;
//     return acc;
//   },
//   { even: 0, odd: 0 }
// );
// const obj = numbers.reduce(
//   (acc, num) => (num % 2 ? { ...acc, odd: acc.odd + num } : { ...acc, even: acc.even + num }),
//   {
//     even: 0,
//     odd: 0,
//   }
// );

// console.log(obj);

// const tweets = [
//   { id: '1', likes: 5, tags: ['js', 'node'] },
//   { id: '2', likes: 10, tags: ['html', 'css'] },
//   { id: '3', likes: 7, tags: ['js', 'react'] },
// ];

// const allTags = tweets.flatMap(tweet => tweet.tags);
// console.log(allTags);

// const stats = allTags.reduce((acc, tag) => {
//   if (!(tag in acc)) {
//     acc[tag] = 1;
//     return acc;
//   }
//   acc[tag] += 1;
//   return acc;
// }, {});

// const stats = allTags.reduce((acc, tag) => {
//   acc[tag] = (acc[tag] ?? 0) + 1;
//   return acc;
// }, {});

// console.log(stats);

// class Storage {
//   constructor(arr) {
//     this.items = arr;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//       return 'Item succesfully added';
//     }
//     return 'Item is already in storage';
//   }

//   removeItem(item) {
//     const idx = this.items.indexOf(item);
//     if (!!~idx) {
//       this.items.splice(idx, 1);
//       return 'Item succesfully removed';
//     }
//     return 'Item is NOT found';
//   }
// }

// const storage = new Storage(['apple', 'banana']);
// console.log(storage.addItem('lemon'));
// console.log(storage.removeItem('apple'));
// console.log(storage.getItems());

// const numbers = [1, 2, 2, 3, 3, 3, 4];

// const obj = numbers.reduce((acc, num) => {
//   acc[num] = (acc[num] ?? 0) + 1;
//   return acc;
// }, {});

// console.log(obj);

// const users = [
//   { name: 'Mango', friends: ['Poly', 'Ajax'] },
//   { name: 'Poly', friends: ['Mango'] },
//   { name: 'Ajax', friends: ['Mango', 'Poly'] },
// ];

// const uniqueFriends = [...new Set(users.flatMap(user => user.friends))];
// const uniqueFriends = users
//   .flatMap(user => user.friends)
//   .filter((friend, idx, arr) => arr.indexOf(friend) === idx);
// console.log(uniqueFriends);

// Методи: addUser(name);

// removeUser(name);

// hasUser(name);

// getUsers();

// class UserManager {
//   constructor(arr = []) {
//     this.users = arr;
//   }
//   getUsers() {
//     return this.users;
//   }

//   hasUser(name) {
//     return this.users.includes(name);
//   }

//   addUser(name) {
//     if (!this.hasUser(name)) {
//       this.users.push(name);
//       return `User ${name} added`;
//     }
//     return 'user already exist';
//   }

//   removeUser(name) {
//     if (this.hasUser(name)) {
//       const idx = this.users.indexOf(name);
//       this.users.splice(idx, 1);
//       return `User ${name} removed`;
//     }
//     return 'No user';
//   }
// }

// const manager = new UserManager();
// {
//   completed: 250,
//   pending: 200
// }

// const orders = [
//   { id: 1, amount: 100, status: 'completed' },
//   { id: 2, amount: 200, status: 'pending' },
//   { id: 3, amount: 150, status: 'completed' },
// ];

// const stats = orders.reduce((acc, { amount, status }) => {
//   acc[status] = (acc[status] ?? 0) + amount;
//   return acc;
// }, {});

// console.log(stats);
// {
//   20: ['Mango', 'Ajax'],
//   25: ['Poly']
// }

// const users = [
//   { name: 'Mango', age: 20 },
//   { name: 'Poly', age: 25 },
//   { name: 'Ajax', age: 20 },

//   { name: 'Tanya', age: 28 },
//   { name: 'Inga', age: 28 },
// ];

// const obj = users.reduce((acc, { name, age }) => {
//   if (acc[age]) {
//     acc[age].push(name);
//     return acc;
//   }
//   acc[age] = [name];
//   return acc;
// }, {});

// const obj = users.reduce((acc, { name, age }) => {
//   acc[age] = acc[age] ?? [];
//   acc[age].push(name);
//   return acc;
// }, {});

// console.log(obj);

// const user = {
//   name: 'Mango',
//   greet() {
//     return `Hello, ${this.name}`;
//   },
// };

// const greet = user.greet.bind(user);
// const greet = () => user.greet();
// console.log(greet());
// const products = [
//   { name: 'apple', price: 20, qty: 3 },
//   { name: 'banana', price: 5, qty: 6 },
// ];

// function getTotalPrice(products, productName) {
//     return products.reduce((acc, {name,price,qty}) => {
//         if (name === productName) {
//             return price * qty;
//         }
//         return acc;
//     },0)

// }

// function getTotalPrice(products, productName) {
//   return products.reduce(
//     (acc, { name, qty, price }) => (name === productName ? qty * price : acc),
//     0
//   );
// }

// console.log(getTotalPrice(products, 'apple')); // 30

// console.log(getTotalPrice(products, 'banana'));

// function calcDays(depth) {
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   let total = 0;
//   let days = 0;
//   while (total < depth) {
//     total += daySpeed;
//     days += 1;
//     if (total < depth) {
//       total -= nightSpeed;
//     }
//   }
//   for (let total = 0; total < depth; total += daySpeed) {
//     days += 1;
//     if (total < depth) {
//       total -= nightSpeed;
//     }
//   }
//   for (total = 0; total < depth; total -= nightSpeed) {
//     total += daySpeed;
//     days += 1;
//     if (total >= depth) {
//       return days;
//     }
//   }
//   return days;
// }
// console.log(calcDays(42));
// console.log(calcDays(17));
// console.log(calcDays(18));

// Singleton pattern JS
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

// const counter = counterModule();
// const counter = counterModule.getInstance();
// counter.increaseCounter();
// console.log(counter.getCounter());
// // console.log(counterModule.getInstance().getCounter());
// const counter2 = counterModule.getInstance();
// console.log(counter2.getCounter());
// console.log(counter === counter2);

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// копіювання обєкта
// const obj2 = Object.assign(obj);
// console.log(obj2 === obj);

// function sum(n) {
//   let total = n;
//   if (n > 0) {
//     total += sum(n - 1);
//   }
//   return total;
// }
// function sum(n) {
//   if (n === 1) return 1;
//   return n + sum(n - 1);
// }

// console.log(sum(3));

// const arr = [1, 2, 3, 4];

// function sumArray(arr) {
//   if (!arr.length) return 0;
//   return arr[0] + sumArray(arr.slice(1));
// }

// console.log(sumArray(arr));

// function createCounter() {
//   let count = 0;
//   return function () {
//     count += 1;
//     return count;
//   };
// }

// const counter = createCounter();
// counter();
// counter();
// console.log(counter());

// function createAdder(x) {
//   return function (a) {
//     return x + a;
//   };
// }

// const add5 = createAdder(5);

// console.log(add5(10)); // 15
// console.log(add5(3)); // 8

// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const fn1 = outer();
// const fn2 = outer();

// fn1();
// fn1();
// fn2();
// fn2();

// function createCounter() {
//   let count = 0;

//   return {
//     increment() {
//       count += 1;
//     },
//     decrement() {
//       count -= 1;
//     },
//     getValue() {
//       return count;
//     },
//   };
// }

// const counterA = createCounter();
// const counterB = createCounter();

// counterA.increment();
// counterA.increment();

// counterB.increment();

// console.log(counterA.getValue());
// console.log(counterB.getValue());

// counterA.count = 100;
// console.log(counterA);
// console.log(counterB);

// console.log(counterA.getValue());

// const overlayEl = document.querySelector('.overlay');
// const modalBtn = document.querySelector('.btn');
// const modalCloseBtn = overlayEl.querySelector('.btn-close');
// const body = document.querySelector('body');

// console.log(modalBtn);

// modalBtn.addEventListener('click', () => {
//   overlayEl.classList.toggle('is-open');
//   body.classList.toggle('no-scroll');
// });

// modalCloseBtn.addEventListener('click', () => {
//   overlayEl.classList.toggle('is-open');
//   body.classList.toggle('no-scroll');
// });

// const numbers = [3, 7, 2, 9, 12, 5];

// const obj = numbers.reduce(
//   (acc, num) => {
//     if (num % 2) {
//       console.log(acc.oddSum);
//       acc.oddSum += num;
//       return acc;
//     }
//     acc.even.push(num);
//     return acc;
//   },
//   {
//     even: [],
//     oddSum: 0,
//   }
// );

// console.log(obj);

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
// ];

// const activeUsersNames = users.filter(user => user.active).map(user => user.name);

// const isEveryActive = users.every(user => user.active);
// console.log(isEveryActive);

// const user = {
//   name: 'Inga',
//   sayHi() {
//     return `Hi, ${this.name}`;
//   },
// };

// const fn = user.sayHi;
// const newArray = [];

// function flatten(arr) {
//   for (const num of arr) {
//     if (!Array.isArray(num)) {
//       newArray.push(num);
//     } else {
//       flatten(num);
//     }
//   }
// }

// flatten([1, [2, [3, 4]], 5]); // [1, 2, 3, 4, 5]
// console.log(newArray);

// console.log(Array.isArray([2, [3, 4]]));

// function createMultiplier(x) {
//   return function (num) {
//     return num * x;
//   };
// }

// const double = createMultiplier();

// console.log(double(5)); // 10
// double(3); // 6

// const products = [
//   { name: 'apple', price: 10, qty: 3 },
//   { name: 'banana', price: 5, qty: 6 },
//   { name: 'apple', price: 10, qty: 2 },
// ];

// const productStats = products.reduce((acc, { name, price, qty }) => {
//   if ([name] in acc) {
//     acc[name] = acc[name] + qty * price;
//     return acc;
//   }

//   acc[name] = price * qty;
//   return acc;
// }, {});

// const productStats = products.reduce((acc, { name, price, qty }) => {
//   acc[name] = (acc[name] || 0) + price * qty;
//   return acc;
// }, {});

// console.log(productStats);

// const numbers = [1, 2, 3, 4, 5, 6];

// const obj = numbers.reduce(
//   (acc, num) => {
//     num % 2 === 0 ? acc.even.push(num) : acc.odd.push(num);
//     acc.total += num;
//     return acc;
//   },
//   { even: [], odd: [], total: 0 }
// );

// const users = [
//   { name: 'Mango', skills: ['js', 'react'] },
//   { name: 'Poly', skills: ['html', 'css'] },
//   { name: 'Ajax', skills: ['js', 'node'] },
// ];

// const stats = users
//   .flatMap(user => user.skills)
//   .reduce((acc, skill) => {
//     acc[skill] = (acc[skill] ?? 0) + 1;
//     return acc;
//   }, {});

// console.log(stats);

// const user = {
//   name: 'Inga',
//   sayHi() {
//     return this.name;
//   },
// };

// const obj = {
//   name: 'Test',
//   sayHi: user.sayHi,
// };

// const fn = obj.sayHi;

// // console.log(obj.sayHi());
// fn();
// const data = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//     },
//   },
// };

// function countProps(obj) {
//   const values = Object.values(obj);
//   let total = 0;

//   for (const value of values) {
//     typeof value === 'number' ? (total += value) : (total += countProps(value));
//   }

//   return total;
// }

// console.log(countProps(data));

// function createStorage() {
//   return {
//     set(key, value) {
//       this[key] = value;
//     },
//     get(key) {
//       return this[key];
//     },
//   };
// }

// const storage = createStorage();

// storage.set('a', 10);
// storage.set('b', 20);

// storage.get('a'); // 10
// storage.get('b'); // 20

// console.log(storage.get('b'));

// const orders = [
//   { id: 1, items: ['apple', 'banana'] },
//   { id: 2, items: ['banana', 'orange'] },
//   { id: 3, items: ['apple'] },
// ];

// const stats = orders
//   .flatMap(order => order.items)
//   .reduce((acc, item) => {
//     acc[item] = (acc[item] ?? 0) + 1;
//     return acc;
//   }, {});
// console.log(stats);

// const transactions = [
//   { type: 'deposit', amount: 100 },
//   { type: 'withdraw', amount: 40 },
//   { type: 'deposit', amount: 50 },
// ];

// const stats = transactions.reduce((acc, { type, amount }) => {
//   acc[type] = (acc[type] ?? 0) + amount;
//   return acc;
// }, {});

// console.log(stats);

// const user = {
//   name: 'Inga',
//   sayHi() {
//     return this.name;
//   },
// };

// const anotherUser = {
//   name: 'Test',
// };

// anotherUser.sayHi = user.sayHi;

// const result = anotherUser.sayHi;

// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f: 4,
//     },
//   },
// };

// function sumValues(obj) {
//   let total = 0;
//   const values = Object.values(obj);

//   for (const value of values) {
//     total += typeof value === 'object' ? sumValues(value) : value;
//   }

//   return total;
// }

// console.log(sumValues(obj));
// function createSecret(value = 'default') {
//   const data = {
//     value,
//   };

//   return {
//     get() {
//       return data.value;
//     },
//     set(newValue) {
//       data.value = newValue;
//     },
//   };
// }

// const secret = createSecret('12345');

// console.log(secret.get()); // '12345'
// secret.set('new');

// console.log(secret.get());

// const users = [
//   { name: 'Mango', age: 20 },
//   { name: 'Poly', age: 25 },
//   { name: 'Ajax', age: 20 },
//   { name: 'Kiwi', age: 25 },
// ];

// const stats = users.reduce((acc, { name, age }) => {
//   acc[age] = (acc[age] ?? 0) + 1;
//   return acc;
// }, {});

// console.log(stats);

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// const counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// const refs = {
//   list: document.querySelector('.js-list'),
//   item: document.querySelector('.js-item'),
// };

// const items = document.querySelectorAll('.js-item');
// const items2 = document.getElementsByClassName('js-item');
// console.log(items);

// console.log(refs.list);

// const elements = [];

// for (let i = 0; i < 3; i += 1) {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('js-item');
//   itemEl.textContent = `Item-${refs.list.children.length + i + 1}`;
//   elements.push(itemEl);
// }

// refs.list.append(...elements);
// console.log(items);

// const singleBtn = document.querySelector('#single');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// singleBtn.addEventListener('click', handleClick);

// ===============================================
// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => {
//   console.log('First callback!');
// };
// const secondCallback = () => {
//   console.log('Second callback!');
// };
// const thirdCallback = () => {
//   console.log('Third callback!');
// };

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);

const cars = [
  {
    id: 1,
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    id: 2,
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    id: 3,
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 4,
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 5,
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    id: 6,
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  //   {
  //     model: 'Audi',
  //     type: 'Q7',
  //     price: 40000,
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  //   },
  //   {
  //     model: 'BMW',
  //     type: '5 siries',
  //     price: 9000,
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  //   },
  //   {
  //     model: 'Honda',
  //     type: 'Accord',
  //     price: 20000,
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  //   },
  //   {
  //     model: 'Volvo',
  //     type: 'XC60',
  //     price: 7000,
  //     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  //   },
  //   {
  //     model: 'Honda',
  //     type: 'Civic',
  //     price: 12000,
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  //   },
  //   {
  //     model: 'Audi',
  //     type: 'Q7',
  //     price: 40000,
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  //   },
  //   {
  //     model: 'BMW',
  //     type: '5 siries',
  //     price: 9000,
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  //   },
  //   {
  //     model: 'Honda',
  //     type: 'Accord',
  //     price: 20000,
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  //   },
  //   {
  //     model: 'Volvo',
  //     type: 'XC60',
  //     price: 7000,
  //     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  //   },
  //   {
  //     model: 'Honda',
  //     type: 'Civic',
  //     price: 12000,
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  //   },
  //   {
  //     model: 'Audi',
  //     type: 'Q7',
  //     price: 40000,
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  //   },
  //   {
  //     model: 'BMW',
  //     type: '5 siries',
  //     price: 9000,
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  //   },
  //   {
  //     model: 'Honda',
  //     type: 'Accord',
  //     price: 20000,
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  //   },
  //   {
  //     model: 'Volvo',
  //     type: 'XC60',
  //     price: 7000,
  //     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  //   },
  //   {
  //     model: 'Honda',
  //     type: 'Civic',
  //     price: 12000,
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  //   },
  //   {
  //     model: 'Audi',
  //     type: 'Q7',
  //     price: 40000,
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  //   },
  //   {
  //     model: 'BMW',
  //     type: '5 siries',
  //     price: 9000,
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  //   },
  //   {
  //     model: 'Honda',
  //     type: 'Accord',
  //     price: 20000,
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  //   },
  //   {
  //     model: 'Volvo',
  //     type: 'XC60',
  //     price: 7000,
  //     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  //   },
  //   {
  //     model: 'Honda',
  //     type: 'Civic',
  //     price: 12000,
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  //   },
  //   {
  //     model: 'Audi',
  //     type: 'Q7',
  //     price: 40000,
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  //   },
  //   {
  //     model: 'BMW',
  //     type: '5 siries',
  //     price: 9000,
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  //   },
  //   {
  //     model: 'Honda',
  //     type: 'Accord',
  //     price: 20000,
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  //   },
  //   {
  //     id: 4,
  //     model: 'Volvo',
  //     type: 'XC60',
  //     price: 7000,
  //     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  //   },
];

const container = document.querySelector('.js-container');

const input = document.querySelector('.form-input');

input.addEventListener('input', onInputChange);

function createMarkup(arr) {
  return arr
    .map(
      ({ id = 'default', model, type, price, img }) => `<li class="item" data-id="${id}">
        <img class="item-img" src="${img}" alt="${model}">
        <h2>Марка - ${model}</h2>
        <p>Модель - ${type}</p>
        <p>Ціна - ${price}</p>
      </li>`
    )
    .join('');
}

container.innerHTML = createMarkup(cars);

function filterArray(value, arr) {
  return arr.filter(({ model }) => model.toLowerCase().includes(value));
}

// console.log(filterArray('ho', cars));

function onInputChange(event) {
  console.log(event.currentTarget.value);
  const filteredCars = filterArray(event.currentTarget.value, cars);
  container.innerHTML = createMarkup(filteredCars);
}
