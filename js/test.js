
const x1 = 10;
const x2 = 30;

const number = 15;

// до х1
// після х2
// від х1 до х2
// до х1 або після х2


console.log(`Число ${number} потрапляє у відрізок до ${x1}`, number < x1);
console.log(`Число ${number} потрапляє у відрізок після ${x2}`, number > x2);
console.log(`Число ${number} потрапляє у відрізок від ${x1} і до ${x2}`, number > x1 && number < x2);
console.log(`Число ${number} потрапляє у відрізок до ${x1} або після ${x2}`, number < x1 || number > x2);


const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log(`Можна відкрити чат з користуваем?`, canOpenChat);


const subscription = 'pro';
const haveAccess = subscription === 'vip' || subscription === 'pro';
console.log(`Є доступ?`, haveAccess)


const balance = -1000;
// let message;

// if (balance >= 0) {
//     message = 'Positive balance';
// } else {
//     message = 'Negative balance';
// }

const message = balance >= 0 ? 'Positive balance' : 'Negative balance';
// Тернарний оператор використовується тільки тоді, коли потрібно записати значення в змінну по певній умові

console.log(message);