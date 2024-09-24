console.log("DE09 Session2");

const person : {username:string, age:number, city:string, isActive:boolean}={
  username:"Ayca",
  age:28,
  city:"Samsun",
  isActive:false
};

// const person2 : {username:string; age:number; city:string; isActive:boolean;}={
//   username:"Ayca",
//   age:28,
//   city:"Samsun",
//   isActive:false
//   address: fdsgad;  // address type olmadigi icin hata veriyor.
// };

type Person = {
  username:string;
  age:number;
  city:string;
  isActive:boolean;
};

const person3 : Person ={
  username:"Ayca",
  age:28,
  city:"Samsun",
  isActive:true
}


//* Interface  bu yöntem daha cok kullaniliyor type yöntemine kiyasla. Interface daha yaygin ve kapsamli

interface ICar {
  model:string;
  year:Date;
  price:number;
  color:string;
  getName: () => string;

}

const redCar : ICar = {

  model:"X5",
  year: new Date(),
  price: 3000,
  color:"red",
  getName : () =>  {
  return "X5"
  }
}

interface IUser {
  username: string;
  firstName:string;
  age:number;
  getName : () => void; // fonksiyon deger döndürmüyor void yazdigimiz icin. return yapmayacak. Yukardaki fonksiyonda return yazmayinca fonksiyon calismiyor altini ciziyor void te öyle olmuyor zaten fonk calismiyor.

}

const user1 : IUser = {
  username:"Ayca",
  firstName:"Ayca",
  age:28,
  getName : () =>{
    console.log("5");
    
  }

}

// interface IAdminUser {
//   username: string;
//   firstName:string;
//   age:number;
//   getName : () => void;
//   isAdmin:boolean;
//   password:string;
// }
// interface IManagerUser {
//   username: string;
//   firstName:string;
//   age:number;
//   getName : () => void;
//   isAdmin:boolean;
//   password:string;
// }

interface IAdminUser2 extends IUser {
  isAdmin:boolean;
  password:string;
}

const adminUser : IAdminUser2 = {
  username: "admin",
  firstName:"admin",
  age:30,
  isAdmin:true,
  password:"1234",
  getName : () =>console.log("admin"),
  
}


console.log(adminUser);

// const users = [] // any[]

// users.push(5)
// users.push({username:"s"})


const users : IUser [] = [] 

// users.push(5)
// users.push("5")
// users.push({username:"as"}) // error 


users.push({ 
  username:"Ayca",
  firstName:"Ayca",
  age:28,
  getName : () =>
    "as"
 })


 //! Type Inference 

 //Tip İnferansı (Type Inference), TypeScript'te derleyicinin, bir değişkenin veya bir ifadenin türünü otomatik olarak tahmin edebilmesidir. Yani, bir veri türünü açıkça belirtmesen bile, TypeScript o değerin türünü belirleyebilir.

 let myName = "Ayca"

// myName = 5 

let arr = [] // any [] bos arrayi default olarak any array kabul ediyor.

let myArr = [
  {
    username : "ayca",
    department :" IT",
    salary: 5000,
  }
]

// myArr.push(5)
// myArr.push({name:"asda"})

myArr.push({username:"asda", department:"IT", salary:6000})

const myArr2 = [...myArr, ...users]
// myArr2.push(5)