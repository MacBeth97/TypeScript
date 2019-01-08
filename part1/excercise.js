"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Gareth",
    bankAccount: bankAccount,
    hobbies: ["Flying", "Driving"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
