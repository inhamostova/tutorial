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

console.log(fn([12, 3, 5, 6, 2, 15, 7], 4)); //{1:29,2:21,}

function fn(arr, k) {
  const stats = {};
  for (let i = 1; i <= k; i += 1) {
    stats[i] = 0;
  }

  for (let j = 0; j < arr.length; j += 1) {
    const values = Object.values(stats);
    const min = Math.min(...values);
    for (const key in stats) {
      if (stats[key] === min) {
        stats[key] += arr[j];
        break;
      }
    }
  }

  return stats;
}
