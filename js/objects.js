// const stones = [
//   {
//     name: 'Smaragd',
//     price: 1300,
//     quantity: 4,
//   },
//   {
//     name: 'Diamond',
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: 'Sapfir',
//     price: 400,
//     quantity: 7,
//   },
//   {
//     name: 'Aquamarin',
//     price: 200,
//     quantity: 2,
//   },
// ];

// function calcTotalPrice(stones, name) {
//   for (const stone of stones) {
//     if (stone.name === name) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return 'NO that stone';
// }

// console.log(calcTotalPrice(stones, 'Diamond'));
// console.log(calcTotalPrice(stones, 'Stone'));

const Transactions = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      amount,
      type,
      id: Date.now(),
    };
    return transaction;
  },
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transactions.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      return "You don' have enough money";
    }
    const transaction = this.createTransaction(amount, Transactions.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },
  getBalance() {
    return this.balance;
  },
  getTransactionsDetails(id) {
    for (const trans of this.transactions) {
      if (id === trans.id) {
        return trans;
      }
    }
    return 'NOT FOUND';
  },
  getTransactionsTotal(type) {
    let total = 0;
    for (const trans of this.transactions) {
      if (trans.type === type) {
        total += trans.amount;
      }
    }
    return total;
  },
};

account.deposit(1000);
account.deposit(2500);
account.deposit(700);
account.withdraw(3000);
// account.withdraw(500);
console.log(account);

console.log(account.getBalance());

// console.log(account.getTransactionsDetails(Date.now()));

console.log(account.getTransactionsTotal(Transactions.DEPOSIT));
