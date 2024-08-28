"use strict";
class BankAccount {
    #balance;

  constructor(balance) {
    this.#balance = balance;
  }
  deposit(depositSum) {
    if (depositSum < 0) {
      console.log(
        `You can not add negative amount to your bank acount. $${depositSum} transaction failed.`
      );
      return;
    }

    this.#balance += depositSum;
  }
  withdraw(withdrawSum) {
    if (withdrawSum < 0) {
      console.log(
        `You can not withdraw negative amount to your bank acount. $${withdrawSum} transaction failed.`
      );
      return;
    }

    if (this.#balance < 0 || this.#balance < withdrawSum) {
      console.log(
        `You do not have enough money on your account. $${withdrawSum} transaction failed.`
      );
      return;
    }

    this.#balance -= withdrawSum;
  }
  getBalance() {
    return this.#balance;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300

