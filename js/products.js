// const product = {
//   name: 'Сервоприводи',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere.',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

// const products = [
//   {
//     name: 'Сервоприводи',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere.',
//     price: 2000,
//     available: true,
//     onSale: true,
//   },
//   {
//     name: 'Генератор поля',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere.',
//     price: 2700,
//     available: true,
//     onSale: false,
//   },
//   {
//     name: 'Нульовий елемент',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere.',
//     price: 1500,
//     available: false,
//     onSale: false,
//   },
//   {
//     name: 'Титанум',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere.',
//     price: 3000,
//     available: true,
//     onSale: false,
//   },
//   {
//     name: 'Труби',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere.',
//     price: 2500,
//     available: false,
//     onSale: false,
//   },
// ];

// {
//   /* <article class="product">
//   <h2 class="product-name">Name</h2>
//   <p class="product-description">Description</p>
//   <p class="product-price">Price</p>
// </article>; */
// }

// function makeProduct({ name, description, price }) {
//   const producrEl = document.createElement('article');
//   producrEl.classList.add('product');

//   const titleEl = document.createElement('h2');
//   titleEl.classList.add('product-name');
//   titleEl.textContent = name;

//   const descrEl = document.createElement('p');
//   descrEl.classList.add('product-description');
//   descrEl.textContent = description;

//   const priceEl = document.createElement('p');
//   priceEl.classList.add('product-price');
//   priceEl.textContent = `Price: ${price}`;

//   producrEl.append(titleEl, descrEl, priceEl);

//   return producrEl;
// }

// function makeMarkup(arr) {
//   return arr.map(makeProduct);
// }

// // console.log(makeMarkup(products));

// const container = document.querySelector('.js-products');
// container.append(...makeMarkup(products));

// ДУЖЕ складна задача на знаходження унікального рядка в масиві літери якого відсутні у будь-якому інші рядку масива

// console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); //'foo'
// console.log(findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf'])); //'abcd'
// console.log(findUniq(['qwe', 'camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac'])); //'qwe'

// function findUniq(arr) {
//   const normalizedArr = arr.map(item => normalizeStr(item));
//   return arr.find((word, idx) => {
//     const current = normalizedArr[idx];
//     return normalizedArr.filter(item => item === current).length === 1;
//   });
// }

// function normalizeStr(str) {
//   return [...new Set(str)].sort().join('');
// }

// function findUniq(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const result = arr[i].split('').every(letter => {
//       for (let j = 0; j < arr.length; j += 1) {
//         if (i !== j) {
//           return arr[j].includes(letter) ? false : true;
//         }
//       }
//     });
//     if (result) return arr[i];
//   }
// }

// console.log(getUniqueValues([{ id: 1 }, { id: 1 }, { id: 2 }]));

// // console.log(getUniqueValues([1, 2, 2, 3, 4, 4]));
// // → [1, 2, 3, 4]

// function getUniqueValues(arr) {
//   const seen = new Set();
//   console.log(seen);

//   return arr.filter(item => {
//     if (seen.has(item.id)) {
//       return false;
//     }
//     seen.add(item.id); // запам’ятали
//     return true;
//   });
// }

// console.log(countOccurrences(['a', 'b', 'a', 'c', 'b', 'a']));
// // → { a: 3, b: 2, c: 1 }

// function countOccurrences(arr) {
//   return arr.reduce((acc, item) => {
//     acc[item] = (acc[item] ?? 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(reverseArray([1, 2, 3]));
// // → [3, 2, 1]

// function reverseArray(arr) {
//   const result = [];
//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     result.push(arr[i]);
//   }

//   return result;
// }

// groupBy([
//   { type: 'fruit', name: 'apple' },
//   { type: 'veg', name: 'carrot' },
//   { type: 'fruit', name: 'banana' },
// ]);
// // {
// //   fruit: [{...}, {...}],
// //   veg: [{...}]
// // }

// function groupBy(arr) {
//   return arr.reduce((acc, { type, name }) => {}, { fruit: [], veg: [] });
// }

// console.log(sum([1, 2, 3, 4])); // 10

// function sum(arr) {
//   return arr.reduce((acc, item) => acc + item, 0);
// }

// console.log(findMax([3, 7, 2, 9])); // 9;

// function findMax(arr) {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i += 1) {
//     max = arr[i] > max ? arr[i] : max;
//   }

//   return max;
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]

// function getEvenNumbers(arr) {
//   return arr.reduce((acc, item) => {
//     if (item % 2 === 0) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
// }

// console.log(getLengths(['hi', 'hello'])); // [2, 5]

// function getLengths(arr) {
//   return arr.map(item => item.length);
// }

// console.log(findLongWord(['cat', 'house', 'car'], 4)); // 'house'

// function findLongWord(arr, maxLength) {
//   return arr.find(item => item.length > maxLength);
// }

// console.log(countPositive([1, -2, 3, 0, -5])); // 2

// function countPositive(arr) {
//   return arr.filter(item => item > 0).reduce((acc, item) => acc + item, 0);
// }

// function countPositive(arr) {
//   return arr.filter(item => item > 0).length;
// }

// console.log(countVowels('javascript')); // 3

// function countVowels(string) {
//   const vowelList = 'aeiou';

//   return string.split('').filter(char => vowelList.includes(char.toLowerCase())).length;
// }

// console.log(reverseString('hello')); // 'olleh'

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('Mad am')); // true

// function isPalindrome(str) {
//   const normalizedStr = str.toLowerCase().replaceAll(' ', '');
//   const reverseStr = normalizedStr.split('').reverse().join('');

//   return normalizedStr === reverseStr;
// }

// console.log(capitalize('hello world'));
// // 'Hello World'

// function capitalize(str) {
//   return str
//     .split(' ')
//     .map(item => item[0].toUpperCase() + item.slice(1))
//     .join(' ');
// }

// console.log(getCommon([1, 2, 3], [2, 3, 4]));
// [2, 3]

// function getCommon(arr1, arr2) {
//   const commonArr = [];

//   for (let i = 0; i < arr1.length; i += 1) {
//     if (arr2.includes(arr1[i])) {
//       commonArr.push(arr1[i]);
//     }
//   }

//   return commonArr;
// }

// console.log(getUnique([1, 2, 2, 3, 4, 4]));
// [1, 2, 3, 4]

// function getUnique(arr) {
//   return [...new Set(arr)];
// }
// console.log(hasDuplicates([1, 2, 3])); // false
// console.log(hasDuplicates([1, 2, 2])); // true

// function hasDuplicates(arr) {
//   const set = new Set(arr);
//   return arr.length !== set.size;
// }

// console.log(getCommon([1, 2, 3], [2, 3, 4]));
// [2, 3]

// function getCommon(arr1, arr2) {
//   const set = new Set(arr1);

//   return arr2.filter(item => set.has(item));
// }

// console.log(getUniqueChars('hello'));
// ['h', 'e', 'l', 'o']

// function getUniqueChars(str) {
//   return [...new Set(str)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
// [1, 2, 3, 4]
// function removeDuplicates(arr) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === arr[i + 1]) {
//       continue;
//     }
//     newArr.push(arr[i]);
//   }

//   return newArr;
// }

// function removeDuplicates(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] !== arr[i + 1]) {
//       continue;
//     }
//     arr.splice(i, 1);
//     i -= 1;
//   }

//   return arr;
// }

// [1, 2, 3, 4]

// function flatten(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (!Array.isArray(arr[i])) {
//       newArr.push(arr[i]);
//     } else {
//       newArr.push(...flatten(arr[i]));
//     }
//   }
//   return newArr;
// }

// console.log(flatten([1, [2, 3], 4]));

// console.log(findFirstUnique([2, 3, 4, 2, 3, 5]));
// console.log(findFirstUnique([2, 3, 4, 4, 5, 2, 3, 5]));
// console.log(findFirstUnique([2, 17, 99, 22, 3, 4, 4, 17, 99, 2, 3, 7, 5]));

// 4

// function findFirstUnique(arr) {
//   const myMap = new Map();

//   for (const num of arr) {
//     myMap.set(num, (myMap.get(num) ?? 0) + 1);
//   }

//   for (const num of arr) {
//     if (myMap.get(num) === 1) {
//       return num;
//     }
//   }
//   return false;
// }

// function findFirstUnique(arr) {
//   const counts = {};

//   for (const num of arr) {
//     counts[num] = (counts[num] ?? 0) + 1;
//   }

//   for (const num of arr) {
//     if (counts[num] === 1) return num;
//   }
//   return null;
// }

// console.log(sumEven([1, 2, 3, 4])); // 6

// function sumEven(arr) {
//   return arr.reduce((acc, item) => {
//     if (item % 2 === 0) acc += item;
//     return acc;
//   }, 0);
// }

// console.log(findMin([5, 2, 8, 1])); // 1

// function findMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     min = arr[i] < min ? arr[i] : min;
//   }
//   return min;
// }

// console.log(cleanArray([0, 1, false, 0, 2, '', 3])); // [1, 2, 3]

// function cleanArray(arr) {
//   const cleanArr = [];
//   arr.forEach(item => {
//     if (item) cleanArr.push(item);
//   });
//   return cleanArr;
// }

// function cleanArray(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (!arr[i]) {
//       arr.splice(i, 1);
//       i -= 1;
//     }
//   }

//   return arr;
// }

// console.log(countWords('hello world here')); // 3
// function countWords(str) {
//   return str.split(' ').length;
// }

// console.log(capitalizeFirst('hello world')); // 'Hello world'

// function capitalizeFirst(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(trimSpaces('   hello   ')); // 'hello'

// function trimSpaces(str) {
//   return str.trim();
// }

// console.log(findIndex([10, 20, 30], 20)); // 1

// function findIndex(...args) {
//   return args.findIndex(item => typeof item === 'number');
// }

// console.log(allPositive([1, 2, 3])); // true
// console.log(allPositive([1, -2, 3])); // false

// function allPositive(arr) {
//   return arr.every(item => item > 0);
// }

// console.log(doubleOdd([1, 2, 3, 4])); // [2, 2, 6, 4]

// function doubleOdd(arr) {
//   return arr.map(item => (item % 2 === 0 ? item : item * 2));
// }

// console.log(getTotalPrice([{ price: 10 }, { price: 20 }])); // 30

// function getTotalPrice(arr) {
//   return arr.reduce((acc, { price }) => acc + price, 0);
// }

// console.log(findById([{ id: 1 }, { id: 2 }, { id: 3 }], 2));
// { id: 2 }

// function findById(products, id) {
//   return products.find(({ id: productId }) => productId === id);
// }

// console.log(getExpensive([{ price: 10 }, { price: 50 }, { price: 30 }], 30));
// [{ price: 50 }]

// function getExpensive(products, expPrice) {
//   return products.filter(({ price }) => price > expPrice);
// }
// console.log(twoSum([2, 11, 15, 7], 9));
// [0, 1]

// function twoSum(arr, value) {
//   const map = new Map();

//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = i + 1; j < arr.length; j += 1) {
//       if (arr[i] + arr[j] === value) {
//         return [i, j];
//       }
//     }
//   }
// }

// function twoSum(arr, value) {
//   const map = new Map();

//   for (let i = 0; i < arr.length; i += 1) {
//     const target = value - arr[i];

//     if (map.has(target)) {
//       return [map.get(target), i];
//     }
//     map.set(arr[i], i);
//   }
// }

// console.log(
//   groupBy([
//     { type: 'fruit', name: 'apple' },
//     { type: 'veg', name: 'carrot' },
//     { type: 'fruit', name: 'banana' },
//   ])
// );

// function groupBy(arr) {
//   return arr.reduce((acc, item) => {
//     (acc[item.type] = acc[item.type] ?? []).push(item);
//     return acc;
//   }, {});
// }

// console.log(longestUniqueSubstring('abcabcdabbifgad')); // 3 ('abc')

// function longestUniqueSubstring(str) {
//   const set = new Set();
//   let substr = '';

//   for (let i = 0; i < str.length; i += 1) {
//     if (!substr.includes(str[i])) {
//       substr += str[i];
//       continue;
//     }
//     set.add(substr);

//     substr = '';
//     i -= 1;
//   }
//   set.add(substr);
//   let finalSubstr = '';
//   for (const value of [...set]) {
//     finalSubstr = value.length > finalSubstr.length ? value : finalSubstr;
//   }
//   return finalSubstr;
// }

// function longestUniqueSubstring(str) {
//   const set = new Set();
//   let left = 0;
//   let max = 0;

//   for (let right = 0; right < str.length; right++) {
//     while (set.has(str[right])) {
//       set.delete(str[left]);
//       left++;
//     }

//     set.add(str[right]);
//     max = Math.max(max, right - left + 1);
//   }

//   return max;
// }

// console.log(sum([1, 2, 3, 4])); // 10

// function sum(arr) {
//   return arr.reduce((acc, item) => (acc += item), 0);
// }

// console.log(average([2, 4, 6])); // 4

// function average(arr) {
//   let total = 0;
//   for (const num of arr) {
//     total += num;
//   }
//   return total / arr.length;
// }

// console.log(max([5, 1, 9, 3])); // 9

// function max(arr) {
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i += 1) {
//     max = max < arr[i] ? arr[i] : max;
//   }

//   return max;
// }

// console.log(countChars('hello'));
// { h:1, e:1, l:2, o:1 }

// function countChars(str) {
//   return str.split('').reduce((acc, char) => {
//     acc[char] = (acc[char] ?? 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(reverse('hello')); // 'olleh'

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// console.log(isPalindrome('abba')); // true
// console.log(isPalindrome('abc')); // false

// function isPalindrome(str) {
//   const reverseStr = str.split('').reverse().join('').toLowerCase().trim();
//   return str.toLowerCase().trim() === reverseStr;
// }

// console.log(findFirst(arr => arr > 10, [5, 8, 12, 3])); // 12
// console.log(findFirst(arr => arr < 4, [5, 8, 12, 3])); // 3

// function findFirst(callback, arr) {
//   return arr.find(callback);
// }

// console.log(removeFalsy([0, false, 1, false, 0, 2, '', 3])); // [1,2,3]

// function removeFalsy(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (!arr[i]) {
//       arr.splice(i, 1);
//       i -= 1;
//     }
//   }
//   return arr;
// }

// console.log(unique([1, 2, 2, 3])); // [1,2,3]

// function unique(arr) {
//   const set = new Set(arr);
//   return [...set];
// }

// console.log(getTotal([{ price: 10 }, { price: 20 }])); // 30

// function getTotal(arr) {
//   return arr.reduce((acc, { price }) => (acc += price), 0);
// }

// console.log(
//   pluck(
//     [
//       { name: 'a', age: 28 },
//       { name: 'b', age: 100 },
//     ],
//     'name'
//   )
// );
// ['a','b']

// function pluck(arr, value) {
//   return arr.map(item => {
//     if (item.hasOwnProperty(value)) {
//       return item[value];
//     }
//   });
// }

// console.log(isAnagram('anagram', 'nagaram')); // true
// console.log(isAnagram('rat', 'car')); // false

// function isAnagram(str1, str2) {
//   const counter1 = {};
//   const counter2 = {};
//   const arr1 = normalizeStr(str1).split('');
//   const arr2 = normalizeStr(str2).split('');

//   for (let i = 0; i < arr1.length; i += 1) {
//     counter1[arr1[i]] = (counter1[arr1[i]] ?? 0) + 1;
//   }

//   for (let i = 0; i < arr2.length; i += 1) {
//     counter2[arr2[i]] = (counter2[arr2[i]] ?? 0) + 1;
//   }

//   for (let key in counter1) {
//     if (!(key in counter2)) {
//       return false;
//     }
//     if (counter1[key] !== counter2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// function normalizeStr(str) {
//   return str.toLowerCase().trim();
// }

// function isAnagram(str1, str2) {
//   const s1 = str1.toLowerCase().trim();
//   const s2 = str2.toLowerCase().trim();

//   if (s1.length !== s2.length) return false;

//   const counter = {};

//   for (const char of s1) {
//     counter[char] = (counter[char] ?? 0) + 1;
//   }

//   for (const char of s2) {
//     if (!counter[char]) return false;
//     counter[char]--;
//   }

//   return true;
// }

// console.log(countDuplicates([1, 2, 2, 3, 3, 3]));
// { 2: 2, 3: 3 }

// function countDuplicates(arr) {
//   const counter = {};

//   for (const num of arr) {
//     counter[num] = (counter[num] ?? 0) + 1;
//   }

//   for (const key in counter) {
//     if (counter[key] <= 1) {
//       delete counter[key];
//     }
//   }
//   return counter;
// }

// console.log(longestWord('I love JavaScript so much'));
// 'JavaScript'

// function longestWord(str) {
//   const arr = str.split(' ');

//   if (!arr.length) return null;

//   return arr.reduce((acc, word) => (word.length > acc.length ? word : acc));
// }

// console.log(pairWithSum([2, 7, 11, 15], 26)); // true

// function pairWithSum(arr, target) {
//   const set = new Set(arr);

//   for (let i = 0; i < arr.length; i += 1) {
//     if (set.has(target - arr[i])) {
//       return true;
//     }
//   }
//   return false;
// }

console.log(longestUniqueSubstring('abcabcbb')); // 3

function longestUniqueSubstring(str) {
  const set = new Set();
  str = str.toLowerCase().trim();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right += 1) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left += 1;
    }
    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
