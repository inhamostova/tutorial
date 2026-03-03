const cart = {
  items: [
    { name: '🍓', price: 60, quantity: 1 },
    { name: '🍌', price: 80, quantity: 1 },
  ],
  getTotalQuantity() {
    let total = 0;
    for (const item of this.items) {
      total += item.quantity;
    }
    return total;
  },
  hasProduct(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        return true;
      }
    }
    return false;
  },
  getMostExpensiveProduct() {
    let mostExpensiveProduct = this.items[0] || null;
    for (let i = 0; i < this.items.length; i += 1) {
      if (mostExpensiveProduct.price < this.items[i].price) {
        mostExpensiveProduct = this.items[i];
      }
    }
    return mostExpensiveProduct;
  },
  getItems() {
    return this.items;
  },
  applyDiscount(percent) {
    for (let i = 0; i < this.items.length; i += 1) {
      this.items[i].price *= (100 - percent) / 100;
    }
  },
  add(product) {
    for (const productItem of this.items) {
      if (productItem.name === product.name) {
        this.increaseQuantity(product.name);
        return;
      }
    }

    this.items.push({ ...product, quantity: 1 });
    return;
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
        return;
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
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍌', price: 60 });
cart.add({ name: '🍇', price: 110 });

// cart.add({ name: '🍓', price: 50 });

// console.log(cart.remove('🍋'));
// console.log(cart.getMostExpensiveProduct());

cart.applyDiscount(10);
console.log(cart.getItems());
// console.log(cart.getTotalQuantity());
// console.log(cart.hasProduct('banan'));
