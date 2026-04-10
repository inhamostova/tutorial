const refs = {
  categories: document.querySelector('#categories'),
  items: document.querySelectorAll('.item'),
};

console.log(`Number of categories: ${refs.categories.children.length}`);

refs.items.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`);
});
