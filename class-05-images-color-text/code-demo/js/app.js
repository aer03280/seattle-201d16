var one = document.getElementById('one');
var two = document.getElementById('two');
var oneStash, twoStash;

function sum(a, b) {
  var sumOutput = a + b;
  one.textContent = '"The sum of ' + a + ' and ' + b + ' is ' + sumOutput + '."';
  return sumOutput;
}

function multiply(a, b) {
  var multOutput = a * b;
  two.textContent = '"The product of ' + a + ' and ' + b + ' is ' + multOutput + '."';
  return multOutput;
}

function sumAndMultiply(a, b, c) {
  var sumMultOutput = [];

  oneStash = one.textContent;
  twoStash = two.textContent;
  sumMultOutput.push(sum(sum(a,b),c));
  sumMultOutput.push(multiply(multiply(a,b),c));
  one.textContent = oneStash;
  two.textContent = twoStash;

  console.log('"' + a + ' and ' + b + ' and ' + c + ' sum to ' + sumMultOutput[0] + '."');
  console.log('"The numbers ' + a + ' and ' + b + ' and ' + c + ' have a product of ' + sumMultOutput[1] + '."');
  return sumMultOutput;
}
