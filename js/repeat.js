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

console.log(maxSum([1, 2, 3, 4, 5], 2));
console.log(maxSum([7, 1, 42, 2, 13, 3, 4, 22, 5], 2));
console.log(maxSum([7, 1, 2, 13, 3, 4, 22, 5], 3));

function maxSum(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i += 1) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let i = k; i < arr.length; i += 1) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(windowSum, maxSum);
  }

  return maxSum;
}
