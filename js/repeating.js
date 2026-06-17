// 1. Sum of array

// Напиши функцію, яка повертає суму всіх чисел масиву.

// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([5, 10])); // 15

// function sumArray(arr) {
//   return arr.reduce((acc, num) => acc + num, 0);
// }

// 2. Find largest number

// Напиши функцію, яка повертає найбільше число з масиву.

// console.log(findLargest([3, 7, 2, 9])); // 9
// console.log(findLargest([-5, -1, -10])); // -1

// function findLargest(arr) {
//   return Math.max(...arr);
// }

// function findLargest(arr) {
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i += 1) {
//     max = max > arr[i] ? max : arr[i];
//   }

//   return max;
// }

// 3. Reverse string (без reverse())

// Напиши функцію, яка перевертає рядок без використання .reverse()

// console.log(reverseString('hello')); // 'olleh'
// console.log(reverseString('JavaScript')); // 'tpircSavaJ'

// function reverseString(str) {
//   let result = '';

//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     result += str[i];
//   }

//   return result;
// }

// 4. Count vowels

// Порахуй кількість голосних у рядку:

// Голосні: a, e, i, o, u

// console.log(countVowels('hello')); // 2
// console.log(countVowels('javascript')); // 3
// console.log(countVowels('bbb')); // 0

// function countVowels(str) {
//   const VOWELS = ['a', 'e', 'i', 'o', 'u'];
//   let numOfVowels = 0;

//   for (const char of str.toLowerCase()) {
//     if (VOWELS.includes(char)) {
//       numOfVowels += 1;
//     }
//   }

//   return numOfVowels;
// }

// 5. Capitalize first letter

// Зроби першу літеру рядка великою:

// console.log(capitalize('hello')); // 'Hello'
// console.log(capitalize('javaScript')); // 'JavaScript'
// console.log(capitalize('a')); // 'A'

// function capitalize(str) {
//   if (!str) return '';

//   return str[0].toUpperCase() + str.slice(1);
// }

// 6. Filter even numbers

// Напиши функцію, яка повертає тільки парні числа:

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
// console.log(getEvenNumbers([7, 11, 13])); // []

// function getEvenNumbers(arr) {
//   return arr.filter(num => num % 2 === 0);
// }

// 7. Count occurrences

// Порахуй, скільки разів елемент зустрічається в масиві:

// console.log(countOccurrences([1, 2, 3, 2, 2, 4], 2)); // 3
// console.log(countOccurrences(['a', 'b', 'a'], 'a')); // 2

// function countOccurrences(arr, value) {
//   const filteredArr = arr.filter(item => item === value);

//   return filteredArr.length;
// }

// function countOccurrences(arr, value) {
//   let count = 0;

//   for (const item of arr) {
//     if (item === value) {
//       count += 1;
//     }
//   }

//   return count;
// }

// 8. Object basics

// Є об’єкт:

// Зроби функцію, яка повертає:

// всі ключі
// всі значення
// перевіряє чи існує ключ "age"

// const user = {
//   name: 'Inha',
//   age: 25,
//   city: 'Kyiv',
// };

// console.log(foo(user));

// function foo(obj) {
//   return {
//     keys: Object.keys(obj),
//     values: Object.values(obj),
//     isKeyAge: obj.hasOwnProperty('age'),
//   };
// }

// 9. this basics

// Що виведе код і чому?

// const user = {
//   name: 'Mango',
//   showName() {
//     console.log(this.name);
//   },
// };

// user.showName();

// // І другий випадок:

// const fn = user.showName;
// fn();

// 10. Наступна задача (this + контекст)

// Що виведе код?

// const user = {
//   name: 'Alex',
//   show() {
//     const inner = () => {
//       console.log(this.name);
//     };

//     inner();
//   },
// };

// user.show();

// const title = document.querySelector('.title');
// const title1 = document.querySelector('.title1');
// const title2 = document.querySelector('.title2');
// const maxLength = 10;
// const totalLength = maxLength + 3;

// title.addEventListener('click', onTitleClick);
// title1.addEventListener('click', onTitleClick);
// title2.addEventListener('click', onTitleClick);

// function onTitleClick(evt) {
//   const title = evt.currentTarget;
//   const str = title.textContent.trim().slice(0, maxLength);
//   const reminder = title.textContent.trim().slice(maxLength);

//   if (title.textContent.length > totalLength) {
//     title.textContent = str + '...';
//     title.dataset.reminder = reminder;
//   } else if (title.textContent.length < totalLength) {
//     return;
//   } else {
//     title.textContent = str + title.dataset.reminder;
//   }
// }

// Задача 1 — Class basics

// Створи клас User.

// Він повинен:

// приймати name та age в конструкторі
// мати метод getInfo()

// Приклад:

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getInfo() {
//     return `${this.name} is ${this.age} years old`;
//   }
// }

// const user = new User('Inha', 25);
// console.log(user);

// console.log(user.getInfo()); // 'Inha is 25 years old'

// Наступна задача — Class + method

// Створи клас Car.

// Властивості:

// brand
// price

// Методи:

// getPrice() — повертає ціну
// changePrice(newPrice) — змінює ціну

// Приклад:

// class Car {
//   constructor(brand, price) {
//     this.brand = brand;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     if (newPrice <= 0) {
//       return;
//     }
//     this.price = newPrice;
//   }
// }

// const bmw = new Car('BMW', 50000);
// console.log(bmw);

// console.log(bmw.getPrice()); // 50000

// bmw.changePrice(60000);
// console.log(bmw.getPrice()); // 60000

// bmw.changePrice(-100);
// console.log(bmw.getPrice());

// Наступна задача

// Напиши функцію:

// console.log(findFirstUnique([2, 3, 2, 4, 3, 5]));

// console.log(findFirstUnique([2, 1, 3, 2, 4, 3, 5, 4, 4, 5]));

// function findFirstUnique(arr) {
//   let counter = {};

//   for (let i = 0; i < arr.length; i += 1) {
//     counter[arr[i]] = (counter[arr[i]] ?? 0) + 1;
//   }
//   console.log(counter);

//   for (const num in arr) {
//     if (counter[num] === 1) {
//       return num;
//     }
//   }
// }

// яка повертає перший елемент, що зустрічається лише один раз.

// Результат:

// findFirstUnique([2, 3, 2, 4, 3, 5]) // 4

// Бо:

// 2 → двічі
// 3 → двічі
// 4 → один раз ← перший унікальний
// 5 → теж один раз, але пізніше

// Наступна задача

// Напиши функцію:

// console.log(mostFrequent([1, 2, 2, 3, 2, 4, 4]));

// function mostFrequent(arr) {
//   let counter = {};
//   let maxCount = 0;
//   let result;

//   for (const num of arr) {
//     counter[num] = (counter[num] ?? 0) + 1;
//   }

//   for (const key in counter) {
//     if (counter[key] > maxCount) {
//       maxCount = counter[key];
//       result = key;
//     }
//   }
//   return +result;
// }
// яка повертає елемент, який зустрічається найчастіше.

// Результат:

// 2

// Наступна задача (трохи складніша 🔥)
// groupBy

// Зроби функцію:

// console.log(
//   groupBy([
//     { type: 'fruit', name: 'apple' },
//     { type: 'fruit', name: 'banana' },
//     { type: 'vegetable', name: 'carrot' },
//   ])
// );

// function groupBy(arr) {
//   return arr.reduce((acc, { type, name }) => {
//     if (!acc[type]) {
//       acc[type] = [];
//     }
//     acc[type].push(name);
//     return acc;
//   }, {});
// }

// Результат:

// {
//   fruit: ['apple', 'banana'],
//   vegetable: ['carrot']
// }

// 💡 Підказка:

// об’єкт
// перевірка чи існує ключ
// push

const cars = [
  {
    id: 1,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    id: 2,
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    id: 33,
    car: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 3,
    car: 'Honda',
    type: 'Accord',
    price: 20000,
    number: '+380000000000',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 4,
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];

const list = document.querySelector('.list');
const searchForm = document.querySelector('.js-searchForm');

searchForm.addEventListener('submit', onSearch);
list.addEventListener('click', onClick);

list.insertAdjacentHTML('beforeend', createMarkup(cars));

function createMarkup(arr) {
  return arr
    .map(
      ({ id, car, type, price, img }) => `
  <li data-id="${id}">
  <img class="img-car" src="${img}" alt="${car}" width="300"/>
  <h2>${car}</h2>
</li>`
    )
    .join('');
}

function onSearch(evt) {
  evt.preventDefault();

  const { searchQuery, searchKey } = evt.currentTarget.elements;

  const filteredCars = cars.filter(car =>
    car[searchKey.value].toLowerCase().includes(searchQuery.value.trim().toLowerCase())
  );

  list.innerHTML = createMarkup(filteredCars);
}

function onClick(evt) {
  if (!evt.target.classList.contains('img-car')) {
    return;
  }
  const idx = Number(evt.target.closest('li').dataset.id);
  const currentCar = findCarById(idx);
  createModalMarkup(currentCar);
}

function findCarById(id) {
  return cars.find(({ id: carId }) => carId === id);
}

function createModalMarkup(currentCar) {
  const { img, car, type, price } = currentCar;
  const instance = basicLightbox.create(`
<div>
  <img src="${img}" alt="${car}" width="600"/>
  <h2>${car}</h2>
  <p>${type}</p>
  <p>${price}</p>
</div>`);
  instance.show();
}

// const products = [
//   {
//     id: 'sku1',
//     qty: 1,
//   },
//   {
//     id: 'sku2',
//     qty: 2,
//   },
//   {
//     id: 'sku3',
//     qty: 3,
//   },
//   {
//     id: 'sku1',
//     qty: 6,
//   },
//   {
//     id: 'sku1',
//     qty: 8,
//   },
//   {
//     id: 'sku2',
//     qty: 19,
//   },
//   {
//     id: 'sku4',
//     qty: 1,
//   },
// ];

// function mutateArr(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = i + 1; j < arr.length; j += 1) {
//       if (arr[i].id === arr[j].id) {
//         arr[i].qty += arr[j].qty;
//         arr.splice(j, 1);
//         j -= 1;
//       }
//     }
//   }
//   return arr;
// }

// console.log(mutateArr(products));

console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']));
console.log(findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf']));

// function findUniq(arr) {
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     let str = arr[i];
//     let strToCompare = arr[i + 1];
//     for (let j = 0; j < str.length; j += 1) {
//       if (!strToCompare.includes(str[j])) {
//         return strToCompare;
//       }
//     }
//   }
// }

function findUniq(arr) {
  return arr.find((current, idx) =>
    current
      .split('')
      .every(
        item =>
          arr.reduce((acc, compar, i) =>
            idx !== i ? (compar.includes(item) ? false : true) : false
          ),
        false
      )
  );
}
