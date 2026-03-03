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

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: Date.now(),
    };
  },
  deposit(amount) {
    const trans = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(trans);
    this.balance += trans.amount;
    return `${trans.amount} succesfully deposit`;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      return 'NOT enough money';
    }
    const trans = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(trans);
    this.balance -= trans.amount;
    return `${trans.amount} succesfully withdraw`;
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetail(id) {
    for (const trans of this.transactions) {
      if (trans.id === id) {
        return trans;
      }
    }
  },
  getTransactionTotal(type) {
    let total = 0;

    for (const trans of this.transactions) {
      if (trans.type === type) {
        total += trans.amount;
      }
    }

    return total;
  },
};

// console.log(account.deposit(1000));
// console.log(account.deposit(500));
// console.log(account.getBalance());
// console.log(account.withdraw(700));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account);
