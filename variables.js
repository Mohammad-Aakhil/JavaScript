// alert('welcome user');
// In js variables can be dynamically typed which means we don't need to specify the 
// datatype of a variable in advance until we want
actor = 'Tony Stark';
role = 'Iron man';
age = '45';
n = null;
d = undefined;
console.log(actor+ ' played ' +role+ ' in latest movie at the age of ' +age);

// here the variable age is being declared three times with different values 
// which mess up the code, creating chaos and confusion
// var allows same variable to redeclare rther than updating it so it's not recomened to use
var age = 10;

var age = 20;

var age = 30;

console.log(age)


let price = 110;    //declaring only once

price = 111;        //updating

price = 98;         //updating

console.log(price)

// when an variable is declared using const it can be either redeclared or updated it remains constant always
const lastName = 'Mohammad'


//Primitive data types are 7 types they are:- Number, String, Boolean, Undefined, Null, Bigint & Symbol 
let name = "john";
console.log(' name = "john" ')
console.log(typeof name)         //String

let empid  = 12345;
console.log(' age  = 12345 ')
console.log(typeof age)          //Number

let isEmployeed = true;
console.log(' isEmployeed = true ')
console.log(typeof isEmployeed)  //Boolean

let x;
console.log(' let x ')
console.log(typeof x)           //Undefined

let y = null;
console.log(' let y = null ')
console.log(typeof y)            //absence of object

let a = BigInt("1999");
console.log(' let a = Bigint("1999") ')
console.log(typeof a)            //Bigint

let b = Symbol("Salam waalikum");
console.log(' let b = Symbol("Salam waalikum") ')
console.log(typeof b)


//Non-Primitive datatypes:-
// objects(Array, functions)
// an object is an collection of different variables of same or different data types 
const Player = {
    Name :"Rohit",
    Age :38,
    isCaptain : true, 
    strikeRate : 164,
};

//two ways to access variables of an object are:-
console.log(Player.Name)
console.log(Player["isCaptain"])

//updating variable
Player.Age = Player.Age + 1;
Player.strikeRate += 15;

console.log(Player.Age)
console.log(Player.strikeRate)

console.log(typeof Player.isCaptain)


let num = prompt("enter ur marks")

if  (num>=27 && num<=100){
    console.log("Pass");
}else if (num<27 && num>=0){
    console.log("Fail");
}else  {
    console.log("Invalid marks");
}
