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
// let total = 0;

// for (const purchase of cart) {
//   total += purchase;
// }

// console.log(total);

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

// console.log(message);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// // let smallest = numbers[0];

// // for (const number of numbers) {
// //   smallest = number < smallest ? number : smallest;
// // }

// // console.log(smallest);
// const smallest = Math.min(...numbers);
// console.log(smallest);

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

const cards = ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5'];

const cardToRemove = 'Card-3';

const cardToInsert = 'Card-6';
const index = 3;

const cardToUpdate = 'Card-4';

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

const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
const isOnline = true;
const isAdmin = false;

// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

function checkForSpam(message) {
  let result;
  // Change code below this line
  result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
  // Change code above this line
  return result;
}

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  result = message.length <= maxLength ? message : message.slice(0, maxLength) + '...';
  /// Change code above this line
  return result;
}

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

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Change code below this line
  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;
    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;
    default:
      message = 'Access denied, wrong password!';
  }

  // Change code above this line
  return message;
}

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

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

function checkIfCanAccessContent(subType) {
  return subType === 'pro' || subType === 'vip';
}

function checkStorage(available, ordered) {
  if (!ordered) {
    return 'There are no products in the order!';
  } else if (ordered > available) {
    return 'Your order is too large, there are not enough items in stock!';
  } else {
    return 'The order is accepted, our manager will contact you';
  }
}

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

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  if (pricePerDroid * orderedQuantity > customerCredits) {
    return 'Insufficient funds!';
  }
  return `You ordered ${orderedQuantity} droids, you have ${customerCredits - pricePerDroid * orderedQuantity} credits left`;
}

function checkStorage(available, ordered) {
  if (ordered > available) {
    return 'Not enough goods in stock!';
  }
  return 'Order is processed, our manager will contact you.';
}

function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = SAVED_PASSWORD === password;

  // Change code above this line
  return isMatch;
}

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  return `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
}

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  return orderedQuantity * pricePerItem;
}

function makeMessage(name, price) {
  return `You picked ${name}, price per item is ${price} credits`;
}

function add(a, b, c) {
  return a + b + c;
}

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
