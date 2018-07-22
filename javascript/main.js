var a = "hello";
var b = " world";
console.log(a + b);
document.body.innerHTML = "hello world!";

var number = 4;
var float = 4.1;
var string = "hello world";

var emptyString = "";
var string = 'This is a string';
var string = "a";

var concat = "hello" + "world";
var concat2 = 4 + "world";
var length = concat2.length;
var indexWorld = concat.indexOf('world');

var boolean = true;
var not = !boolean;
var and = boolean && false;
var or = boolean || false;
var equals = true == false;

if (age >= 21) {
    console.log("You get free beer");
}   else if (age < 18) {
    console.log("What are you even doing here?");
}   else {
    console.log("Sorry no beer for you");
}

var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

var count = 0;
while (count < 10){
    count = count + 1;
    console.log(count);
}

// increment
var count = 0;
while (count < 10) {
    console.log(count);
    //count = count + 1;
    count++;
}

for (var count=0; count < 10; count ++)
{
    console.log(count);
}


var lottoNums = [];
lottoNums.push(23);
lottoNums.push(11);
lottoNums.push(43);
lottoNums.push(19);
lottoNums.push(37);
lottoNums.push(16);

console.log(lottoNums);
// [23, 11, 43, 19, 37, 16]