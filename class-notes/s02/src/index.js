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
