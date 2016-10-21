'use strict';

for (var i = 10; i > 0; i--) {
  console.log(i);
}

for (var i = 0; i < 200; i += 0.000001) {
  console.log(i);
  if (i === 0.000002) {
    break;
  }
}

for (var i = 0; i < 10; i++) {
  if (i < 5){
    continue;
  }
  console.log(i);
}

var myArray = ['l', 'a', 's', 'j', 'f', 'a', 's', 'd', 'j', 'k', 'g', 'h', 'k', 'a', 'j', 'd', 's', 'g', 'k', 'j', 'a', 'd', 'f', 's', 'a'];

for (var i = 0; i < myArray.length; i++){
  console.log(myArray[i]);
}
for (var i = 0; i < myArray.length; i++){
  myArray[i] = myArray[i].toUpperCase();
}

var myArray = [2, 4, 6, 8, 10, 12, 14];

for (var i = 0; i < myArray.length; i++){
  myArray[i] *= 2;
}

while (true) {
  // run this code;
  var input = prompt('alksjgdhasdhga');
  if (input === 'YES') {
    break;
  }
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
