function holler() {
  console.log('Hey You!');
}

const whisper = function () {
  console.log('Pss I have a secret');
};

// console.log(setTimeout(whisper, 4000));

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

function power(x, y) {
  return x ** y;
}

const mathFuncs = [add, subtract, multiply, divide, power];
// console.log(mathFuncs[2](2, 3)); //6

function doMath(a, b, mathFunc) {
  return mathFunc(a, b);
}

// console.log(doMath(7, 3, multiply)); //21

doMath(3, 4, function (a, b) {
  //   console.log(a ** b);
}); //81

function doAllMath(a, b, mathFuncs) {
  for (let func of mathFuncs) {
    console.log(func(a, b));
  }
}

// console.log(doAllMath(4, 8, mathFuncs));

//------------------  forEach
const colors = ['teal', 'cyan', 'peach', 'purple'];

//Example #1 forEach
// Option #1
function yell(val, i) {
  const caps = val.toUpperCase();
  console.log(`At index ${i}, ${caps}`);
}

colors.forEach(yell);

//Option #2
// colors.forEach(function (val) {
//   console.log(val.toUpperCase());
// });

//-----Example #2
// Option #1
const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;

// prices.forEach(function (price) {
//   total += price;
// });
// console.log(total);

// Option #2
for (let price of prices) {
  total += price;
}

console.log(total);

//----------Simple Version of forEach
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
forEach(colors, function (color, i) {
  console.log(color.toUpperCase(), 'at index of:', i);
});

colors.forEach(function (color, i) {
  console.log(color.toUpperCase(), 'at index of:', i);
});
