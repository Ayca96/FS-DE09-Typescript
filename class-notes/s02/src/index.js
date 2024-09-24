console.log("DE09 Session2");
const person = {
    username: "Ayca",
    age: 28,
    city: "Samsun",
    isActive: false
};
const person3 = {
    username: "Ayca",
    age: 28,
    city: "Samsun",
    isActive: true
};
const redCar = {
    model: "X5",
    year: new Date(),
    price: 3000,
    color: "red",
    getName: () => {
        return "X5";
    }
};
const user1 = {
    username: "Ayca",
    firstName: "Ayca",
    age: 28,
    getName: () => {
        console.log("5");
    }
};
const adminUser = {
    username: "admin",
    firstName: "admin",
    age: 30,
    isAdmin: true,
    password: "1234",
    getName: () => console.log("admin"),
};
console.log(adminUser);
// const users = [] // any[]
// users.push(5)
// users.push({username:"s"})
const users = [];
// users.push(5)
// users.push("5")
// users.push({username:"as"}) // error 
users.push({
    username: "Ayca",
    firstName: "Ayca",
    age: 28,
    getName: () => "as"
});
//! Type Inference 
//Tip İnferansı (Type Inference), TypeScript'te derleyicinin, bir değişkenin veya bir ifadenin türünü otomatik olarak tahmin edebilmesidir. Yani, bir veri türünü açıkça belirtmesen bile, TypeScript o değerin türünü belirleyebilir.
let myName = "Ayca";
// myName = 5 
let arr = []; // any [] bos arrayi default olarak any array kabul ediyor.
let myArr = [
    {
        username: "ayca",
        department: " IT",
        salary: 5000,
    }
];
// myArr.push(5)
// myArr.push({name:"asda"})
myArr.push({ username: "asda", department: "IT", salary: 6000 });
const myArr2 = [...myArr, ...users];
// myArr2.push(5)
