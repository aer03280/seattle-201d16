'use strict';

var answer1 = confirm('Are you ready to rumble?');
if (answer1 === true) {
  console.log('LET\'S GET READY TO RUMBLE!!!');
} else {
  console.log('Oh. Well then.');
}

var myBool = true;
var anotherBool = false;
var thirdBool = true;

if (myBool || anotherBool) {
  console.log('Flerg the blerg!');
} else if (thirdBool) {
  console.log('You didn\'t flerg that blerg!');
} else {
  console.log('Did the blerg get flerged?');
}

// more code
