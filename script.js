const user = {
    hobby: "",
    premium: true,
    mood: "happy"
};
user.hobby = "skydiving";
user.premium = false;
for (const [key, value] of Object.entries({ ...user })) {
    console.log(`${key}: ${value}`);
}

const user1 = {
    mood1: "happy",
    hobby1: "skydiving",
    premium1: true,
};
const countProps = (object) => Object.keys(object).length;
console.log(countProps({ ...user1 }));

const employees3 = [
    { name: "employee1", tasks: 2 },
    { name: "employee2", tasks: 3 },
    { name: "employee3", tasks: 5 },
    { name: "employee4", tasks: 1 },
    { name: "employee5", tasks: 8 },
    { name: "employee6", tasks: 2 },
]
const findBestEmployee = (objects) => {
    return objects.reduce((acc, object) => {
        return object.tasks > acc.tasks ? object : acc;
    })
};
console.log(findBestEmployee([...employees3]));

const employees = {
    employee1: 1000,
    employee2: 1500,
    employee3: 2000,
    employee4: 1200,
    employee5: 1800,
};
const countTotalSalary = (employees) => {
    return Object.values({ ...employees }).reduce((total, sum) => total + sum, 0);
};
console.log(countTotalSalary(employees));

const employees2 = [
    { name: "employee1", tasks: 2 },
    { name: "employee2", tasks: 3 },
    { name: "employee3", tasks: 5 },
    { name: "employee4" },
    { name: "employee5", tasks: 8 }
];
const getAllPropValues = (arr, prop) => {
    return arr.map(item => item[prop]);
};
console.log(getAllPropValues([...employees2], 'tasks'));

const products = [
    { name: "apple", price: 15, quantity: 10 },
    { name: "banana", price: 50, quantity: 20 },
    { name: "apple", price: 18, quantity: 15 }
];
const calculateTotalPrice = (allProducts, productName) => {
    const product = allProducts.find(({ name }) => name === productName);
    if (product) {
        return product.price * product.quantity;
    }
};
console.log(calculateTotalPrice([...products], "apple"));


const account = {
    balance: 0,
    transactions: [],
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push({ type: 'deposit', amount });
        }
    },
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push({ type: 'withdraw', amount });
        }
    },
    transactionHistory() {
        return this.transactions;
    },
};

account.deposit(100);
account.withdraw(50);
console.log(account.transactionHistory());

let { ...all } = account;
console.log(all)