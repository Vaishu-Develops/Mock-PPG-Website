// variables
let a = 1;
var b = 2;
const c = 3;
console.log(c); 
// data types
let number = 4;
let string = "hello";
let isfalse = false;
let istrue = true;
const flot = 10.5;

const pi = Math.PI;
const e = Math.E;

//object
const user ={
    name :"John",
    age : 30,
    city : "New York",
    bankbalance : 10000000,
}
console.log(user);
console.log(user.name);

//nested objects
const user2 ={
    name : "John",
    age : 30,
    city: "new York",
    address:{
        street :"123 Main st",
        pincode : 1001,
    }
}
console.log("Before Delete",user2);
delete user2.age;
console.log("After Delete",user2);
console.log(user2.name);

//string methods
let str ="Hello World";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("world"));
console.log(str.slice(0,5));
console.log(str.slice(6,0));

let arr = [1,2,3,4,5];
console.log("array",arr);
console.log("Index of 0",arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log("Reverse arr",arr.toReversed());
console.log("Arr length",arr.length);
console.log(arr.push(6));

//for loop

for(let i = 0; i < user.length;i++){
    console.log(user[i].name);
}

// if else
let x = 5 ;
let y = 10;
if(x>y){
    console.log("x is greater than y");
}
else{
    console.log("x is less than y");
}

// ternary operator
let result = x > y ? "x is greater than y" : "x is less than y";
console.log(result);

async function getData(){
    try{
        const data =await fetch ("https://fakestoreapi.in/api/products");
        const jsonData = await data.json();
        console.log(jsonData);
    }
    catch(error){
        console.log(error);
    }
}