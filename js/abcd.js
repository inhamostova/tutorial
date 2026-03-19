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
