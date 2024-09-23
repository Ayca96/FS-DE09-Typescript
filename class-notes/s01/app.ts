console.log("Cohort DE09");


let b = 5;
let c = 2;

// b ="5"; // hata veriyor

let e : string= "Hello"
let f = "World"

let g : boolean
let h; // any atamasi yapar automatisch

let x,y,z :string // tek satirda birden fazla degiskene type belirtemiyoruz, ilkinden sonrakileri any olarak kabul ediyor.

x="Merhaba";
y=5

// Arrays

// let nums : number [] = [1,2, "Hi"]

// nums.push("Merhaba")
// nums.push(5);
// nums.push(false)

// console.log(nums);

// nums.forEach(item=>item.toLowerCase())

let usernames : string [] = ["Kemal", "Mustafa"]
usernames.push("Ayse")
// usernames.push(5) // Argument of type "number" is not assignable to parameter of type "string"

let surnames : string [] = [];
surnames.push("Harold")
surnames.push("25")

// type declaration 2.yol

// let nums2 : Array <number> = [5,6]

// console.log(surnames);

//* Tuples

let myTuple :[number,string,boolean] = [5, "merhaba", false]
console.log(myTuple);

let myTuple2 : [number,string,boolean];
myTuple2 = [6,"World"] // eksik eleman mevcut
console.log(myTuple2);


// Tuples of Array

// let myTuple3 : [number,string] []
// myTuple3 = [[5, "5"] , [6, "6"]]
// myTuple3.push([7,"7"])
// myTuple3.push(false) // ts error
// console.log(myTuple3);


//? Enum  ( numaralandirma)

// const enum Role {
//   User, // User = 0
//   Admin, // Admin = 1
//   Tester // Tester = 2

// }

// let currentUser : Role = Role.Admin
// console.log(currentUser);

const enum Role {
  User, // User = 0
  Admin, // Admin = 1
  DbAdmin = Admin * 3,
  Tester // Tester = 2

}

let currentUser : Role = Role.DbAdmin
currentUser =  Role.Tester
console.log(currentUser);

enum StatusCodes {
  NotFound = 404,
  Created = 201,
  Accepted = 202,
  BadRequest = 500,
  NoContent = 204,
  Success= 200,
}

const response: StatusCodes = StatusCodes.Success

enum Sizes {
  Small ="S",
  Medium = "M",
  Large = "L"
}