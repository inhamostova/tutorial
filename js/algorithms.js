// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([4, 4, 4, 5, 5, 6], 1));
// console.log(topKFrequent([1, 1, 1, 1, 7, 7, 3, 3, 37, 7, 2, 2, 2, 5, 5, 7, 11, 1], 3));

// function topKFrequent(arr, k) {
//   const counter = {};

//   for (const item of arr) {
//     counter[item] = (counter[item] ?? 0) + 1;
//   }

//   let entries = Object.entries(counter);
//   entries = entries.sort((a, b) => b[1] - a[1]);

//   const result = entries.slice(0, k).map(item => Number(item[0]));
//   return result;
// }

// console.log(productOfArrayExceptSelf([1, 2, 3, 4])); //[24, 12, 8, 6]
// console.log(productOfArrayExceptSelf([2, 5, 1])); //[5,2,10]

// function productOfArrayExceptSelf(arr) {
//   const result = [];
//   let product = 1;

//   for (let i = 0; i < arr.length; i += 1) {
//     result[i] = product;
//     product *= arr[i];
//   }

//   product = 1;

//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     result[i] = result[i] * product;
//     product *= arr[i];
//   }

//   return result;
// }

// Will run first
// setTimeout(() => {
//   // Will run last, after 2000 milliseconds
//   console.log('A');
// }, 2000);

// console.log('B');

// setTimeout(() => {
//   // Will run last, after 2000 milliseconds
//   console.log('C');
// }, 1500);
// // Will run second
// console.log('D');

// const timerId = setInterval(() => {
//   console.log('Tick');
// }, 2000);

// setTimeout(() => {
//   clearInterval(timerId);
// }, 5000);

// for (let i = 3; i > 0; i -= 1) {
//   const delay = i * 1000;
//   setTimeout(() => {
//     console.log(i);
//   }, delay);
// }

// const date = new Date('2030-08-23');
// console.log(date.getMonth());

const start = new Date('2030-04-23');
const end = new Date('2030-05-17');
console.log(end - start);
