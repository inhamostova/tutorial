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

function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case 'China':
      message = `Shipping to ${country} will cost 100 credits`;
      break;

    case 'Chile':
      message = `Shipping to ${country} will cost 250 credits`;
      break;

    case 'Australia':
      message = `Shipping to ${country} will cost 170 credits`;
      break;

    case 'Jamaica':
      message = `Shipping to ${country} will cost 120 credits`;
      break;
    default:
      message = 'Sorry, there is no delivery to your country';
  }
  // Change code above this line
  return message;
}

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
