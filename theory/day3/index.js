/********** Function **********/
// console is also object and log is a built-in function
console.log(console);

// define function
function sayHello(name, age) {
  console.log("Hello! " + name + "! I am " + age + " years old.");
}

// use function
sayHello("Groot", 23);
/******************************/

/******* More Function ********/
function sayHi(name, age) {
  return `Hi ${name}! you are ${age} years old.`;
}

const result = sayHi("Penguin", 24);
console.log(result);

const calculator = {
  plus: function(x, y) {
    return x + y;
  },
  sub: function(x, y) {
    return x - y;
  },
  mult: function(x, y) {
    return x * y;
  },
  div: function(x, y) {
    return x / y;
  }
};

console.log(calculator.plus(3, 4));
console.log(calculator.sub(3, 4));
console.log(calculator.mult(3, 4));
console.log(calculator.div(3, 4));

/******************************/
