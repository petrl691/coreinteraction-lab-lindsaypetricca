function printhello () {

console.log(hello)
}

var a = 'lindsay';
var b = 'petricca';

var c = a + b;
console.log(c);


var whatever = 10;

if (whatever > 0) {
    console.log('true');
} else if (whatever < 10) {
    console.log('false');

for (var i = 0; i < 10; ++i) {
    console.log('This loop has run ' + i + ' times');
}


///////////////////////////////

// Problem 1
function printHelloWorld () {
  console.log('hello world')
}

printHelloWorld();

// Problem 2
function combineStrings (firstString, secondString) {
  var resultString = firstString + ' ' + secondString;
  return resultString;
}

var combineResult = combineStrings('hello', 'world');
console.log(combineResult);

// Problem 3
function saySomething(input) {
   if (input == 'hello') {
     return 'hi';
   } else if (input === 'goodbye') {
     return 'bye';
   }
}

console.log(saySomething('hello'));
console.log(saySomething('goodbye'));

// Problem 4 
function isGreaterThanTen (number) {
  if (number > 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isGreaterThanTen(2));

// Problem 5
function printOneThruTen () {
  for (var i = 1; i < 11; ++i) {
    console.log(i);
  }
}

printOneThruTen();


// Problem 6
function evaluateOneThruTwenty() {
  for (var i = 1; i < 21; ++i) {
    if (i < 10) {
      console.log('small');
    } else {
      console.log('large');
    }
  }
}

evaluateOneThruTwenty();









































