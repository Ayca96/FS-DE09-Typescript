console.log("Cohort DE09");
var b = 5;
var c = 2;
// b ="5"; // hata veriyor
var e = "Hello";
var f = "World";
var g;
var h; // any atamasi yapar automatisch
var x, y, z; // tek satirda birden fazla degiskene type belirtemiyoruz, ilkinden sonrakileri any olarak kabul ediyor.
x = "Merhaba";
y = 5;
// Arrays
// let nums : number [] = [1,2, "Hi"]
// nums.push("Merhaba")
// nums.push(5);
// nums.push(false)
// console.log(nums);
// nums.forEach(item=>item.toLowerCase())
var usernames = ["Kemal", "Mustafa"];
usernames.push("Ayse");
// usernames.push(5) // Argument of type "number" is not assignable to parameter of type "string"
var surnames = [];
surnames.push("Harold");
surnames.push("25");
// type declaration 2.yol
// let nums2 : Array <number> = [5,6]
// console.log(surnames);
//* Tuples
var myTuple = [5, "merhaba", false];
console.log(myTuple);
var myTuple2;
myTuple2 = [6, "World"]; // eksik eleman mevcut
console.log(myTuple2);
var currentUser = 3 /* Role.DbAdmin */;
currentUser = 4 /* Role.Tester */;
console.log(currentUser);
