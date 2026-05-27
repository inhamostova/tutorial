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

const user = {
  name: 'Alex',
  show() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

user.show();
