// const x1 = 10;
// const x2 = 30;

// const number = 15;

// до х1
// після х2
// від х1 до х2
// до х1 або після х2

// console.log(`Число ${number} потрапляє у відрізок до ${x1}`, number < x1);
// console.log(`Число ${number} потрапляє у відрізок після ${x2}`, number > x2);
// console.log(`Число ${number} потрапляє у відрізок від ${x1} і до ${x2}`, number > x1 && number < x2);
// console.log(`Число ${number} потрапляє у відрізок до ${x1} або після ${x2}`, number < x1 || number > x2);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log(`Можна відкрити чат з користуваем?`, canOpenChat);

// const subscription = 'pro';
// const haveAccess = subscription === 'vip' || subscription === 'pro';
// console.log(`Є доступ?`, haveAccess)

// const balance = -1000;
// let message;

// if (balance >= 0) {
//     message = 'Positive balance';
// } else {
//     message = 'Negative balance';
// }

// const message = balance >= 0 ? 'Positive balance' : 'Negative balance';
// Тернарний оператор використовується тільки тоді, коли потрібно записати значення в змінну по певній умові

// console.log(message);

// console.log(Number.parseInt("50px"));
// console.log(Number.parseInt("75px"));
// console.log(Number.parseInt("75.15px"));
// console.log(Number.parseInt("50px12"));

// console.log(Number.parseFloat("50.48px"));
// console.log(Number.parseFloat("50.48px12"));

// console.log(Number.isNaN(Number("qweqwe")));
// console.log(Number.isNaN(Number("765")));

// const name = 'Inga';
// console.log(name[name.length - 1])

// const name = 'samsung';
// const name1 = prompt('Please enter name');

// if (name === name1.toLowerCase()) {
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// let counter = 0;

// while (counter < 10) {
//     console.log(counter);
//     counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     clientCounter += 1;
//     console.log(clientCounter);

// }

// let password = '';

// do {
//     password = prompt('Your password must have at least 4 symbols');

// } while (password.length < 4);

// console.log(password);

// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);

// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//     sum += i;
//     console.log(sum);
// }

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//     if (i === 3) {
//         console.log('found number 3');
//         break
//     }

// }

// console.log("log after cycle");

// let odd;

// for (let i = 0; i <= 10; i += 1) {
//     if (i % 2 !== 0) {
//         odd = i;
//     console.log(odd);
//     }
// }

// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 100$

// const stars = 3;
// let price;

// switch (stars) {
//   case 1:
//     price = '20$';

//     break;
//   case 2:
//     price = '40$';
//     break;
//   case 3:
//     price = '50$';
//     break;
//   case 4:
//     price = '70$';
//     break;
//   case 5:
//     price = '100$';
//     break;

//   default:
//     console.log('There is not that amount of stars');
// }

// console.log(price);

// const option = 4;

// switch (option) {
//   case 1:
//     console.log('Samovyviz');
//     break;
//   case 2:
//     console.log('kurier');
//     break;
//   case 3:
//     console.log('post');
//     break;
//   default:
//     console.log('manager will cll you soon');
// }

// const employees = 5;
// let totalSalary = 0;
// const max = 5000;
// const min = 500;

// console.log(Math.round(Math.random() * (max - min) + min));

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(Math.random() * (max - min) + min);
//   console.log(`salary ${salary}`);

//   totalSalary += salary;
//   console.log(`total salary ${totalSalary}`);
// }

// console.log(totalSalary);

// const min = 6;
// const max = 13;

// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     total += i;

//   }
// }
// console.log(total);

// let balance = 10000;
// const payment = 20000;

// console.log(
//   `Загальна сума замовлення ${payment} кредитів. Провіряємо доступну кількість кредитів на рахунку`
// );

// if (payment <= balance) {
//   balance -= payment;
//   console.log(`На рахунку залишилось ${balance} кредитів`);
// } else {
//   console.log('На рахунку недостатньо коштів для проведення операції');
// }

// console.log('Операція завершена');

// const answ = prompt('Яка офіційна назва JS?');
// const ecma = 'ECMAScript'.toLowerCase();

// if (answ.toLowerCase() === ecma) {
//   alert('Вірно');
// } else {
//   alert('Не вірно');
// }

// const value = Number(prompt('Введіть число'));
// console.log(typeof value);

// if (value > 0) {
//   console.log('Це позитивне число');
// } else if (value === 0) {
//   console.log('Це нуль');
// } else if (Number.isNaN(value)) {
//   console.log('Введено не коректне число');
// } else {
//   console.log('Це відємне число');
// }

// let link = 'https://somesite.com/about';

// if (link.endsWith('/')) {
//   console.log('everything ok');
// } else {
//   link += '/';
//   console.log(link);
// }

// const daysLeft = 0;

// if (daysLeft === 0) {
//   console.log('Today');
// } else if (daysLeft === 1) {
//   console.log('Tomorrow');
// } else if (daysLeft === 2) {
//   console.log('Tomorrow 222');
// } else {
//   console.log('Date in the future');
// }

// switch (daysLeft) {
//   case 0:
//     console.log('Today');
//     break;
//   case 1:
//     console.log('Tomorrow');
//     break;
//   case 2:
//     console.log('Tomorrow 222');
//     break;
//   default:
//     console.log('Date in the future');
// }

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (!(i % 5)) {
//     console.log(i);

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }

// sayHi();

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }

// console.log(makeMessage('Scanner', 3500));

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (!ordered) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));

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

// const hours = 14;
// const minutes = 1;
// let str;

// if (minutes) {
//   console.log(`${hours} год ${minutes} хв`);
// } else {
//   console.log(`${hours} год`);
// }

// const a = 210;
// const b = 180;

// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else {
//   console.log(b + 512);
// }

// let link = 'https://smesite.com/about';

// if (!link.endsWith('/') && link.includes('somesite')) {
//   link += '/';
// }

// link = !link.endsWith('/') && link.includes('somesite') ? `${link}/` : `${link}`;

// console.log(link);

// const login = prompt('Enter your login');

// if (login === 'admin') {
//   const password = prompt('Enter password');

// if (password === 'admin') {
//   console.log('Hello admin');
// } else {
//   console.log('Wrong password');
// }
//   console.log(password === 'admin' ? 'Hello admin' : 'Wrong password');
// } else if (!login) {
//   console.log('Canceled');
// } else {
//   console.log("I don't know you");
// }

//     case 'Jamaica':
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   return message;
// }
// const friends = ['Mango', 'Kiwi', 'Poly'];

// for (let i = 0; i < friends.length; i += 1) {
//   console.log(friends[i]);
// }

// for (const friend of friends) {
//   console.log(friend);
// }

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// let total = 0;

// for (const purchase of cart) {
//   total += purchase;
//   console.log(total);
// }

// console.log(total);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let totalEven = 0;

// for (const number of numbers) {
//   if (!(number % 2)) {
//     totalEven += number;
//   }
// }

// console.log(totalEven);

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'ajaxth3m4n'];
// const loginToFind = 'm4ngoDoge1';

// for (let i = 0; i < logins.length; i += 1) {
//   if (logins[i] === loginToFind) {
//     console.log(`User ${logins[i]} found`);
//     break;
//   }
//   console.log(logins[i]);
// }

// for (const login of logins) {
//   if (login === loginToFind) {
//     console.log(`User ${login} found`);
//     break;
//   }
//   console.log(login);
// }

// console.log(logins.includes(loginToFind) ? `User ${loginToFind} found` : 'User not found');

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallesrNumber;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < numbers[i + 1]) {
//     smallesrNumber = numbers[i];
//   }
// }

// console.log(smallesrNumber);

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// let str = '';

// for (const friend of friends) {
//   str += friend;
//   console.log(str);
// }

// console.log(friends.join());

// const str = 'JavaScript';

// let str2 = '';

// const arr = str.split('');

// for (const value of arr) {
//   // if (value === value.toLowerCase()) {
//   //   str2 += value.toUpperCase();
//   //   console.log(str2);
//   // } else {
//   //   str2 += value.toLowerCase();
//   // }
//   str2 += value === value.toLowerCase() ? value.toUpperCase() : value.toLowerCase();
// }
// console.log(str2);

// const title = 'Top 5 benefits of React framework';
// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);

// const arr1 = [5, 10, 15, 20];
// const arr2 = [10, 20, 30];

// let total = 0;

// for (const number of arr1.concat(arr2)) {
//   total += number;
//   console.log(number);
// }

// console.log(total);

// const cards = ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5'];

// const cardToRemove = 'Card-3';
// const cardToInsert = 'Card-6';

// console.log(cards.splice(cards.indexOf(cardToRemove), 1));
// console.log(cards);

// console.log(cards.splice(3, 0, cardToInsert));
// console.log(cards);

// const genres = ['Jazz', 'Blues'];

// console.log(genres.push("Rock'n'roll"));
// genres.unshift('Country', 'Reggae');
// console.log(genres);

// genres.splice(1, 0, 'Inga');
// genres.splice(1, 1, 'Tanya', 'Bonya', 'Bilyash');

// console.log(genres);

// const values = '8 11';
// console.log(values.split(' '));
// const square = values.split(' ')[0] * values.split(' ')[1];
// console.log(square);

// const fruits = ['apple', 'strawberry', 'orange', 'lemon'];

// for (let i = 0, k = 1; i < fruits.length; i += 1, k += 1) {
//   console.log(`${k} - ${fruits[i]}`);
// }

// const names = 'Jacob,William,Solomon,Kate';
// const phones = '0631234567,0969876543,0501287312,0677125512';

// for (let i = 0; i < names.split(',').length; i += 1) {
//   console.log(`${names.split(',')[i]} - phone ${phones.split(',')[i]}`);
// }

// const str = 'Welcome to the future';

// const arr = str.split('');
// console.log(arr);
// console.log(arr.reverse().join(''));

// arr.splice(0, 1);
// arr.splice(arr.length - 1, 1);
// console.log(arr);

// console.log(arr.join(' '));

// const numbers = [101, 78, 12, 76, 5, 11, 9];
// let smallestNum = numbers[0];
// for (const number of numbers) {
//   if (number < smallestNum) {
//     smallestNum = number;
//     console.log(smallestNum);
//   }
//   console.log(number);
// }

// const langs = ['dpython', 'cjavascript', 'bc++', 'ahaskel', 'mphp', 'zruby'];

// for (let i = 0; i < langs.length; i += 1) {
//   if (!arr.includes(langs[i])) {
//     // console.log(true);
//     if (arr[0][0] > langs[i][0]) {
//       arr.unshift(langs[i]);
//     } else {
//       arr.push(langs[i]);
//     }
//   }
// }
// console.log(arr);
// const remove = langs.splice(3, 1);
// for (let i = 0; i < langs.length; i += 1) {
//   if (langs[0] > langs[i]) {
//     const result = langs.splice(i, 1)[0];
//     langs.unshift(result);
//   }
// }
// console.log(langs);

// function multiply(x, y, z) {
//   console.log('Код до return виконується звичайним чином');

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log('Цей лог ніколи не виконається, він стоїть після return');
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// function multiply() {
//   let total = 1;
//   console.log(arguments);

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function fn(...args) {
//   // Змінна args буде містити повноцінний масив
//   return args;
// }

// console.log(fn(1, 5, 22, 44));

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

// function calculateTotalPrice(arr) {
//   let total = 0;
//   for (const value of arr) {
//     total += value;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([1, 2, 3]));

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(`${item}`);
//   }
// };

// logItems([1, 5, 10]);
// logItems(['Mango', 'Poly', 'Kiwi']);

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'ajaxth3m4n'];
// const loginToFind = 'm4ngoDoge2';

// function findLogin(allLogins, login) {
//   return allLogins.includes(login) ? `User ${login} found` : `User ${login} NO!!!`;
// }

// console.log(findLogin(logins, loginToFind));

// function findSmallestNumber(numbers) {
//   let smallest = numbers[0];
//   for (const number of numbers) {
//     if (number < smallest) {
//       smallest = number;
//     }
//   }
//   return smallest;
// }

// console.log(findSmallestNumber([120, 64, 43, 12, 7, 99]));
// function changeCaseStr(string) {
//   const items = string.split('');
//   let strUpdated = '';
//   for (const item of items) {
//     // if (item === item.toLowerCase()) {
//     //   strUpdated += item.toUpperCase();
//     // } else {
//     //   strUpdated += item.toLowerCase();
//     // }
//     strUpdated += item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase();
//   }
//   return strUpdated;
// }

// console.log(changeCaseStr('TANYA vyshnia'));

// function filterNumbers(numbers, ...args) {
//   console.log(numbers);
//   console.log(args);
//   const arr = [];

//   for (const arg of args) {
//     if (numbers.includes(arg)) {
//       arr.push(arg);
//     }
//   }
//   return arr;
// }

// console.log(filterNumbers([1, 5, 9, 12], 5, 25, 43, 12));

// function getSum() {
//   console.log(arguments);
//   let total = 0;
//   for (const arg of arguments) {
//     total += arg;
//   }
//   return total;
// }

// console.log(getSum(1, 2, 3, 4, 5, 6, 7));

// console.log(getSum(44, 12, 22, 25));

// function foo() {
//   console.log('start foo');
// }

// function boo() {
//   console.log('start boo');
//   foo();
//   console.log('end boo');
// }

// boo();

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// function addCourse(names, name) {
//   if (!names.includes(name)) {
//     names.push(name);
//     return names;
//   }
//   return 'Youa already have this course';
// }

// console.log(addCourse(courses, 'C++'));
// console.log(addCourse(courses, 'CSS'));

// function removeCourse(names, name) {
//   if (names.includes(name)) {
//     names.splice(names.indexOf(name), 1);
//     return names;
//   }
//   return "You don't have that course";
// }

// console.log(removeCourse(courses, 'C++'));
// console.log(removeCourse(courses, 'C++'));

// function updateCourse(names, oldName, newName) {
//   if (names.includes(oldName)) {
//     names.splice(names.indexOf(oldName), 1, newName);
//   }
//   return names;
// }

// // console.log(removeCourse(courses, 'C++'));
// console.log(updateCourse(courses, 'CSS', 'Python'));
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[fruits.length - 1];

// console.log(lastElement);
// console.log(lastElementIndex);

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5, 6, 7]));

// function makeArray(firstArray, secondArray, maxLength) {
//   const arr = firstArray.concat(secondArray);

//   if (maxLength < arr.length) {
//     return arr.slice(0, maxLength);
//   }

//   return arr;
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
// makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);

// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));

// function calculateTotal(number) {
//   let total = 0;

//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
// }

// console.log(calculateTotal(3));

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   let longestWord = '';

//   const arr = string.split(' ');

//   for (let i = 0; i < arr.length; i += 1) {
//     if (longestWord.length < arr[i].length) {
//       longestWord = arr[i];
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// function filterArray(numbers, value) {
//   const newArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }

//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }

//   return newArray;
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

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

// function includes(array, value) {
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));

// function calcBMI(weight, height) {
//   const weightArr = weight.split('');
//   const heightArr = height.split('');

//   if (weightArr.includes(',')) {
//     weightArr.splice(weightArr.indexOf(','), 1, '.');
//   }

//   if (heightArr.includes(',')) {
//     heightArr.splice(heightArr.indexOf(','), 1, '.');
//   }

//   return (Number(weightArr.join('')) / Number(heightArr.join('')) ** 2).toFixed(2);
// }
// function calcBMI(weight, height) {
//   weight = weight.replace(',', '.');
//   height = height.replace(',', '.');

//   const BMI = (Number(weight) / Math.pow(Number(height), 2)).toFixed(2);
//   return Number(BMI);
// }

// console.log(calcBMI('88,3', '1.75'));

// const str = 'Inga Mostova';
// console.log(str.includes('g'));

// function findLargestNumber(array) {
//   let largestNumber = setFirstNumber(array);
//   // console.log(largestNumber);

//   for (const number of array) {
//     if (Array.isArray(number)) {
//       for (const item of number) {
//         array.push(item);
//         // console.log(array);
//       }
//     }

//     if (typeof number === 'number') {
//       largestNumber = number > largestNumber ? number : largestNumber;
//     }
//   }

//   return largestNumber;
// }

// function setFirstNumber(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (Array.isArray(array[i])) {
//       continue;
//     }
//     if (typeof array[i] === 'number') {
//       return array[i];
//     }
//   }
// }

// console.log(findLargestNumber([2, 3, 86, 97, 123, 44, 5, 34, 12, 32])); //123
// console.log(findLargestNumber([565, 333, 12, 48, 1245, 54])); //1245

// console.log(findLargestNumber([[15, 245, 33], [2, 3, 4], 2, 3, 86, 97, 123, 44, 5, 34, 12, 32]));
// console.log(findLargestNumber([[15, 245, 33], [2, 666, 4], 2, 3, 86, 97, 123, 44, 5, 34, 12, 32]));
// console.log(
//   findLargestNumber([
//     [15, 245, 5000, 33],
//     [2, 3, 4, [1500, 66]],
//     2,
//     3,
//     86,
//     97,
//     123,
//     44,
//     5,
//     [1024],
//     34,
//     12,
//     32,
//   ])
// );

// console.log(setFirstNumber([[15, 245, 33], [2, 3, 4], 55, 3, 86, 97, 123, 44, 5, 34, 12, 32]));

// function callAverage() {
//   let total = 0;
//   for (const number of arguments) {
//     total += number;
//   }

//   return total / arguments.length;
// }

// console.log(callAverage(14, 8, 2));

// function format(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const mins = minutes % 60;
//   const mesHours = hours < 10 ? `0${hours}` : `${hours}`;
//   const mesMins = mins < 10 ? `0${mins}` : `${mins}`;
//   return `${mesHours}:${mesMins}`;
// }

// console.log(format(1441));

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const idx = arr.indexOf(11);
// if (!!~idx) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// !!~ = Boolean-(x+1)

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// friends[1].age = 18;
// console.log(friends);

// const obj = friends[1];
// console.log(obj);

// function findFriendByName(allFriends, name) {
//   for (const friend of allFriends) {
//     if (name === friend.name) {
//       return 'You have that friend';
//     }
//   }
//   return 'NO friend';
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Artem'));

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
//     this.items.push(product);
//     product.quantity = 1;
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;
//     for (const item of this.items) {
//       total += item.price;
//     }
//     return total;
//   },
//   remove(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         this.items.splice(this.items.indexOf(item), 1);
//       }
//     }
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//       }
//     }
//   },
// };

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'pear', price: 60 });
// cart.add({ name: 'orange', price: 100 });
// cart.add({ name: 'grape', price: 200 });

// console.log(cart);

// cart.remove('apple');

// console.log(cart);

// console.log(cart.countTotalPrice());

// cart.increaseQuantity('grape');
// cart.increaseQuantity('grape');
// cart.increaseQuantity('grape');

// console.log(cart);
