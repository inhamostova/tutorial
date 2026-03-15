// const friends = ['Mango', 'Poly', 'Ajax', 'Chelsy', 'Kiwi'];

// for (const friend of friends) {
//   console.log(friend);
// }

// for (let i = 0, num = 1; i < friends.length; i += 1, num += 1) {
//   friends[i] += `-${num}`;
//   console.log(friends[i]);
// }

// console.log(friends);

// const cart = [54, 28, 105, 70, 92, 17, 120];

// function calculateTotalPrice(items) {
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// }

// console.log(calculateTotalPrice(cart));

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (const number of numbers) {
//   if (number % 2) {
//     console.log(`Not even - ${number}`);
//     continue;
//   }
//   console.log(`Even - ${number}`);
//   total += number;
// }

// console.log(total);

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = 'Login is not found';

// if (logins.includes(loginToFind)) {
//   console.log('We found IT!!!');
// } else {
//   console.log('Login is not found');
// }
// message = logins.includes(loginToFind) ? 'We found IT!!!' : message;

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = 'We found IT!!!';
//     break;
//   }
// }
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// function findLogin(allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `User ${loginToFind} found`
//     : `User ${loginToFind} NOT found`;
// }

// function findLogin(allLogins, loginToFind) {
//   let message = 'Login is not found';
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       message = 'We found IT!!!';
//       break;
//     }
//   }

//   return message;
// }

// console.log(findLogin(logins, 'poly1scute'));

// console.log(message);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// // let smallest = numbers[0];

// // for (const number of numbers) {
// //   smallest = number < smallest ? number : smallest;
// // }

// // console.log(smallest);
// const smallest = Math.min(...numbers);
// console.log(smallest);

// function findSmallestNumber(numbers) {
//   let smallest = numbers[0];
//   for (const number of numbers) {
//     smallest = number < smallest ? number : smallest;
//   }
//   return smallest;
// }

// console.log(findSmallestNumber([3, 8, 12, -2, 15]));
// console.log(findSmallestNumber([100, 54, 12, 8, 47]));
// console.log(findSmallestNumber([7, 21, 84, 15, 4]));

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let str = '';

// for (const friend of friends) {
//   str += friend + ',';
// }
// str = str.slice(0, str.length - 1);

// console.log(str);

// const str = friends.join(',');
// console.log(str);
// const string = 'Inga Mostova';
// const arr = string.split('');

// for (let i = 0; i < arr.length; i += 1) {
//   arr[i] = arr[i].toLowerCase() === arr[i] ? arr[i].toUpperCase() : arr[i].toLowerCase();
// }

// console.log(arr.join(''));

// const title = 'Top 10 benefits of React framework';

// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// const cards = ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5'];

// const cardToRemove = 'Card-3';

// const cardToInsert = 'Card-6';
// const index = 3;

// const cardToUpdate = 'Card-4';

// const idx = cards.indexOf(cardToRemove);
// if (idx !== -1) {
//   const removedCard = cards.splice(idx, 1);
//   console.log(removedCard);
// }
// console.log(cards);

// const idx = cards.indexOf(cardToUpdate);
// // console.log(cards.splice(idx, 2, 'Abrakadabra'));
// console.log(cards);
// cards[idx] = 'Abrakadabra';
// console.log(cards);

// const values = '8 11';

// const arr = values.split(' ');
// const square = arr[0] * arr[1];
// console.log(square);

// const str = 'Welcome to the future';
// const arr = str.split(' ');
// arr.pop();
// arr.shift();
// console.log(arr.join(' '));
// const rev = str.split('').reverse().join('');
// console.log(rev);

// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
//   // Change code above this line
//   return result;
// }

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   result = message.length <= maxLength ? message : message.slice(0, maxLength) + '...';
//   /// Change code above this line
//   return result;
// }

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'China':
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
//     case 'Chile':
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
//     case 'Australia':
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;
//     case 'Jamaica':
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }

//   // Change code above this line
//   return message;
// }

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   return password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
// }
// console.log(checkPassword('jqueryismjam'));

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// function checkIfCanAccessContent(subType) {
//   return subType === 'pro' || subType === 'vip';
// }

// function checkStorage(available, ordered) {
//   if (!ordered) {
//     return 'There are no products in the order!';
//   } else if (ordered > available) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   if (pricePerDroid * orderedQuantity > customerCredits) {
//     return 'Insufficient funds!';
//   }
//   return `You ordered ${orderedQuantity} droids, you have ${customerCredits - pricePerDroid * orderedQuantity} credits left`;
// }

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return 'Not enough goods in stock!';
//   }
//   return 'Order is processed, our manager will contact you.';
// }

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = SAVED_PASSWORD === password;

//   // Change code above this line
//   return isMatch;
// }

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   return `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// }

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   return orderedQuantity * pricePerItem;
// }

// function makeMessage(name, price) {
//   return `You picked ${name}, price per item is ${price} credits`;
// }

// function add(a, b, c) {
//   return a + b + c;
// }

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// const arr = [1, 'Hello', null, true, [1, 2, 3]];

// arr.length = 2;
// console.log(arr);

// arr[5] = 'Inga';
// console.log(arr.length);

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby', 'node', 'master'];
// const langs = ['cython', 'bjavascript', 'ac++', 'haskel', 'php', 'ruby'];
// let swapped;

// for (let i = 0; i < langs.length; i += 1) {
//   if (langs[0] > langs[i]) {
//     const res = langs.splice(i, 1)[0];
//     langs.unshift(res);
//   }
// }
// console.log(langs);

// for (let j = 0; j < langs.length - 1; j += 1) {
//   swapped = false;
//   for (let i = 0; i < langs.length - 1 - j; i += 1) {
//     if (langs[i][0] > langs[i + 1][0]) {
//       const temp = langs[i];
//       langs[i] = langs[i + 1];
//       langs[i + 1] = temp;
//       swapped = true;
//     }
//   }
//   if (!swapped) {
//     break;
//   }

//   console.log(`Прохід номер ${j + 1}`, langs);
// }

// console.log(langs);

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//   min = min > number ? number : min;
// }

// console.log(min);

// function bar() {
//   console.log('bar');
// }

// function baz() {
//   console.log('baz');
// }

// function foo() {
//   console.log('foo');
//   bar();
//   baz();
// }

// foo();

// function filterNumbers(numbers, ...args) {
//   const arr = [];

//   for (const number of numbers) {
//     if (args.includes(number)) {
//       arr.push(number);
//     }
//   }

//   return arr;
// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));

// function findBmi(weight, height) {
//   const finalWeight = Number(weight.replace(',', '.'));
//   const finalHeight = Number(height.replace(',', '.'));
//   return Number((finalWeight / finalHeight ** 2).toFixed(1));
// }

// console.log(findBmi('88,3', '1.75'));

// function findMin(a, b) {
//   return a < b ? a : b;
// }

// console.log(findMin(2, 5));
// console.log(findMin(3, -1));
// console.log(findMin(1, 1));

// function getRectArea(dimensions) {
//   return dimensions.split(' ')[0] * dimensions.split(' ')[1];
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('5 10'));

// function logItems(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     console.log(`${i + 1} - ${arr[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Kiwi']);

// function findLargestNumber() {
//   const arr = [...arguments];
//   let max;

//   for (const num of arr) {
//     if (typeof num === 'number') {
//       max = num;
//       break;
//     }
//   }

//   for (const item of arr) {
//     if (typeof item === 'number') {
//       if (item > max) {
//         max = item;
//       }
//     } else {
//       max = findLargestNumber(...item);
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber(1, 13, 72, 43, 55, 2));
// console.log(findLargestNumber([1, 13, 72], 43, [55, 89], 2));

// function calcAverage() {
//   let total = 0;
//   //   console.log(arguments);

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total / arguments.length;
// }

// console.log(calcAverage(1, 2, 3, 4));
// console.log(calcAverage(14, 2, 8));

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   minutes = minutes % 60;

//   return `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}`;
// }

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Express'];

// function addCourse(courses, name) {
//   if (!courses.includes(name)) {
//     courses.push(name);
//     return `Course ${name} added succesfully`;
//   }
//   return `Course is already`;
// }

// console.log(addCourse(courses, 'CSS'));
// console.log(courses);

// function removeCourse(courses, name) {
//   if (courses.includes(name)) {
//     const idx = courses.indexOf(name);
//     courses.splice(idx, 1);
//     return `Course ${name} removed succesfully`;
//   }
//   return `Course is NOT found`;
// }

// console.log(removeCourse(courses, 'Node'));
// console.log(courses);

// function updateCourse(courses, oldName, newName) {
//   if (courses.includes(oldName)) {
//     const idx = courses.indexOf(oldName);
//     courses[idx] = newName;
//     return `Course ${oldName} updated to ${newName} succesfully`;
//   }
//   return `Course is NOT found`;
// }

// console.log(updateCourse(courses, 'Node', 'Haskel'));
// console.log(courses);

// function getExtremeElements(array) {
//   const arr = [array.shift(), array.pop()];
//   return arr;
// }
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// Тобі потрібно реалізувати свою власну логіку для виконання цього завдання. Розглянь вибір методу ітерації, який пройде по всьому масиву (array), і на кожній ітерації перевірятиме, чи дорівнює елемент масиву value. Якщо так, поверниtrue, в іншому випадку поверни false.

// function includes(array, value) {
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }

//   return false;
// }

// function getEvenNumbers(start, end) {
//   const arr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (!(i % 2)) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(getEvenNumbers(6, 12));
// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for (const item of array1) {
//     if (array2.includes(item)) {
//       newArray.push(item);
//     }
//   }

//   return newArray;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function filterArray(numbers, value) {
//   const newArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }

//   return newArray;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// function findLongestWord(string) {
//   const arr = string.split(' ');
//   let longestWord = arr[0];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].length > longestWord.length) {
//       longestWord = arr[i];
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// function calculateTotal(number) {
//   let total = 0;

//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
// }
// console.log(calculateTotal(7));

// function makeArray(firstArray, secondArray, maxLength) {
//   const arr = firstArray.concat(secondArray);

//   if (arr.length > maxLength) {
//     return arr.slice(0, maxLength);
//   }

//   return arr;
// }

// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
// }
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);
//   // Change code above this line
//   return string;
// }

// function calculateEngravingPrice(message, pricePerWord) {
//   return pricePerWord * message.split(' ').length;
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let total = 0;

// const entries = Object.entries(feedback);
// console.log(entries);
// // const keys = Object.keys(feedback);
// // console.log(keys);
// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//   total += value;
// }

// console.log(total);

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.log(friends);

// function findFriendByName(allFriends, name) {
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//       return `Friend ${name} is found`;
//     }
//   }
//   return 'Friend is NOT found';
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// function getAllNames(allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }

//   return names;
// }

// console.log(getAllNames(friends));

// function getOnlineFriends(allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// }

// console.log(getOnlineFriends(friends));

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     if (!this.items.length) {
//       this.items.push({ ...product, quantity: 1 });
//       return;
//     }

//     for (const productItem of this.items) {
//       if (productItem.name === product.name) {
//         this.increaseQuantity(product.name);
//         return;
//       }
//       this.items.push({ ...product, quantity: 1 });
//       return;
//     }
//   },
//   remove(productName) {
//     for (const product of this.items) {
//       if (product.name === productName) {
//         const idx = this.items.indexOf(product);
//         this.items.splice(idx, 1);
//         return `${productName} succesfully removed from your cart`;
//       }
//     }

//     return 'There is no such product in your cart';
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;

//     for (const product of this.items) {
//       total += product.price * product.quantity;
//     }

//     return total;
//   },
//   increaseQuantity(productName) {
//     for (const product of this.items) {
//       if (product.name === productName) {
//         product.quantity += 1;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const product of this.items) {
//       if (product.name === productName) {
//         if (product.quantity === 1) {
//           this.remove(product.name);
//           return;
//         }
//         product.quantity -= 1;
//         return;
//       }
//     }
//   },
// };

// cart.add({ name: '🍓', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍌', price: 60 });
// cart.add({ name: '🍇', price: 110 });

// cart.add({ name: '🍓', price: 50 });

// console.log(cart.remove('🍋'));

// console.log(cart.getItems());

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,
//   transactions: [],
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: Date.now(),
//     };
//   },
//   deposit(amount) {
//     const trans = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(trans);
//     this.balance += trans.amount;
//     return `${trans.amount} succesfully deposit`;
//   },
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return 'NOT enough money';
//     }
//     const trans = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(trans);
//     this.balance -= trans.amount;
//     return `${trans.amount} succesfully withdraw`;
//   },
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionDetail(id) {
//     for (const trans of this.transactions) {
//       if (trans.id === id) {
//         return trans;
//       }
//     }
//   },
//   getTransactionTotal(type) {
//     let total = 0;

//     for (const trans of this.transactions) {
//       if (trans.type === type) {
//         total += trans.amount;
//       }
//     }

//     return total;
//   },
// };

// console.log(account.deposit(1000));
// console.log(account.deposit(500));
// console.log(account.getBalance());
// console.log(account.withdraw(700));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account);

// /**
//  *
//  * @param {Object} partialContact
//  * @returns {Object} new object with id
//  */

// function createContact(partialContact) {
//   return { list: 'deafult', id: generateId(), ...partialContact };
// }

// console.log(createContact({ name: 'Poly', email: 'poly@mail.com' }));
// console.log(createContact({ name: 'Mango', email: 'mango@mail.com', list: 'friends' }));

// /**
//  *
//  * @returns {String} string id
//  */
// function generateId() {
//   return '_' + Math.random().toString(36).substring(2, 9);
// }

// Доповни об'єкт квартири властивістю , значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

//
//
//

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

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.
// Поради:

// Зміни код кожного методу для роботи з новим масивом об’єктів зілля.
// Переконайся, що ти маєш правильний доступ до властивостей name і price кожного об'єкта зілля.
// Використовуй цикли або методи ітерації, щоб перебирати масив інвентаризації та виконувати необхідні перевірки та оновлення.

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
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
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

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));
// console.log(atTheOldToad.getPotions());

// function getNotEvenNumbers(numbers) {
//   //   const arr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2) {
//       continue;
//     }
//     numbers.splice(i, 1);
//     console.table(numbers);
//   }
//   return numbers;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// function getNotEvenNumbers(numbers) {
//   for (let i = numbers.length - 1; i >= 0; i -= 1) {
//     if (numbers[i] % 2) {
//       continue;
//     }
//     numbers.splice(i, 1);
//   }
//   return numbers;
// }

// // console.log(getNotEvenNumbers([2, 4, 6, 8]));
// console.log(getNotEvenNumbers(numbers));

// The updateRecords function takes 4 arguments represented by the following function parameters:

// records - an object containing several individual albums
// id - a number representing a specific album in the records object
// prop - a string representing the name of the album’s property to update
// value - a string containing the information used to update the album’s property
// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// function updateRecords(records, id, prop, value) {
//   if (value === '') {
//     delete records[id][prop];
//     return records;
//   }
//   if (prop !== 'tracks') {
//     records[id][prop] = value;
//     return records;
//   }
//   if (prop === 'tracks' && value !== '') {
//     if (records[id].hasOwnProperty(prop)) {
//       records[id][prop].push(value);
//       return records;
//     }
//     records[id][prop] = [];
//     records[id][prop].push(value);
//     return records;
//   }
// }

// User Stories:

// Your function must always return the entire records object.
// If value is an empty string, delete the given prop property from the album.
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// Note: A copy of the recordCollection object is used for the tests. Your function should not directly refer to the recordCollection object, only the function parameter.

// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// };

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me');
// updateRecords(recordCollection, 2548, 'artist', '');
// updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love');
// updateRecords(recordCollection, 2468, 'tracks', 'Free');
// updateRecords(recordCollection, 2548, 'tracks', '');
// updateRecords(recordCollection, 1245, 'albumTitle', 'Riptide');
// console.log(recordCollection);

// function filterUsers(users, callback) {
//   const arr = [];

//   users.forEach(user => {
//     if (callback(user)) {
//       arr.push(user);
//     }
//   });

//   return arr;
// }

// const isAdult = user => user.age >= 18;

// const isTeenager = user => user.age >= 13 && user.age <= 19;

// function transformUsers(users, callback) {
//   const transformedUsers = [];

//   users.forEach(user => transformedUsers.push(callback(user)));

//   return transformedUsers;
// }

// const names = transformUsers(users, user => user.name);

// console.log(names);

// console.log(filterUsers(users, isAdult));
// const teens = filterUsers(users, isTeenager);

// console.log(teens);

// function repeat(n, callback) {
//   for (let i = 0; i < n; i += 1) {
//     callback(i);
//   }
// }

// repeat(3, i => {
//   console.log(`Iteration ${i}`);
// });
// repeat(5, i => console.log(i * 2));

// const arr = [];

// repeat(4, i => arr.push(i));

// console.log(arr);

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach((number, idx, arr) => {
//   arr[idx] = number * 2;
// });

// const doubleNumbers = numbers.map(number => number * 2);
// console.log(doubleNumbers);

// const user = {
//   name: 'Inga',
//   age: 28,
//   location: {
//     city: 'Lviv',
//     country: 'Ukraine',
//     coordination: {
//       x: 56,
//       y: 12,
//     },
//   },
// };

// const user2 = { ...user };
// user2.location.city = 'Kyiv';

// console.log(user);
// console.log(user2);

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const result = Object.values(salary).reduce((acc, value) => acc + value, 0);
// console.log(result);

// const cart = [
//   { label: 'Apples', price: 100, qty: 2 },
//   { label: 'Bananas', price: 120, qty: 3 },
//   { label: 'Lemons', price: 70, qty: 4 },
// ];

// const totalPrice = cart.reduce((acc, { price, qty }) => acc + price * qty, 0);
// console.log(totalPrice);

// const tweets = [
//   {
//     id: '000',
//     likes: 5,
//     tags: ['js', 'node.js'],
//   },
//   {
//     id: '001',
//     likes: 2,
//     tags: ['html', 'css'],
//   },
//   {
//     id: '002',
//     likes: 17,
//     tags: ['html', 'js', 'node.js'],
//   },
//   {
//     id: '003',
//     likes: 8,
//     tags: ['css', 'react'],
//   },
//   {
//     id: '004',
//     likes: 0,
//     tags: ['js', 'node.js', 'react'],
//   },
// ];

// const allTags = tweets.reduce((acc, tweet) => {
//   acc.push(...tweet.tags);
//   return acc;
// }, []);

// console.log(allTags);

// const tagsStats = allTags.reduce(
//   (acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }),
// acc.hasOwnProperty(tag)
//   ? {
//       ...acc,
//       [tag]: acc[tag] + 1,
//     }
//   : {
//       ...acc,
//       [tag]: 1,
//     },
// {
//   if (acc.hasOwnProperty(tag)) {
//     return {
//       ...acc,
//       [tag]: acc[tag] + 1,
//     };
//   }
//   return {
//     ...acc,
//     [tag]: 1,
//   };
// },
//   {}
// );

// console.log(tagsStats);

// const arr = [1, 2, 3, 4, 5, 6];

// const result = arr.map(item => (item % 2 ? item : item * 2));
// const result = arr.filter(item => !(item % 2)).map(item => item * 2);
// console.log(result);

// function customMap(arr, callback) {
//   const result = [];

//   for (const item of arr) {
//     // result.push(!(item % 2) ? item * 2 : item);
//     result.push(callback(item));
//   }

//   return result;
// }

// const foo = item => (item % 2 ? item : item * 2);
// console.log(customMap(arr, foo));
// console.log(arr);

// const cars = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 12,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 314210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: false,
//   },
// ];

/**
 *
 * @param {Array} cars
 * @returns {Array} sorted cars by price ascendig
 */
// const getSortedCarsOnSale = cars =>
//   cars.filter(car => car.onSale).sort(({ price: a }, { price: b }) => a - b);
// console.log(getSortedCarsOnSale(cars));

// const getModelOnSale = cars => cars.filter(car => car.onSale).map(car => car.model);
// console.log(getModelOnSale(cars));

// const getTotalAmount = cars => cars.reduce((acc, car) => acc + car.amount, 0);
// console.log(getTotalAmount(cars));

// const sortByModel = (cars, order) =>
//   [...cars].sort(({ model: a }, { model: b }) =>
//     order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
//   );
// console.log(sortByModel(cars, 'desc'));

// const sortByAscAmount = cars => [...cars].sort((a, b) => a.amount - b.amount);
// console.log(sortByAscAmount(cars));

// const getCarsWithType = (cars, type) => cars.filter(({ type: carType }) => carType === type);
// console.log(getCarsWithType(cars, 'suv'));
// console.log(getCarsWithType(cars, 'sedan'));

// const getCarsOnSale = cars => cars.filter(car => car.onSale);
// console.log(getCarsOnSale(cars));

// const getModels = arr => arr.map(item => item.model);
// console.log(getModels(cars));

// const makeCarsWithDiscount = (arr, discount) =>
//   arr.map(item => {
//     item.price -= Math.floor(item.price * discount);
//     return item;
//   });
// const makeCarsWithDiscount = (arr, discount) =>
//   arr.map(item => ({
//     ...item,
//     price: item.price * (1 - discount),
//   }));
// console.log(makeCarsWithDiscount(cars, 0.2));

// const filteredCars = (cars, threshold) => cars.filter(({ price }) => price < threshold);
// console.log(filteredCars(cars, 30000));
// console.log(filteredCars(cars, 25000));

const str = 'ddjqpwdkasdddmxasmsnqmaSA';

// const getObj = str => {
//   str = str.split('');

//   return str.reduce((acc, value) => {
//     if (acc.hasOwnProperty(value)) {
//       return {
//         ...acc,
//         [value]: acc[value] + 1,
//       };
//     }

//     return {
//       ...acc,
//       [value]: 1,
//     };
//   }, {});
// };

// const getObj = str =>
//   str.split('').reduce((acc, item) => ({ ...acc, [item]: acc[item] ? acc[item] + 1 : 1 }), {});

// console.log(getObj(str));

// const cars = ['Honda', 'Audi', 'Skoda', 'BMW', 'Ford', 'Renault'];

// const makeStr = arr =>
//   arr.reduce(
//     (acc, car, idx) => acc + `${idx + 1} - ${car} \n`,
//     arr.length ? `Загальна кількість автомобілів ${arr.length}: \n` : 'Немає автомобілів'
//   );
// console.log(makeStr(cars));
// console.log(makeStr([]));

// const users = [
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

// const getUserEmails = users => users.map(user => user.email);

// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

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
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(item => (totalPrice += item));

//   // Change code above this line
//   return totalPrice;
// }

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

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

// const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);

// const getFriends = users =>
// users.flatMap(user => user.friends).filter((friend, idx, arr) => arr.indexOf(friend) === idx);

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).

// Поради:

// Використовуй метод reduce() для ітерації по масиву players та обчислення загальної суми середнього часу гри на одну гру.
// Усередині колбек функції reduce(), поділи playtime гравця на gamesPlayed, щоб отримати середній час, витрачений на одну гру.
// Накопичуй результат у змінній acc і повертай його в кінці кожної ітерації.
// Ініціалізуй параметр acc методу reduce() початковим значенням 0, щоб уникнути отримання NaN при виконанні обчислень.
// Після зменшення змінна totalAveragePlaytimePerGame міститиме загальну суму середнього часу гри на одну гру для всіх гравців.

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, { playtime, gamesPlayed }) => {
//   acc += playtime / gamesPlayed;
//   return acc;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(({ gender: userGender }) => userGender === gender)
    .reduce((acc, { balance }) => acc + balance, 0);
