// var myArray = [-5 , -4 , -3 , -2 , -1 , 0 , 1 , 2 , 3 , 4 , 5];

// function positiveNumbers(num) {
//     return num > 0;
// }

// function positiveNumbersOutput() {
//     var posArray = myArray.filter(positiveNumbers);
//     console.log('The positive values: ' + posArray);
// }

// positiveNumbersOutput();

// var evenArray = [-5 , -4 , -3 , -2 , -1 , 0 , 1 , 2 , 3 , 4 , 5];

// function evenNumber(num) {
//     return num % 2 == 0;
// }

// function evenNumbersOutput() {
//     var evArray = evenArray.filter(evenNumber);
    // console.log('The even numbers: ' + evArray);
// }

// evenNumbersOutput()


// // square the Numbers

// var squareArray = [-5 , -4 , -3 , -2 , -1 , 0 , 1 , 2 , 3 , 4 , 5];

// function squareNumberOutput(num) {
//     return num * num;
// }
// arraySquare = squareArray.map(squareNumberOutput);

// console.log(arraySquare);



// //   Cites I

var cities = [ { name: 'Los Angeles', temperature: 60.0}, { name: 'Atlanta', temperature: 52.0 }, { name: 'Detroit', temperature: 48.0 }, { name: 'New York', temperature: 80.0 } ];

    var arrayTemp = cities.filter(function(tempRat) {
        if (tempRat ["temperature"] < 70) {
            return tempRat;}   
        }
    );

console.log(arrayTemp);

    var citiesArray = cities.map(function(city) {
        return (city['name']);
        }
    );

console.log(citiesArray);

// Good Job

var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

function goodJob(name) {
    people.map(function(name) {     
    console.log('Good Job ' + name + '!');
});
}
goodJob()

// Sort an Array

var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

function inOrderList() {
    people = people.sort();
    console.log(people);
};

inOrderList();

// Sort an Array 2
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

function myFunction() {
    var newPeople = people.sort(function(a, b){return a.length - b.length});
    console.log(newPeople);
};
myFunction();

function myFunction() {
    var arr = [[1, 3, 4], [2, 4, 6, 8], [3, 6]];
    var sum = [[arr[0].reduce(function(a, b) { return a + b; })], [arr[1].reduce(function(a, b) { return a + b; })], [arr[2].reduce(function(a, b) { return a + b; })]];
    sum.sort(function(a, b){return a - b});
    console.log(sum);
};

myFunction();

// 3 times
var fun = function helloWorld() {
    console.log("Hello World!")    
}
function call3Times(fun) { 
    fun();
    fun();
    fun();
};
call3Times(fun);

// n times
var fun = function helloWorld() {
    console.log("Hello World!")    
}
function callNTimes(n, fun) { 
    var times = n;
    for (n = 0; n < times; n++) {
    fun();
    }
};
callNTimes(5, fun);


function sum() {
    var arr = [1, 2, 3];
    var sum = arr.reduce(function(a, b) { return a + b; });
    console.log(sum);
};

sum();