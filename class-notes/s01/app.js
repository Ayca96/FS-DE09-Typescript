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
var nums = [1, 2, "Hi"];
nums.push("Merhaba");
nums.push(5);
nums.push(false);
console.log(nums);
nums.forEach(function (item) { return item.toLowerCase(); });
