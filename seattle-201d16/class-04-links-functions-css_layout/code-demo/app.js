/*
start with zero guesses

loop for 6 times max
  run function1()
  run function2()
  if (some result) {
    do something else
  }
*/

// This corresponds to the above pseudocode
// var guesses = 0;
// for (var i = 0; i < 6; i++) {
//   function1();
//   var result = function2();
//   if (result === true) {
//     // something else
//   }
// }

function mutilateName(){
  var name = prompt('What\'s your name?');
  name = name.toUpperCase();
  var nameArray = name.split('');
  nameArray = nameArray.reverse();
  var firstLetter = nameArray[0];
}

function infiniteLoop(){
  while (true){
    console.log('OH MY GOD NO!');
  }
}

function newFunc(param1){
  console.log(param1);
}

function addMe(num1, num2){
  console.log(num1 + num2);
}

function addMeForReal(num1, num2){
  return num1 + num2;
  console.log('You will never see this');
}

function doMath(num1, num2, operation){
  var theOp = operation.toLowerCase();
  if (theOp === 'sum'){
    return num1 + num2;
  } else if (theOp === 'multiply') {
    return num1 * num2;
  } else if (theOp === 'divide') {
    return num1 / num2;
  } else if (theOp === 'subtract') {
    return num1 - num2;
  } else {
    return 'Invalid Operation';
  }
}

var toys = ['trucks', 'dolls', 'balls', 'nintendo'];

function playWithToys(){
  console.log('I played with ' + toys[0]);
}

var counter = 0;
function doThis(){
  console.log(counter);
  counter++;
}
for (var i = 0; i < 5; i++) {
  doThis();
}
