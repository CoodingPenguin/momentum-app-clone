console.log("I'm studying JS. I'm cute! I'm Worth It!")

const a = 100;  // 값 변경 불가능, 상수 취급
let b = a - 5;  // 값 변경 가능
var c = 10;     // 3년 전에는 var만 사용가능했지만, 
                // 이젠 let도 쓸 수 있다.
                // 이젠 var 쓰지 말고 let으로
console.log(b, a); 

// string
const str = "I'm String";
// boolean
const bool = true;
// number
const num = 100;
// float
const floatNum = 55.1;

// Array == List
const daysOfWeek = [true, 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);  // Wed

// Object 거의 Dictionary랑 비슷
// 1. label(=key)가 변수로 취급됨 -> 접근시 .으로 접근
// 2. value값으로 아무거나 다 들어갈 수 있음
// 3. const로 선언했더라도 value를 변경 가능 
const info = {
    name:'SO HYUN',
    age:23,
    gender:'Female',
    isPretty:true,
    favMovies: ['Good Days', 'Happy Days'],
    favFood: [
        {name:'Kimchi', fatty:false}, 
        {name:'Meat', fatty:true}
    ]
};

console.log(info.name);

info.age = 24;

console.log(info.age)
console.log(info.favFood[1].name)