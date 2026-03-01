const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    if (!this.items.length) {
      this.items.push({ ...product, quantity: 1 });
      return;
    }

    for (const productItem of this.items) {
      if (productItem.name === product.name) {
        this.increaseQuantity(product.name);
        return;
      }
      this.items.push({ ...product, quantity: 1 });
      return;
    }
  },
  remove(productName) {
    for (const product of this.items) {
      if (product.name === productName) {
        const idx = this.items.indexOf(product);
        this.items.splice(idx, 1);
        return `${productName} succesfully removed from your cart`;
      }
    }

    return 'There is no such product in your cart';
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;

    for (const product of this.items) {
      total += product.price * product.quantity;
    }

    return total;
  },
  increaseQuantity(productName) {
    for (const product of this.items) {
      if (product.name === productName) {
        product.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const product of this.items) {
      if (product.name === productName) {
        if (product.quantity === 1) {
          this.remove(product.name);
          return;
        }
        product.quantity -= 1;
        return;
      }
    }
  },
};

cart.add({ name: '🍓', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍌', price: 60 });
cart.add({ name: '🍇', price: 110 });

cart.add({ name: '🍓', price: 50 });

console.log(cart.remove('🍋'));

console.log(cart.getItems());
