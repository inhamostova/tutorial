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
