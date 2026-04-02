const product = {
  name: 'Сервоприводи',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere.',
  price: 2000,
  available: true,
  onSale: true,
};

const products = [
  {
    name: 'Сервоприводи',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere.',
    price: 2000,
    available: true,
    onSale: true,
  },
  {
    name: 'Генератор поля',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere.',
    price: 2700,
    available: true,
    onSale: false,
  },
  {
    name: 'Нульовий елемент',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere.',
    price: 1500,
    available: false,
    onSale: false,
  },
  {
    name: 'Титанум',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere.',
    price: 3000,
    available: true,
    onSale: false,
  },
  {
    name: 'Труби',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere.',
    price: 2500,
    available: false,
    onSale: false,
  },
];

{
  /* <article class="product">
  <h2 class="product-name">Name</h2>
  <p class="product-description">Description</p>
  <p class="product-price">Price</p>
</article>; */
}

function makeProduct({ name, description, price }) {
  const producrEl = document.createElement('article');
  producrEl.classList.add('product');

  const titleEl = document.createElement('h2');
  titleEl.classList.add('product-name');
  titleEl.textContent = name;

  const descrEl = document.createElement('p');
  descrEl.classList.add('product-description');
  descrEl.textContent = description;

  const priceEl = document.createElement('p');
  priceEl.classList.add('product-price');
  priceEl.textContent = `Price: ${price}`;

  producrEl.append(titleEl, descrEl, priceEl);

  return producrEl;
}

function makeMarkup(arr) {
  return arr.map(makeProduct);
}

// console.log(makeMarkup(products));

const container = document.querySelector('.js-products');
container.append(...makeMarkup(products));
