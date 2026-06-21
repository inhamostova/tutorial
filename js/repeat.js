// console.log(getArrayLength([1, 2, 3])); // 3
// console.log(getArrayLength(['a', 'b'])); // 2
// console.log(getArrayLength([])); // 0

// function getArrayLength(arr) {
//   return arr.length;
// }

// console.log(getLastElement([1, 2, 3])); // 3
// console.log(getLastElement(['a', 'b', 'c'])); // 'c'
// console.log(getLastElement([10])); // 10

// function getLastElement(arr) {
//   return arr[arr.length - 1];
// }

// console.log(sumArray([1, 2, 3])); // 6
// console.log(sumArray([10, 20])); // 30
// console.log(sumArray([])); // 0

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(findLargest([3, 7, 2, 9])); // 9
// console.log(findLargest([-5, -1, -10])); // -1
// console.log(findLargest([]));

// function findLargest(arr) {
//   let max = arr[0] ?? 0;

//   for (const num of arr) {
//     max = num > max ? num : max;
//   }

//   return max;
// }

// console.log(reverseString('hello')); // 'olleh'
// console.log(reverseString('JavaScript')); // 'tpircSavaJ'

// function reverseString(str) {
//   let reverseStr = '';

//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     reverseStr += str[i];
//   }

//   return reverseStr;
// }

// const VOWELS = ['a', 'e', 'i', 'o', 'u'];
// console.log(countVowels('javascript'));

// function countVowels(str) {
//   let vowelsInStr = 0;

//   for (let i = 0; i < str.length; i += 1) {
//     if (VOWELS.includes(str[i])) {
//       vowelsInStr += 1;
//     }
//   }

//   return vowelsInStr;
// }

// console.log(isPalindrome('Madam')); // true
// console.log(isPalindrome('hello')); // false
// console.log(isPalindrome('rAcecar')); // true

// function isPalindrome(str) {
//   return reverseString(str) === str.toLowerCase();
// }

// function reverseString(str) {
//   let reverseStr = '';

//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     reverseStr += str[i];
//   }

//   return reverseStr.toLowerCase();
// }

// const users = [
//   { name: 'Alex', age: 25 },
//   { name: 'Mia', age: 30 },
//   { name: 'John', age: 20 },
// ];

// console.log(getNames(users));

// function getNames(users) {
//   return users.map(({ name }) => name);
// }

// const users = [
//   { name: 'Alex', active: true },
//   { name: 'Mia', active: false },
//   { name: 'John', active: true },
// ];

// console.log(getActiveNames(users));

// function getActiveNames(users) {
//   return users.filter(({ active }) => active).map(({ name }) => name);
// }

// console.log(
//   groupBy([
//     { type: 'fruit', name: 'apple' },
//     { type: 'fruit', name: 'banana' },
//     { type: 'veg', name: 'carrot' },
//     { type: 'veg', name: 'onion' },
//     { type: 've123g', name: 'onion' },
//   ])
// );

// function groupBy(arr) {
//   return arr.reduce((acc, item) => {
//     // if (!acc[item.type]) {
//     //   acc[item.type] = [];
//     // }
//     // acc[item.type].push(item);
//     (acc[item.type] ??= []).push(item);
//     return acc;
//   }, {});
// }

// {
//   fruit: [
//     { type: 'fruit', name: 'apple' },
//     { type: 'fruit', name: 'banana' }
//   ],
//   veg: [
//     { type: 'veg', name: 'carrot' },
//     { type: 'veg', name: 'onion' }
//   ]
// }

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 20, 11, 15], 9));
// console.log(twoSum([2, 20, 11, 2, 35, 15, 50], 26));

// function twoSum(arr, num) {

//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = i + 1; j < arr.length; j += 1) {
//       if (arr[i] + arr[j] === num) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

// function twoSum(arr, num) {
//   const map = new Map();

//   for (let i = 0; i < arr.length; i += 1) {
//     if (map.has(num - arr[i])) {
//       return [map.get(num - arr[i]), i];
//     }
//     map.set(arr[i], i);
//   }

//   return [];
// }

// console.log(containsDuplicate([1, 2, 3, 1]));
// true
// console.log(containsDuplicate([1, 2, 3, 4]));
// false

// function containsDuplicate(arr) {
//   const set = new Set();

//   for (const num of arr) {
//     if (set.has(num)) {
//       return true;
//     }
//     set.add(num);
//   }

//   return false;
// }

// console.log(maxSum([1, 2, 3, 4, 5], 2));
// console.log(maxSum([7, 1, 42, 2, 13, 3, 4, 22, 5], 2));
// console.log(maxSum([7, 1, 2, 13, 3, 4, 22, 5], 3));

// function maxSum(arr, k) {
//   let windowSum = 0;
//   let maxSum = 0;

//   for (let i = 0; i < k; i += 1) {
//     windowSum += arr[i];
//   }

//   maxSum = windowSum;

//   for (let i = k; i < arr.length; i += 1) {
//     windowSum = windowSum - arr[i - k] + arr[i];
//     maxSum = Math.max(windowSum, maxSum);
//   }

//   return maxSum;
// }

// console.log(maxSum([1, 2, 3, 4, 5], 2)); // 9
// console.log(maxSum([7, 1, 42, 2, 13, 3, 4, 22, 5], 2));
// console.log(maxSum([7, 1, 2, 13, 3, 4, 22, 5], 3));

// console.log(maxSum([2, 1, 5, 1, 3, 2], 3));

// function maxSum(arr, k) {
//   let maxSum = 0;
//   let total = 0;

//   for (let i = 0; i < k; i += 1) {
//     total += arr[i];
//   }

//   console.log(total);
//   maxSum = total;

//   for (let i = k; i < arr.length; i += 1) {
//     total = total - arr[i - k] + arr[i];
//     console.log(total);
//     maxSum = Math.max(maxSum, total);
//   }

//   return maxSum;
// }

// console.log(findAverage([1, 2, 3, 4, 5], 2)); //4.5

// function findAverage(arr, k) {
//   let total = 0;
//   let maxSum = 0;

//   for (let i = 0; i < k; i += 1) {
//     total += arr[i];
//   }

//   maxSum = total;

//   for (let i = k; i < arr.length; i += 1) {
//     total = total - arr[i - k] + arr[i];
//     maxSum = Math.max(maxSum, total);
//   }

//   return maxSum / k;
// }

// function findAverage(arr, k) {
//   let windowAverage = 0;
//   let maxAverage = 0;
//   let total = 0;

//   for (let i = 0; i < k; i += 1) {
//     total += arr[i];
//     windowAverage = total / k;
//   }

//   maxAverage = windowAverage;

//   for (let i = k; i < arr.length; i += 1) {
//     total = total - arr[i - k] + arr[i];
//     windowAverage = total / k;
//     maxAverage = Math.max(maxAverage, windowAverage);
//   }

//   return maxAverage;
// }

// console.log(containsDuplicateWithinK([1, 2, 3, 1], 3)); //true
// console.log(containsDuplicateWithinK([1, 2, 3, 4, 1], 3)); //false
// console.log(containsDuplicateWithinK([1, 2, 5, 7, 3, 1, 43, 2, 1], 3));

// function containsDuplicateWithinK(arr, k) {
//   const set = new Set();

//   for (let i = 0; i < arr.length; i += 1) {
//     if (set.has(arr[i])) {
//       return true;
//     }
//     set.add(arr[i]);
//     if (set.size > k) {
//       set.delete(arr[i - k]);
//     }
//   }

//   return false;
// }

// console.log(longestUniqueSubstring('abcabcbb'));
// console.log(longestUniqueSubstring('bbbbb'));
// console.log(longestUniqueSubstring('baaqweqr'));

// function longestUniqueSubstring(str) {
//   let maxLength = 0;
//   let left = 0;
//   const set = new Set();

//   for (let right = 0; right < str.length; right += 1) {
//     while (set.has(str[right])) {
//       set.delete(str[left]);
//       left += 1;
//     }
//     set.add(str[right]);
//     maxLength = Math.max(maxLength, set.size);
//   }

//   return maxLength;
// }

// console.log(maxSubarraySum([2, 3, 1, 2, 4, 3], 3));

// function maxSubarraySum(arr, k) {
//   let windowSum = 0;
//   let maxSum = 0;

//   for (let i = 0; i < k; i += 1) {
//     windowSum += arr[i];
//   }

//   maxSum = windowSum;

//   for (let i = k; i < arr.length; i += 1) {
//     windowSum = windowSum - arr[i - k] + arr[i];
//     maxSum = Math.max(maxSum, windowSum);
//   }

//   return maxSum;
// }

// console.log(characterReplacement('ABAB', 2));
// console.log(characterReplacement('AABBA', 1));
// console.log(characterReplacement('AABBAAACBA', 2));

// function characterReplacement(str, k) {
//   let left = 0;
//   let maxFreq = 0;
//   let maxLength = 0;

//   const map = {};

//   for (let right = 0; right < str.length; right += 1) {
//     map[str[right]] = (map[str[right]] ?? 0) + 1;
//     maxFreq = Math.max(...Object.values(map));
//     while (right - left + 1 - maxFreq > k) {
//       map[str[left]] -= 1;
//       left += 1;
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }

// const app = document.querySelector('#app');

// renderParagraph();

// function renderParagraph() {
//   const par = document.createElement('p');
//   par.textContent = 'Hello DOM';
//   app.append(par);
// }

// const fruits = ['Apple', 'Banana', 'Orange'];

// const list = document.querySelector('#list');

// renderList(fruits);

// function renderList(fruits) {
//   const arr = [];
//   for (const fruit of fruits) {
//     const item = document.createElement('li');
//     item.textContent = `${fruit}`;
//     arr.push(item);
//   }
//   list.append(...arr);
// }

// const btn = document.querySelector('#btn');
// const counter = document.querySelector('#counter');

// btn.addEventListener('click', onClick);

// function onClick() {
//   counter.textContent = Number(counter.textContent) + 1;
// }

// const btn = document.querySelector('#theme-btn');
// const box = document.querySelector('#box');

// btn.addEventListener('click', onClick);

// function onClick() {
//   box.classList.toggle('dark');
// }

// const list = document.querySelector('#list');

// list.addEventListener('click', onClick);

// function onClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const itemToRemove = evt.target.closest('li');
//   itemToRemove.remove();
// }

const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];

list.insertAdjacentHTML('beforeend', createTasksMarkup(tasks));

form.addEventListener('submit', onSubmit);
list.addEventListener('click', onListClick);

function onListClick(evt) {
  const { target } = evt;

  if (target.classList.contains('delete-btn')) {
    const itemToRemove = target.closest('li');
    itemToRemove.remove();
  }

  if (target.classList.contains('task-text')) {
    target.closest('li').classList.toggle('completed');
  }
}

function onSubmit(evt) {
  evt.preventDefault();

  const value = input.value.trim();

  if (!value) return;

  tasks.push(value);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  list.insertAdjacentHTML('beforeend', createTaskMarkup(value));

  input.value = '';

  input.focus();
}

function createTasksMarkup(items) {
  return items.map(createTaskMarkup).join('');
}

function createTaskMarkup(value) {
  return `<li>
  <span class="task-text">${value}</span>
  <button class="delete-btn">X</button>
</li>`;
}
