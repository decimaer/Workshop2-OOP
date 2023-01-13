"use strict";

// Constructor function
console.log("Constructor function");
const Shape = function (name, side, sideLength) {
	this.name = name;
	this.side = side;
	this.sideLength = sideLength;
};

Shape.prototype.calcPerimeter = function () {
	return this.side * this.sideLength;
};

const square = new Shape("square", 4, 5);
console.log(square.calcPerimeter());

const triangle = new Shape("triangle", 3, 3);
console.log(triangle.calcPerimeter());

// ES6 Classes
console.log("ES6 Classes");
class Shape2 {
	constructor(name, side, sideLength) {
		this.name = name;
		this.side = side;
		this.sideLength = sideLength;
	}

	calcPerimeter() {
		return this.side * this.sideLength;
	}
}

const square2 = new Shape2("square", 4, 5);
console.log(square2.calcPerimeter());

const triangle2 = new Shape2("triangle", 3, 3);
console.log(triangle2.calcPerimeter());

// Klassen Bankkonto
console.log("Klassen Bankkonto");

class BankAccount {
	owner;
	#balance = 0;

	constructor(owner) {
		this.owner = owner;
	}

	deposit(amount) {
		this.#balance += amount;
		return `You deposited ${amount}.`;
	}

	withdraw(amount) {
		if (amount > this.#balance) {
			return `You cannot withdraw ${amount}. ${this.getBalance()}`;
		} else {
			this.#balance -= amount;
			return `You withdrew ${amount}.`;
		}
	}

	getBalance() {
		return `You have ${this.#balance} in your account.`;
	}
}

const hampusAccount = new BankAccount("Hampus");
console.log(hampusAccount.deposit(10000));
console.log(hampusAccount.getBalance());
console.log(hampusAccount.withdraw(15000));
console.log(hampusAccount.withdraw(10000));
console.log(hampusAccount.getBalance());
