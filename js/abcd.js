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
