/********* Variables *********/

// 1. Create, Initialize
let a = 270;
let b = a - 5;
const c = "YOU CANT MODIFY IT";

// 2. Use it
a = 10;
// c = "HAHA";

console.log(a, b, c);

// Use const first!
// Use let if you really need it!
/*****************************/

/********* DataTypes *********/
// 1. String
const exStr = "I am Groot!";
console.log(exStr);

// 2. Boolean
const exBool = true;
console.log(exBool);

// 3. Number
const exNum = 15;
console.log(exNum);

// 4. float
const exFloat = 55.1;
console.log(exFloat);
/*****************************/

/*********** Array ***********/
// 1. stores data like list
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);

// 2. can include all datatypes and also mix them
const mixedOne = [1, 2, "U are Beautiful", true, 55.5];
console.log(mixedOne);

// 3. approach an element of array by indexing
console.log(daysOfWeek[3]);
/*****************************/

/*********** Object **********/
// 1. stores value with key like Dictionary
const myInfo = {
  name: "Penguin",
  age: 24,
  gender: "Female",
  isCute: true
};
console.log(myInfo);

// 2. approach value by using key but it's handled as a variable
console.log(myInfo.gender);
console.log(myInfo.isCute);

// 3. Although you declare Object with const, you can change values in Object.It does not cause an error.
myInfo.name = "Groot";
myInfo.age = 23;
console.log(myInfo.name, myInfo.age);

// 4. But you cannot modify new object.
// myInfo = true;
/*****************************/

/*** Combine Array and Object ***/
const newInfo = {
  name: "Penguin",
  age: 24,
  gender: "Female",
  isCute: true,
  favMovie: ["Joker", "Harry Potter", "Happy Ending"],
  favFood: [
    { name: "Noodle", fatty: true },
    { name: "Apple", fatty: false }
  ]
};

console.log(newInfo.favFood[0].name);
/********************************/
