type bankAcc = {money: number, deposit: (val: number) => void};

let bankAccount: bankAcc = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};


let myself: {name: string, bankAccount: bankAcc, hobbies: string[]} = {
    name: "Gareth",
    bankAccount: bankAccount,
    hobbies: ["Flying", "Driving"]
};

myself.bankAccount.deposit(3000);

console.log(myself);