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

console.log(getUniqueValues([{ id: 1 }, { id: 1 }, { id: 2 }]));

// console.log(getUniqueValues([1, 2, 2, 3, 4, 4]));
// → [1, 2, 3, 4]

function getUniqueValues(arr) {
  const seen = new Set();
  console.log(seen);

  return arr.filter(item => {
    if (seen.has(item.id)) {
      return false;
    }
    seen.add(item.id); // запам’ятали
    return true;
  });
}

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

groupBy([
  { type: 'fruit', name: 'apple' },
  { type: 'veg', name: 'carrot' },
  { type: 'fruit', name: 'banana' },
]);
// {
//   fruit: [{...}, {...}],
//   veg: [{...}]
// }

function groupBy(arr) {
  return arr.reduce((acc, { type, name }) => {}, { fruit: [], veg: [] });
}
