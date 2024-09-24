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